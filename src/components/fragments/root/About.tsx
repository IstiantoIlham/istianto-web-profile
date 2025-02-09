import React from "react"

function About() {
  return (
    <section className="flex-column h-screen items-center justify-center">
      <div className="flex-column items-center gap-3 p-6 text-center md:w-1/2">
        <h1 className="h1-bold">About Me</h1>
        <h1 className="jumbo-bold">
          I am a <span className="text-primary">software developer</span> with
          expertise in modern technologies
        </h1>
        <p className="base-medium">
          I am a fullstack developer specializing in building scalable, secure,
          and efficient systems using modern technologies such as Node.js,
          Golang, and both relational and non-relational databases. With
          experience in both frontend and backend development, I am equipped to
          handle the complete application lifecycle. I am passionate about
          continuous learning and consistently aim to enhance my skills to
          create innovative solutions that meet user needs and improve user
          experiences.
        </p>
      </div>
    </section>
  )
}

export default About
