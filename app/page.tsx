import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MapPin, Calendar, Clock, Star, Shield, Car, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-right">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white py-3 px-4 flex items-center justify-between shadow-sm border-b">
        <div className="flex items-center gap-2">
          <div className="bg-sky-500 rounded-full p-1.5">
            <Car className="h-5 w-5 text-white" />
          </div>
          <span className="text-sky-500 font-bold text-xl">سالك</span>
        </div>
      </header>

      {/* Login Section */}
      <div className="bg-black text-white p-8 rounded-b-2xl text-center">
        <h2 className="text-2xl font-bold mb-6">حمل رسالتك وعيش التجربة</h2>
        <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-6 rounded-xl mb-4 font-bold text-lg">
          تسجيل الدخول
        </Button>
        <Button variant="outline" className="w-full border-white text-white py-6 rounded-xl font-bold text-lg">
          إنشاء حساب
        </Button>
      </div>

      {/* Features Section */}
      <div className="p-6 mt-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">عروض سالك</h3>
          <Button variant="ghost" className="text-sky-500 font-medium">
            عرض الكل
          </Button>
        </div>
        <p className="text-slate-600 mb-6 leading-relaxed">
          شركات المزودين على أعلى تقييم السيارات والشاحنات المتوفرة في قطر
        </p>

        <div className="space-y-5">
          <Card className="border-0 shadow-md rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-start p-5">
                <div className="bg-sky-100 p-3 rounded-full ml-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-sky-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">اختر الخدمة بأفضل الأسعار</h4>
                  <p className="text-slate-600 text-sm">مقارنة بين أفضل العروض من مزودي الخدمة المعتمدين</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-start p-5">
                <div className="bg-sky-100 p-3 rounded-full ml-4 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-sky-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">حدد موعدك وموقعك</h4>
                  <p className="text-slate-600 text-sm">اختر الوقت والمكان المناسب لاستلام سيارتك</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-start p-5">
                <div className="bg-sky-100 p-3 rounded-full ml-4 flex-shrink-0">
                  <Car className="h-6 w-6 text-sky-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">استلم سيارتك</h4>
                  <p className="text-slate-600 text-sm">استمتع بتجربة قيادة مميزة مع ضمان الجودة والأمان</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Car Listings */}
      <div className="p-6 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">مميزات الحجز</h3>
          <Link href="/fleet">
            <Button variant="ghost" className="text-sky-500 font-medium">
              عرض الأسطول
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="premium" className="mb-6">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="premium">فاخرة</TabsTrigger>
            <TabsTrigger value="economy">اقتصادية</TabsTrigger>
            <TabsTrigger value="suv">دفع رباعي</TabsTrigger>
          </TabsList>
          <TabsContent value="premium" className="space-y-6">
            <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=220&width=400"
                    alt="Mini Cooper"
                    width={400}
                    height={220}
                    className="w-full h-56 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-white text-black font-bold px-3 py-1.5 rounded-lg">
                    Mini Cooper EV
                  </Badge>
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-400 text-black font-bold px-2 py-1 rounded-lg text-sm">
                    <Star className="h-4 w-4 fill-black" />
                    4.9
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="flex items-center gap-1 px-3 py-1.5 rounded-full">
                        <Users className="h-4 w-4" />
                        <span>4 مقاعد</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 px-3 py-1.5 rounded-full">
                        <Shield className="h-4 w-4" />
                        <span>تأمين شامل</span>
                      </Badge>
                    </div>
                    <div className="text-sky-500 font-bold text-xl">ر.ق 250 / يوم</div>
                  </div>

                  <div className="flex items-center gap-3 mb-4 text-slate-600 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>استلام فوري</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>توصيل مجاني</span>
                    </div>
                  </div>

                  <Button className="w-full bg-sky-500 hover:bg-sky-600 py-6 rounded-xl font-bold text-lg">
                    احجز الآن
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=220&width=400"
                    alt="BMW 5 Series"
                    width={400}
                    height={220}
                    className="w-full h-56 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-white text-black font-bold px-3 py-1.5 rounded-lg">
                    BMW 5 Series
                  </Badge>
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-400 text-black font-bold px-2 py-1 rounded-lg text-sm">
                    <Star className="h-4 w-4 fill-black" />
                    4.8
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="flex items-center gap-1 px-3 py-1.5 rounded-full">
                        <Users className="h-4 w-4" />
                        <span>5 مقاعد</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 px-3 py-1.5 rounded-full">
                        <Shield className="h-4 w-4" />
                        <span>تأمين شامل</span>
                      </Badge>
                    </div>
                    <div className="text-sky-500 font-bold text-xl">ر.ق 450 / يوم</div>
                  </div>

                  <div className="flex items-center gap-3 mb-4 text-slate-600 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>استلام فوري</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>توصيل مجاني</span>
                    </div>
                  </div>

                  <Button className="w-full bg-sky-500 hover:bg-sky-600 py-6 rounded-xl font-bold text-lg">
                    احجز الآن
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="economy" className="space-y-6">
            <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=220&width=400"
                    alt="Toyota Corolla"
                    width={400}
                    height={220}
                    className="w-full h-56 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-white text-black font-bold px-3 py-1.5 rounded-lg">
                    Toyota Corolla
                  </Badge>
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-400 text-black font-bold px-2 py-1 rounded-lg text-sm">
                    <Star className="h-4 w-4 fill-black" />
                    4.7
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="flex items-center gap-1 px-3 py-1.5 rounded-full">
                        <Users className="h-4 w-4" />
                        <span>5 مقاعد</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 px-3 py-1.5 rounded-full">
                        <Shield className="h-4 w-4" />
                        <span>تأمين شامل</span>
                      </Badge>
                    </div>
                    <div className="text-sky-500 font-bold text-xl">ر.ق 150 / يوم</div>
                  </div>

                  <div className="flex items-center gap-3 mb-4 text-slate-600 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>استلام فوري</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>توصيل مجاني</span>
                    </div>
                  </div>

                  <Button className="w-full bg-sky-500 hover:bg-sky-600 py-6 rounded-xl font-bold text-lg">
                    احجز الآن
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="suv" className="space-y-6">
            <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=220&width=400"
                    alt="Toyota Land Cruiser"
                    width={400}
                    height={220}
                    className="w-full h-56 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-white text-black font-bold px-3 py-1.5 rounded-lg">
                    Toyota Land Cruiser
                  </Badge>
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-400 text-black font-bold px-2 py-1 rounded-lg text-sm">
                    <Star className="h-4 w-4 fill-black" />
                    4.9
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="flex items-center gap-1 px-3 py-1.5 rounded-full">
                        <Users className="h-4 w-4" />
                        <span>7 مقاعد</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 px-3 py-1.5 rounded-full">
                        <Shield className="h-4 w-4" />
                        <span>تأمين شامل</span>
                      </Badge>
                    </div>
                    <div className="text-sky-500 font-bold text-xl">ر.ق 550 / يوم</div>
                  </div>

                  <div className="flex items-center gap-3 mb-4 text-slate-600 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>استلام فوري</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>توصيل مجاني</span>
                    </div>
                  </div>

                  <Button className="w-full bg-sky-500 hover:bg-sky-600 py-6 rounded-xl font-bold text-lg">
                    احجز الآن
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Toyota Section */}
      <div className="p-6 bg-slate-50">
        <div className="flex justify-center mb-8">
          <Image
            src="/placeholder.svg?height=50&width=150"
            alt="Toyota Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>

        <Card className="border-0 shadow-lg rounded-xl overflow-hidden mb-6">
          <CardContent className="p-0">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=220&width=400"
                alt="Toyota Car"
                width={400}
                height={220}
                className="w-full h-56 object-cover"
              />

              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <div className="flex justify-between items-center">
                    <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-sm">
                      <ChevronLeft className="h-5 w-5 text-slate-700" />
                    </Button>
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-sky-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-sm">
                      <ChevronRight className="h-5 w-5 text-slate-700" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-sky-500 p-8 text-white text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="bg-white rounded-full p-1.5">
            <Car className="h-6 w-6 text-sky-500" />
          </div>
          <span className="font-bold text-2xl">سالك</span>
        </div>
        <p className="text-sm opacity-90 mb-2">الشريك الأمثل لتأجير السيارات في قطر</p>
        <p className="text-sm opacity-75">جميع الحقوق محفوظة © 2023</p>
      </footer>
    </div>
  )
}
