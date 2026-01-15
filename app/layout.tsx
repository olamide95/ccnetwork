import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Christ Compassion Network Int'l - Faith-Based Mental Health Care",
  description:
    "A safe, faith-based space for mental health healing and wellness. Compassionate Christian counselling for those seeking help with mental health challenges.",
  generator: "v0.app",
  openGraph: {
    title: "Christ Compassion Network Int'l - Faith-Based Mental Health Care",
    description:
      "A safe, faith-based space for mental health healing and wellness. Compassionate Christian counselling for those seeking help with mental health challenges.",
    images: [
      {
        url: "https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1920",
        width: 1920,
        height: 1080,
        alt: "Christ Compassion Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christ Compassion Network Int'l - Faith-Based Mental Health Care",
    description: "A safe, faith-based space for mental health healing and wellness.",
    images: ["https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1920"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
