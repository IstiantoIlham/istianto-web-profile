"use client"

import BugIcon from "@/assets/BugIcon"
import ComputerIcon from "@/assets/ComputerIcon"
import MenuIcon from "@/assets/MenuIcon"
import MoonIcon from "@/assets/MoonIcon"
import SunIcon from "@/assets/SunIcon"
import { useTheme } from "next-themes"
import Link from "next/link"
import { ReactNode, useEffect, useState } from "react"

function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  type ThemeMode = "light" | "dark" | "dracula" | "system"

  const themeOptions: Record<ThemeMode, { icon: ReactNode; label: string }> = {
    light: {
      icon: <SunIcon className="size-6" />,
      label: "Light",
    },
    dark: {
      icon: <MoonIcon className="size-6" />,
      label: "Dark",
    },
    dracula: {
      icon: <BugIcon className="size-6" />,
      label: "Dracula",
    },
    system: {
      icon: <ComputerIcon className="size-6" />,
      label: "System",
    },
  }

  const themeIcon = themeOptions[(theme as ThemeMode) || "system"].icon

  return (
    <nav className="navbar fixed z-10 bg-base-200 p-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
            <MenuIcon className="size-7" />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-2 w-40 rounded-box bg-base-200 p-2 shadow"
          >
            <li>
              <p className="base-medium">Homepage</p>
            </li>
            <li>
              <p className="base-medium">About</p>
            </li>
            <li>
              <p className="base-medium">Portfolio</p>
            </li>
            <li className="block rounded-md bg-primary text-base-100 md:hidden">
              <p className="base-medium">Contact Me</p>
            </li>
          </ul>
        </div>
      </div>
      <Link href="/" className="h1-bold navbar-center">
        Anto<span className="text-primary">Portfolio</span>
      </Link>
      <div className="navbar-end flex items-center gap-2">
        <button className="btn btn-primary hidden md:block">Contact Me</button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-circle btn-ghost">
            {mounted ? themeIcon : <SunIcon className="size-6 animate-spin" />}
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-2 w-fit rounded-box bg-base-200 p-2 shadow"
          >
            {Object.entries(themeOptions).map(([mode, { icon, label }]) => (
              <li key={mode}>
                <button
                  className="space-x-2"
                  onClick={() => setTheme(mode as ThemeMode)}
                >
                  {icon}
                  <p className="base-medium">{label}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
