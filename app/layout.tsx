import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

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
          {children}
      </body>
    </html>
  )
}

