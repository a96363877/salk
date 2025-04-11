import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Car } from "lucide-react"

export const metadata: Metadata = {
  title: "سالك - خدمة حجز السيارات",
  description: "تطبيق سالك لحجز السيارات وخدمات النقل في قطر",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans antialiased">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white py-3 px-4 flex items-center justify-between shadow-sm border-b">
          <div className="flex items-center gap-2">
            <div className="bg-sky-500 rounded-full p-1.5">
            </div>
            <img src="/cropped-Salik-Logo-En.webp" alt="2555" width={90}/>
          </div>
        </header>

        {children}
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
      </body>
    </html>
  )
}

