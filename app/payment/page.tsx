"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { CreditCard, Calendar, Lock, Shield,  CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"

export default function PaymentPage() {
  const [showOtpDialog, setShowOtpDialog] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [otpError, setOtpError] = useState(false)
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [timeLeft, setTimeLeft] = useState(120)

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault()
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

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-right">
 
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
              src="/placeholder.svg?height=80&width=120"
              alt="Changan C1"
              width={120}
              height={80}
              className="w-24 h-20 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-bold text-lg">Changan C1</h3>
              <div className="flex gap-3 text-sm text-gray-500 mt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>3 أيام</span>
                </span>
                <span>•</span>
                <span>ر.ق 750</span>
              </div>
            </div>
          </div>

          <Separator className="mb-6" />

          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-500">سعر الإيجار (3 أيام)</span>
              <span>ر.ق 750</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">ضريبة القيمة المضافة (5%)</span>
              <span>ر.ق 37.5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">تأمين شامل</span>
              <span>ر.ق 100</span>
            </div>
          </div>

          <Separator className="mb-6" />

          <div className="flex justify-between font-bold text-lg">
            <span>المجموع</span>
            <span>ر.ق 887.5</span>
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
                alt="Mastercard"
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
                  className="border-gray-300 rounded-lg py-5 text-right pr-10"
                  maxLength={19}
                />
                <CreditCard className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
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
                    className="border-gray-300 rounded-lg py-5 text-right pr-10"
                    maxLength={5}
                  />
                  <Calendar className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cvv" className="text-sm text-gray-600">
                  رمز الأمان (CVV)
                </Label>
                <div className="relative">
                  <Input
                    id="cvv"
                    placeholder="000"
                    className="border-gray-300 rounded-lg py-5 text-right pr-10"
                    maxLength={3}
                    type="password"
                  />
                  <Lock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardholderName" className="text-sm text-gray-600">
                اسم حامل البطاقة
              </Label>
              <Input
                id="cardholderName"
                placeholder="الاسم كما يظهر على البطاقة"
                className="border-gray-300 rounded-lg py-5 text-right"
              />
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

              <div className="mb-6">
                <Label className="text-sm text-gray-600 mb-3 block">رمز التحقق</Label>
                <div className="flex justify-between gap-2 dir-ltr">
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
