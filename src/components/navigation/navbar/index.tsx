"use client"

import SunIcon from "@/assets/SunIcon"
import { useTheme } from "next-themes"

function Navbar() {
  const { theme, setTheme } = useTheme()
  return (
    <nav className="flex-between bg-base-200 p-6">
      <h1 className="h1-bold">
        Anto<span className="text-primary">Portofolio</span>
      </h1>
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          className="theme-controller"
          onClick={() => {
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }}
        />
        {theme === "light" ? <SunIcon /> : <MoonIcon />}

        <svg
          className="swap-on h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </nav>
  )
}

export default Navbar
