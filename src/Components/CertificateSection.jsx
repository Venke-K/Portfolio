import React from 'react'

function CertificateSection() {
  return (
    <div>
  <section id="certifications" className="certifications-section py-5">
  <div className="container">
    <h2 className="text-center mb-4" style={{fontFamily:"sans-serif", fontWeight:'bold'}}>Certifications</h2>
    <p className="text-center text-muted mb-5">
      Here is a certification I have earned.
    </p>
    
    <div className="row justify-content-center text-center">
      <div className="col-md-8">
        <div className="card certification-card shadow-lg border-0 h-100">
          <div className="ribbon"><span>Certified</span></div>
          <div className="card-body p-5">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReh3WvOJCJtZkyWXsWN5atbSIy7wUgED8qfA&s" alt="Guvi Logo" className="mb-4 certification-logo"/>
            <h5 className="card-title mb-3">Full-Stack Development</h5>
            <p className="card-text text-muted mb-4">Guvi</p>
            <a href="https://www.guvi.in/certificate?id=0261FU0n63k72DWJ37&download=true" className="btn btn-outline-primary btn-lg" target="_blank">View Certificate</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




    </div>
  )
}

export default CertificateSection
