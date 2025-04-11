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
              <Car className="h-5 w-5 text-white" />
            </div>
            <span className="text-sky-500 font-bold text-xl">سالك</span>
          </div>
        </header>

        {children}
      </body>
    </html>
  )
}

