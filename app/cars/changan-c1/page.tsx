import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs } from "@/components/ui/tabs"
import { Calendar, Clock, Users, Briefcase, Car, MapPin, ChevronLeft } from "lucide-react"

export default function ChanganC1Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-right">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white py-3 px-4 flex items-center justify-between shadow-sm border-b">
        <div className="flex items-center gap-2">
          <div className="bg-sky-500 rounded-full p-1.5">
            <Car className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sky-500 font-bold text-lg">سالك</span>
            <span className="text-gray-500 text-xs">SALIK</span>
          </div>
        </div>
        <button className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </header>

      {/* Car Hero Section */}
      <div className="relative">
        <Image
          src="/placeholder.svg?height=300&width=500"
          alt="Changan C1"
          width={500}
          height={300}
          className="w-full h-72 object-cover rounded-b-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl"></div>
        <div className="absolute bottom-0 right-0 p-6 text-white">
          <h1 className="text-2xl font-bold mb-1">Changan C1</h1>
          <div className="flex gap-3 text-sm">
            <span>الرئيسية</span>
            <ChevronLeft className="h-5 w-5" />
            <span>للاستئجار</span>
          </div>
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
            <span className="font-medium text-black">سيدان</span>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-sky-500">
                <Users className="h-5 w-5" />
                <span className="font-bold">4</span>
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
                <span className="font-bold">4</span>
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

      {/* Booking Form */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">استأجر الآن</h2>

        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-600 flex items-center gap-1">
              <span>الاسم بالكامل</span>
              <span className="text-red-500">*</span>
            </label>
            <Input type="text" placeholder="أدخل اسمك هنا" className="border-gray-300 rounded-lg py-5 text-right" />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600 flex items-center gap-1">
              <span>البريد الإلكتروني</span>
              <span className="text-red-500">*</span>
            </label>
            <Input
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
                placeholder="0000 000 0000"
                className="border-gray-300 rounded-lg py-5 text-right flex-1"
              />
              <div className="border border-gray-300 rounded-lg px-3 flex items-center justify-center bg-gray-50 text-gray-500">
                <span>+974</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600 flex items-center gap-1">
              <span>وقت الاستلام</span>
              <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input type="text" placeholder="00:00" className="border-gray-300 rounded-lg py-5 text-right pr-10" />
                <Clock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="يوم/شهر/سنة"
                  className="border-gray-300 rounded-lg py-5 text-right pr-10"
                />
                <Calendar className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>
          </div>

          <Button className="w-full bg-green-500 hover:bg-green-600 py-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6 6.32A7.85 7.85 0 0 0 12.1 4c-4.4 0-8 3.58-8 8 0 1.33.33 2.72 1 4.06L4 21l5.07-1.33c1.28.69 2.73 1.05 4.2 1.05h.03c4.4 0 8-3.58 8-8 0-2.12-.82-4.12-2.3-5.62l.6.22zM12.1 19.4c-1.2 0-2.38-.32-3.4-.92l-.25-.15-2.5.65.67-2.44-.16-.26a6.59 6.59 0 0 1-1.02-3.52c0-3.66 3-6.64 6.68-6.64 1.78 0 3.46.7 4.72 1.96a6.65 6.65 0 0 1 1.96 4.73c0 3.66-3 6.64-6.68 6.64l-.02-.05z" />
              <path d="M16.06 14.19c-.2-.1-1.19-.59-1.37-.65-.18-.07-.32-.1-.45.1-.13.2-.5.65-.62.78-.11.13-.23.15-.43.05-.2-.1-.86-.32-1.63-1.01-.6-.54-1-1.2-1.12-1.4-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.47-.16-.39-.33-.33-.45-.34-.12-.01-.25-.01-.38-.01-.13 0-.34.05-.52.25-.18.2-.68.67-.68 1.63 0 .96.7 1.89.8 2.02.1.13 1.4 2.13 3.38 2.99.47.2.84.33 1.13.42.47.15.9.13 1.24.08.38-.06 1.17-.48 1.33-.94.16-.46.16-.86.11-.94-.05-.08-.18-.12-.38-.21z" />
            </svg>
            <span>احجز عن طريق الواتساب</span>
          </Button>
        </form>

        <div className="text-center my-6 text-gray-500">
          <span>أو</span>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="#" className="block">
            <Image
              src="/placeholder.svg?height=50&width=180"
              alt="Download on the App Store"
              width={180}
              height={50}
              className="h-12 w-full object-contain"
            />
          </Link>
          <Link href="#" className="block">
            <Image
              src="/placeholder.svg?height=50&width=180"
              alt="Get it on Google Play"
              width={180}
              height={50}
              className="h-12 w-full object-contain"
            />
          </Link>
        </div>

        <p className="text-xs text-gray-500 mt-4 leading-relaxed">
          بتسجيلك، فإنك توافق على شروط الاستخدام وسياسة الخصوصية الخاصة بنا. سيتم استخدام بياناتك الشخصية لدعم تجربتك في
          هذا الموقع.
        </p>
      </div>

      {/* Location */}
      <div className="p-4 flex items-center gap-2 text-gray-600 text-sm">
        <MapPin className="h-4 w-4 text-sky-500" />
        <span>طريق 974 مجمع 2729، الدوحة</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 text-sky-500"
        >
          <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06z" />
          <path d="M10 2c1 .5 2 2 2 5" />
        </svg>
        <span>وسط الدوحة التجاري</span>
      </div>

      {/* Car Interior Images */}
      <div className="p-4">
        <Tabs defaultValue="interior">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Car Interior"
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? "bg-white" : "bg-white/50"}`}></div>
              ))}
            </div>
          </div>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="mt-auto">
        <div className="bg-sky-500 text-white p-8 rounded-t-3xl">
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full p-3">
              <Car className="h-8 w-8 text-sky-500" />
            </div>
          </div>
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold mb-1">سالك</h3>
            <p className="text-sm opacity-80">SALIK</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm mb-8">
            <div className="space-y-2">
              <h4 className="font-bold mb-2">روابط مهمة</h4>
              <ul className="space-y-2">
                <li>أسطول سالك</li>
                <li>من نحن</li>
                <li>أخر التحديثات</li>
                <li>تواصل معنا</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold mb-2">روابط سريعة</h4>
              <ul className="space-y-2">
                <li>أسئلة وأجوبة</li>
                <li>خصوصية</li>
                <li>رياضة</li>
                <li>دفع رباعي</li>
              </ul>
            </div>
          </div>

          <div className="relative mb-6">
            <Input
              type="text"
              placeholder="البحث"
              className="bg-white/10 border-0 rounded-lg py-5 text-right pr-10 placeholder-white/70"
            />
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
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white h-5 w-5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>

          <div className="flex justify-center gap-4 mb-6">
            <Link href="#" className="bg-white/10 p-2 rounded-full">
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
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link href="#" className="bg-white/10 p-2 rounded-full">
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
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </Link>
            <Link href="#" className="bg-white/10 p-2 rounded-full">
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
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link href="#" className="bg-white/10 p-2 rounded-full">
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
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
          </div>

          <div className="flex justify-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <span>العربية</span>
              <Image
                src="/placeholder.svg?height=20&width=30"
                alt="Arabic"
                width={30}
                height={20}
                className="h-4 w-6 object-cover rounded-sm"
              />
            </div>
            <div className="flex items-center gap-1 opacity-70">
              <span>English</span>
              <Image
                src="/placeholder.svg?height=20&width=30"
                alt="English"
                width={30}
                height={20}
                className="h-4 w-6 object-cover rounded-sm"
              />
            </div>
          </div>
        </div>

        <div className="bg-sky-600 text-white p-4 text-center text-xs">
          <p className="opacity-80">جميع الحقوق محفوظة © شركة سالك 2023 - 2024</p>
          <p className="opacity-80 mt-1">تم التطوير والتصميم من خلال شركة ماكسيس ميديا قطر</p>
        </div>
      </footer>
    </div>
  )
}
