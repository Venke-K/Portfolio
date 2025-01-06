import React from 'react'

function SkillsSection() {
  return (
    <div>

<section id="skills" className="skills-section py-5">
  <div className="container">
    <h2 className="text-center mb-4" style={{fontFamily:"sans-serif", fontWeight:'bold'}}>My Skills</h2>
    <p className="text-center text-muted mb-5">
      A visual representation of my technical expertise, categorized by areas of focus.
    </p>

    <div className="skills-timeline">
      
      {/* Frontend Skills */}
      <div className="timeline-item">
        <div className="timeline-icon">
          <span className="material-icons text-primary fs-1 mb-3">code</span>
        </div>
        <div className="timeline-content shadow-lg">
          <h4 className="skills-title" style={{fontSize:"35px"}}>Frontend</h4>
          <p className="skills-text">HTML, CSS, JavaScript, React</p>
          <div className="skills-level">Proficiency: Intermediate</div>
        </div>
      </div>
      
      {/* Backend Skills */}
      <div className="timeline-item timeline-item-reverse">
        <div className="timeline-icon">
          <span className="material-icons text-success fs-1 mb-3">storage</span>
        </div>
        <div className="timeline-content shadow-lg">
          <h4 className="skills-title" style={{fontSize:"35px" , fontFamily:"sans-serif"}}>Backend</h4>
          <p className="skills-text">Node.js, Express.js, MongoDB</p>
          <div className="skills-level">Proficiency: Intermediate</div>
        </div>
      </div>
      
      {/* Tools */}
      <div className="timeline-item">
        <div className="timeline-icon">
          <span className="material-icons text-warning fs-1 mb-3">build</span>
        </div>
        <div className="timeline-content shadow-lg">
          <h4 className="skills-title" style={{fontSize:"35px"}}>Tools</h4>
          <p className="skills-text">Git, VS Code, Postman</p>
          <div className="skills-level">Proficiency: Intermediate</div>
        </div>
      </div>
      
    </div>
  </div>
</section>





    </div>
  )
}

export default SkillsSection
