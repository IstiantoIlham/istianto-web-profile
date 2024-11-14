"use client"

import BugIcon from "@/assets/BugIcon"
import ComputerIcon from "@/assets/ComputerIcon"
import LinkIcon from "@/assets/LinkIcon"
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
          <button
            name="social_media"
            tabIndex={0}
            role="button"
            className="btn btn-circle btn-ghost"
          >
            <LinkIcon className="size-7" />
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-2 w-40 rounded-box bg-base-200 p-2 shadow"
          >
            <li>
              <Link
                href={"https://github.com/IstiantoIlham"}
                className="base-medium"
                target="_blank"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.linkedin.com/in/istianto-ilham/"}
                className="base-medium"
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.instagram.com/hello.anto/"}
                className="base-medium"
                target="_blank"
              >
                Instagram
              </Link>
            </li>
            <li className="rounded-btn bg-primary text-primary-content md:hidden">
              <Link
                className="base-medium"
                target="_blank"
                href={
                  "https://api.whatsapp.com/send/?phone=6281230729945&text&type=phone_number&app_absent=0"
                }
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Link href="/" className="h1-bold navbar-center">
        Anto<span className="text-primary">Portfolio</span>
      </Link>
      <div className="navbar-end flex items-center gap-2">
        <Link
          className="btn hidden bg-primary text-primary-content md:flex"
          target="_blank"
          href={
            "https://api.whatsapp.com/send/?phone=6281230729945&text&type=phone_number&app_absent=0"
          }
        >
          Contact Me
        </Link>
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
