import Navbar from "@/components/Navbar"
import React, { ReactNode } from "react"

export default function RootLayout({
  children,
}: {
  children: Readonly<ReactNode>
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
