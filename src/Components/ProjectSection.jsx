import React from 'react'

function ProjectSection() {
  return (
    <div>
     

     <section id="projects" className="projects-section py-5">
  <div className="container">
    <h2 className="text-center fw-bold mb-4">My Projects</h2>
    <p className="text-center text-muted mb-5">Discover my recent projects. Click below to view them live or explore the code on GitHub.</p>

    <div className="row g-4">
      
      {/* <!-- Project Card 1 --> */}
      <div className="col-md-6 col-lg-4">
        <div className="modern-card shadow-sm border-0 rounded overflow-hidden position-relative">
          <img src="https://as1.ftcdn.net/v2/jpg/04/78/39/42/1000_F_478394231_MWBrFqLusrv61ywVhWJh2aOhBcE3ZMkG.jpg" className="card-img-top" alt="Fitness Tracker"/>
          <div className="modern-card-content p-4 text-white d-flex flex-column justify-content-end">
            <h5 className="fw-bold mb-2">Fitness Tracker</h5>
            <p className="text-light">A full-stack app to monitor and analyze fitness activities, built with React and MongoDB.</p>
            <p className="text-light"><small>Tech Stack: React, Node.js, MongoDB</small></p>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <a href="https://resonant-lebkuchen-36da1d.netlify.app/" target="_blank" className="btn btn-primary btn-sm">Live Demo</a>
              <a href="https://github.com/Venke-K/FrontEnd" target="_blank" className="btn btn-outline-light btn-sm">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Project Card 2 --> */}
      <div className="col-md-6 col-lg-4">
        <div className="modern-card shadow-sm border-0 rounded overflow-hidden position-relative">
          <img src="https://i.pinimg.com/736x/39/95/d4/3995d4dcfb99a5b967830819052a4b8a.jpg" className="card-img-top" alt="Portfolio Website"/>
          <div className="modern-card-content p-4 text-white d-flex flex-column justify-content-end">
            <h5 className="fw-bold mb-2">Landing Page</h5>
            <p className="text-light">Created a responsive web application with 100% functional accuracy for adding and removing
            products in real-time</p>
            <p className="text-light"><small>Tech Stack: HTML, CSS, Bootstrap</small></p>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <a href="https://incomparable-boba-07c387.netlify.app/" target="_blank" className="btn btn-primary btn-sm">Live Demo</a>
              <a href="https://github.com/yourusername/portfolio-website" target="_blank" className="btn btn-outline-light btn-sm">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Project Card 3 --> */}
      <div className="col-md-6 col-lg-4">
        <div className="modern-card shadow-sm border-0 rounded overflow-hidden position-relative">
          <img src=" https://png.pngtree.com/thumb_back/fh260/background/20231003/pngtree-d-render-of-a-web-page-shopping-cart-icon-and-a-image_13512683.png " className="card-img-top" alt="E-commerce Backend"/>
          <div className="modern-card-content p-4 text-white d-flex flex-column justify-content-end">
            <h5 className="fw-bold mb-2">Cart-Page</h5>
            <p className="text-light">Created a responsive web application with 100% functional accuracy for adding and removing
            products in real-time</p>
            <p className="text-light"><small>Tech Stack: Node.js, Express, MongoDB</small></p>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <a href="https://resilient-bavarois-518ef0.netlify.app/" target="_blank" className="btn btn-primary btn-sm">Live Demo</a>
              <a href="https://github.com/Venke-K/React-Task3" target="_blank" className="btn btn-outline-light btn-sm">GitHub</a>
            </div>
          </div>
        </div>
      </div>


       {/* <!-- Project Card 3 --> */}
       <div className="col-md-6 col-lg-4">
  <div className="modern-card shadow-sm border-0 rounded overflow-hidden position-relative">
    <img src="https://www.shutterstock.com/shutterstock/photos/1899965989/display_1500/stock-photo-note-book-cash-dollars-money-pen-pink-note-with-text-written-where-does-my-money-go-concept-of-1899965989.jpg" className="card-img-top" alt="Expense Tracker"/>
    <div className="modern-card-content p-4 text-white d-flex flex-column justify-content-end">
      <h5 className="fw-bold mb-2">Expense Tracker 💸</h5>
      <p className="text-light">
        A full-stack Expense Tracker application with secure user authentication, expense tracking, filtering, and summary charts.
      </p>
      <p className="text-light"><small>Tech Stack: MERN, JWT, Chart.js, Bootstrap</small></p>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <a href="https://statuesque-semolina-b1e091.netlify.app/" target="_blank" className="btn btn-primary btn-sm">Live Demo</a>
        <a href="https://github.com/Venke-K/expense-tracker" target="_blank" className="btn btn-outline-light btn-sm">GitHub</a>
      </div>
    </div>
  </div>
</div>


    </div>
  </div>
</section>





    </div>
  )
}

export default ProjectSection
