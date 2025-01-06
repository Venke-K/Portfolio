import React from 'react'

function AboutMeSection() {
  return (
    <div>
  



{/* About Me Section */}
<section id="about" className="about-section py-5">
  <div className="container">
    <div className="row align-items-center">
      
      {/* Profile Photo */}
<div className="col-lg-4 text-center mb-4 mb-lg-0">
  <div className="profile-photo-container">
    <img
      src="/src/assets/avatar/proPic.jpg"
      alt="Your Name"
      className="profile-photo"
    />
    <div className="profile-overlay">
      <h3 className="text-white fw-bold">Venkat</h3>
      <p className="text-white small">
        "Bridging creativity and logic to build impactful web experiences."
      </p>
    </div>
  </div>
  <div className="profile-content mt-5">
    <p className="text-muted mb-4">
      Hi, I’m <strong>Venkat</strong>, a dedicated MERN stack developer with a unique background in the insurance industry. I enjoy merging logical problem-solving skills with creativity to build web applications that make an impact.
    </p>
    <div className="social-icons d-flex justify-content-center mt-3">
      <a href="https://github.com/Venke-K?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="bi bi-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/venkatesan-k-01b6311a0/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="bi bi-linkedin"></i>
      </a>
      <a href="mailto:venkatjp62@gmail.com" className="social-icon">
        <i className="bi bi-envelope-fill"></i>
      </a>
    </div>
  </div>
</div>



      
      {/* Bio and Timeline */}
      <div className="col-lg-8">
        <h2 className="text-primary fw-bold mb-3">About Me</h2>
       
       <br></br>
        
        {/* Key Milestones */}
        <div className="row">
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <div className="styled-card">
              <h5>2023 - 2024</h5>
              <p>Completed Full-Stack Development Course at Guvi</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <div className="styled-card">
              <h5>2024</h5>
              <p>Developed and Deployed Fitness Tracker Project</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="styled-card">
              <h5>Present</h5>
              <p>Working in Transactions Department, Insurance Company</p>
            </div>
          </div>
        </div>

        {/* Education Details */}
        <div className="mt-5">
          <h3 className="text-primary fw-bold mb-3">Education</h3>
          <br></br>
         
          <div className="row">
            <div className="col-md-6 text-center mb-3 mb-md-0">
              <div className="styled-card">
                <h5>Bachelor's Degree</h5>
                <p>Specialization in Computer Science</p>
                <p><strong>SRM University</strong>, 2017-2020</p>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="styled-card">
                <h5>Guvi Certification</h5>
                <p>Full-Stack Development</p>
                <p><strong>Guvi Institute</strong>, 2023</p>
              </div>
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

export default AboutMeSection
