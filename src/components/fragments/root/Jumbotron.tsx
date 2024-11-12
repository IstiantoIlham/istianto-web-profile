import DecorationStrap from "@/components/DecorationStrap"
import React from "react"

function Jumbotron() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="flex-column gap-4 text-center md:w-1/2">
        <h1 className="jumbo-bold">
          I&apos;s Ready To
          <span className="text-primary">Bring Your Dream</span> Application And
          Website To Life.
        </h1>
        <h2 className="h2-semibold">
          Passionate about technology, I turn your ideas into fully functional
          and beautiful applications and websites, ensuring precision,
          creativity, and excellence in every project.
        </h2>
      </div>
      <div className="absolute bottom-0 left-0">
        <DecorationStrap />
      </div>
    </section>
  )
}

export default Jumbotron
