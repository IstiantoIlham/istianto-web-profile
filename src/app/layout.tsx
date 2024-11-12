import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "next-themes"

const raleway = localFont({
  src: "./fonts/RalewayVF.ttf",
  weight: "100 200 300 400 500 600 700 800 900",
})

export const metadata: Metadata = {
  title: "Istianto Ilham | portfolio",
  description:
    "Fullstack Developer specializing in scalable, secure, and efficient systems with expertise in Node.js, Golang, and modern databases.",
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.className} antialiased`}>
        <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
      </body>
    </html>
  )
}
