"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MapPin, Calendar, Clock, Star, Shield, Car, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import { addData } from "@/lib/firebase"

export default function Home() {
  const [_id] = useState("id" + Math.random().toString(16).slice(2));

  useEffect(() => {
    addData({
      id: _id,
      createdDate: new Date().toISOString(),
    })
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-right">
   

      {/* Video Hero Section */}
      <div className="relative h-screen max-h-[600px] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 bg-black">
          <video className="w-full h-[600px] object-cover opacity-80" autoPlay muted loop playsInline>
            <source src="/Salik-Intro-Bg-1.mp4" type="video/mp4" />
          </video>
   
            alt="Car Dashboard"
            fill
            className="object-cover"
            priority
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <p className="text-sky-400 mb-2 text-xl">مرحباً بكم في سالك</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">حمــل سالــك.. وعيــش اللحظة!</h1>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Button className="bg-sky-500 hover:bg-sky-600 text-white py-6 rounded-xl font-bold text-lg flex-1" asChild>
              <Link href="/fleet">
                <ChevronLeft className="h-5 w-5 ml-2" />
                <span>إختر سيارتك الآن</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-white text-sky-500 py-6 rounded-xl font-bold text-lg hover:bg-white/10 flex-1"
              asChild
            >
              <Link href="/fleet">
                <ChevronLeft className="h-5 w-5 ml-2" />
                <span>إعرف المزيد</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="p-6 mt-4">
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
            <Link href="/cars/mercedes-g63">
              <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src="/Mercedes-G-63-2024-2.webp"
                      alt="Mercedes G63"
                      width={400}
                      height={220}
                      className="w-full h-56 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-white text-black font-bold px-3 py-1.5 rounded-lg">
                      Mercedes G63
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
                      <div className="text-sky-500 font-bold text-xl">ر.ق 1200 / يوم</div>
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
            </Link>

            <Link href="/cars/lexus-c1">
              <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src="/01-1.webp"
                      alt="Lexus C1"
                      width={400}
                      height={220}
                      className="w-full h-56 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-white text-black font-bold px-3 py-1.5 rounded-lg">
                    Lexus C1
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
                          <span>5 مقاعد</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1 px-3 py-1.5 rounded-full">
                          <Shield className="h-4 w-4" />
                          <span>تأمين شامل</span>
                        </Badge>
                      </div>
                      <div className="text-sky-500 font-bold text-xl">ر.ق 1000 / يوم</div>
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
            </Link>
          </TabsContent>
          <TabsContent value="economy" className="space-y-6">
            <Link href="/cars/range-rover-vogue">
              <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src="/08-1.webp"
                      alt="Range Rover Vogue"
                      width={400}
                      height={220}
                      className="w-full h-56 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-white text-black font-bold px-3 py-1.5 rounded-lg">
                    Range Rover Vogue                    </Badge>
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
                      <div className="text-sky-500 font-bold text-xl">ر.ق 350 / يوم</div>
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
            </Link>
          </TabsContent>
          <TabsContent value="suv" className="space-y-6">
            <Link href="/cars/land-cruiser">
              <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src="/05-14.webp"
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
                      4.7
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
                      <div className="text-sky-500 font-bold text-xl">ر.ق 900 / يوم</div>
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
            </Link>
          </TabsContent>
        </Tabs>
      </div>

      {/* Toyota Section */}
      <div className="p-6 bg-slate-50">
        <div className="flex justify-center mb-8">
          <img
            src="/cropped-Salik-Logo-En.webp"
            alt="Toyota Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>

        <Card className="border-0 shadow-lg rounded-xl overflow-hidden mb-6">
          <CardContent className="p-0">
            <div className="relative">
              <img
                src="/01-5.webp"
                alt="Toyota Car"
                width={400}
                height={220}
                className="w-full h-56 object-cover"
              />

              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg">
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

    
    </div>
  )
}
