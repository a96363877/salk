import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FleetPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-right">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white py-3 px-4 flex items-center justify-between shadow-sm border-b">
        <div className="flex items-center gap-2">
          <div className="bg-sky-500 rounded-full p-1.5">
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
              className="h-5 w-5 text-white"
            >
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <path d="M9 17h6" />
              <circle cx="17" cy="17" r="2" />
            </svg>
          </div>
          <span className="text-sky-500 font-bold text-xl">سالك</span>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10"></div>
        <Image
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
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Car Listings */}
      <div className="flex-1 p-4 space-y-4">
        {/* Land Rover Defender */}
        <Card className="overflow-hidden border-0 shadow-md rounded-xl">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=180&width=320"
              alt="Land Rover Defender"
              width={320}
              height={180}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">Land Rover Defender</h3>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.9</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-600 mb-3">
              <div className="flex items-center gap-2">
                <span>4 مقاعد</span>
                <span>•</span>
                <span>4 أبواب</span>
              </div>
              <div className="text-sky-500 font-bold">ر.ق 750 / يوم</div>
            </div>
            <Button className="w-full bg-sky-500 hover:bg-sky-600">احجز الآن</Button>
          </div>
        </Card>

        {/* Land Cruiser */}
        <Card className="overflow-hidden border-0 shadow-md rounded-xl">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=180&width=320"
              alt="Land Cruiser"
              width={320}
              height={180}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">Land Cruiser</h3>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.8</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-600 mb-3">
              <div className="flex items-center gap-2">
                <span>7 مقاعد</span>
                <span>•</span>
                <span>4 أبواب</span>
              </div>
              <div className="text-sky-500 font-bold">ر.ق 650 / يوم</div>
            </div>
            <Button className="w-full bg-sky-500 hover:bg-sky-600">احجز الآن</Button>
          </div>
        </Card>

        {/* Hyundai Creta */}
        <Card className="overflow-hidden border-0 shadow-md rounded-xl">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=180&width=320"
              alt="Hyundai Creta"
              width={320}
              height={180}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">Hyundai Creta</h3>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.7</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-600 mb-3">
              <div className="flex items-center gap-2">
                <span>5 مقاعد</span>
                <span>•</span>
                <span>4 أبواب</span>
              </div>
              <div className="text-sky-500 font-bold">ر.ق 200 / يوم</div>
            </div>
            <Button className="w-full bg-sky-500 hover:bg-sky-600">احجز الآن</Button>
          </div>
        </Card>

        {/* Mini Cooper EV */}
        <Card className="overflow-hidden border-0 shadow-md rounded-xl">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=180&width=320"
              alt="Mini Cooper EV"
              width={320}
              height={180}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">Mini Cooper EV</h3>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.9</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-600 mb-3">
              <div className="flex items-center gap-2">
                <span>4 مقاعد</span>
                <span>•</span>
                <span>2 أبواب</span>
              </div>
              <div className="text-sky-500 font-bold">ر.ق 250 / يوم</div>
            </div>
            <Button className="w-full bg-sky-500 hover:bg-sky-600">احجز الآن</Button>
          </div>
        </Card>

        {/* Mercedes G63 */}
        <Card className="overflow-hidden border-0 shadow-md rounded-xl">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=180&width=320"
              alt="Mercedes G63"
              width={320}
              height={180}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">Mercedes G63</h3>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">5.0</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-600 mb-3">
              <div className="flex items-center gap-2">
                <span>5 مقاعد</span>
                <span>•</span>
                <span>4 أبواب</span>
              </div>
              <div className="text-sky-500 font-bold">ر.ق 1200 / يوم</div>
            </div>
            <Button className="w-full bg-sky-500 hover:bg-sky-600">احجز الآن</Button>
          </div>
        </Card>

        {/* Nissan Kicks */}
        <Card className="overflow-hidden border-0 shadow-md rounded-xl">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=180&width=320"
              alt="Nissan Kicks"
              width={320}
              height={180}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">Nissan Kicks</h3>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.6</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-600 mb-3">
              <div className="flex items-center gap-2">
                <span>5 مقاعد</span>
                <span>•</span>
                <span>4 أبواب</span>
              </div>
              <div className="text-sky-500 font-bold">ر.ق 180 / يوم</div>
            </div>
            <Button className="w-full bg-sky-500 hover:bg-sky-600">احجز الآن</Button>
          </div>
        </Card>

        {/* Lexus C1 */}
        <Card className="overflow-hidden border-0 shadow-md rounded-xl">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=180&width=320"
              alt="Lexus C1"
              width={320}
              height={180}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">Lexus C1</h3>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.8</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-600 mb-3">
              <div className="flex items-center gap-2">
                <span>5 مقاعد</span>
                <span>•</span>
                <span>4 أبواب</span>
              </div>
              <div className="text-sky-500 font-bold">ر.ق 550 / يوم</div>
            </div>
            <Button className="w-full bg-sky-500 hover:bg-sky-600">احجز الآن</Button>
          </div>
        </Card>
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
