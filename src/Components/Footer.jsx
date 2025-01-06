import React from 'react'

function Footer() {
  return (
    <div>
{/* <!-- Compact Footer --> */}
<footer className="footer bg-dark text-white py-4">
  <div className="container">
    <div className="row align-items-center">
      {/* <!-- Branding --> */}
      <div className="col-md-6 text-center text-md-start">
        <p className="mb-0">© 2024 Venky. Built with MERN Stack.</p>
      </div>

      {/* <!-- Social Media Links --> */}
      <div className="col-md-6 text-center text-md-end">
        <a href="https://www.linkedin.com/in/venkatesan-k-01b6311a0/" target="_blank" className="text-white mx-3" aria-label="LinkedIn">
          <i className="bi bi-linkedin fs-4"></i>
        </a>
        <a href="https://github.com/Venke-K?tab=repositories" target="_blank" className="text-white mx-3" aria-label="GitHub">
          <i className="bi bi-github fs-4"></i>
        </a>
        <a href="mailto:venkatjp62@gmail.com" className="text-white mx-3" aria-label="Email">
          <i className="bi bi-envelope fs-4"></i>
        </a>
      </div>
    </div>
  </div>
</footer>





    </div>
  )
}

export default Footer
