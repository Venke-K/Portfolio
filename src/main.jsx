import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HeroSection from './Components/HeroSection.jsx'
import AboutMeSection from './Components/AboutMeSection.jsx'
import ProjectSection from './Components/ProjectSection.jsx'
import SkillsSection from './Components/SkillsSection.jsx'
import CertificateSection from './Components/CertificateSection.jsx'
import ContactMe from './Components/ContactMe.jsx'
import Footer from './Components/Footer.jsx'
import NavBar from './Components/NavBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <NavBar/>
    <HeroSection/>
    <AboutMeSection/>
    <ProjectSection/>
    <SkillsSection/>
    <CertificateSection/>
    <ContactMe/>
    <Footer/>
  
  </React.StrictMode>,
)
