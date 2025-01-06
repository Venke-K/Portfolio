import React from 'react'

export default function HeroSection() {
  return (
    <div>
      {/* <section className="hero bg-primary text-white text-center py-5">
  <div className="container">
    <h1 className="display-4">Hi, I'm Venkat</h1>
    <p className="lead">MERN Stack Developer | Building impactful web applications</p>
    <div className="mt-4">
      <a href="#projects" className="btn btn-light btn-lg me-2">View Projects</a>
      <a href="#contact" className="btn btn-outline-light btn-lg">Contact Me</a>
    </div>
  </div>
</section> */}


<section className="hero bg-light text-dark text-center py-5 position-relative">
  {/* Decorative Overlay */}
  <div className="hero-overlay"></div>
  <div className="container">
    <h1 className="display-4 fw-bold mb-3">Hi, I'm <span className="text-primary">Venkat</span></h1>
    <p className="lead mb-4">MERN Stack Developer | Building impactful web experiences</p>
    <div className="d-flex justify-content-center gap-3">
      <a href="#projects" className="btn btn-primary btn-lg px-4 py-2">
        View Projects
      </a>
      <a href="#contact" className="btn btn-outline-dark btn-lg px-4 py-2">
        Contact Me
      </a>
    </div>
  </div>
</section>




    </div>
  )
}
