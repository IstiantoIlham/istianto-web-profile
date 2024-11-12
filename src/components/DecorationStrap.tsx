import StarIcon from "@/assets/StarIcon"
import React from "react"

function DecorationStrap() {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="flex animate-infinite-scroll items-start gap-4 bg-primary p-4 text-primary-content">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex items-center gap-4">
            <h1 className="h1-bold inline-block">Software Developer</h1>
            <StarIcon className="size-6" />
          </div>
        ))}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex items-center gap-4">
            <h1 className="h1-bold inline-block">Software Developer</h1>
            <StarIcon className="size-6" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DecorationStrap
