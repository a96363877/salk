import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cars } from "@/lib/cars"

export default function FleetPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-right">

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10"></div>
        <img
          src="/placeholder.svg?height=200&width=400"
          alt="Fleet Banner"
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center p-6">
          <h1 className="text-2xl font-bold mb-2">أسطول سالك</h1>
          <p className="text-sm font-medium">استكشف أسطولنا المثالي والواسع</p>
        </div>
      </div>

      {/* Filters */}
      <div className="p-4 bg-white border-b">
        <p className="text-sm text-slate-600 mb-4">استكشف مجموعة متنوعة من السيارات المتاحة للإيجار في قطر</p>

        <div className="grid gap-3">
          <Select>
            <SelectTrigger className="w-full border border-sky-500 text-sky-500 bg-white">
              <SelectValue placeholder="نوع" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">الكل</SelectItem>
              <SelectItem value="suv">دفع رباعي</SelectItem>
              <SelectItem value="sedan">سيدان</SelectItem>
              <SelectItem value="luxury">فاخرة</SelectItem>
              <SelectItem value="economy">اقتصادية</SelectItem>
            </SelectContent>
          </Select>

          <div className="grid grid-cols-2 gap-3">
            <Select>
              <SelectTrigger className="w-full border border-slate-300 bg-white">
                <SelectValue placeholder="الموقع" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="doha">الدوحة</SelectItem>
                <SelectItem value="lusail">لوسيل</SelectItem>
                <SelectItem value="wakra">الوكرة</SelectItem>
                <SelectItem value="alKhor">الخور</SelectItem>
                <SelectItem value="dukhan">دخان</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full border border-slate-300 bg-white">
                <SelectValue placeholder="الماركة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="toyota">تويوتا</SelectItem>
                <SelectItem value="mercedes">مرسيدس</SelectItem>
                <SelectItem value="bmw">بي إم دبليو</SelectItem>
                <SelectItem value="nissan">نيسان</SelectItem>
                <SelectItem value="hyundai">هيونداي</SelectItem>
                <SelectItem value="mini">ميني</SelectItem>
                <SelectItem value="lexus">لكزس</SelectItem>
                <SelectItem value="land-rover">لاند روفر</SelectItem>
                <SelectItem value="changan">شانجان</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Car Listings */}
      <div className="flex-1 p-4 space-y-4">
        {cars.map((car) => (
          <Link href={`/cars/${car.id}`} key={car.id} className="block">
            <Card className="overflow-hidden border-0 shadow-md rounded-xl hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  width={320}
                  height={180}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-3">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">{car.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{car.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm text-slate-600 mb-3">
                  <div className="flex items-center gap-2">
                    <span>{car.seats} مقاعد</span>
                    <span>•</span>
                    <span>{car.doors} أبواب</span>
                  </div>
                  <div className="text-sky-500 font-bold">ر.ق {car.price} / يوم</div>
                </div>
                <Button className="w-full bg-sky-500 hover:bg-sky-600">احجز الآن</Button>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-white p-4 border-t text-center">
        <div className="flex justify-center items-center text-sky-500">
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
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        </div>
      </footer>
    </div>
  )
}
