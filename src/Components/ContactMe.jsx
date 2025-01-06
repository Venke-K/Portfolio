import React from 'react'

function ContactMe() {
  // const [formData, setformData] = useState({
  //   name: '',
  //   email:'',
  //   subject:'',
  //   message:'',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setformData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));

  // };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:5000/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       alert("Message sent successfully!");
  //       setformData({ name: "", email: "", subject: "", message: "" });
  //     } else {
  //       alert("Failed to send message. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     alert("An error occurred. Please try again.");
  //   }
  // };



  return (
    <div>
 
 <section id="contact" className="contact-section py-5">
  <div className="container">
    <h2 className="text-center mb-4">Get in Touch</h2>
    <p className="text-center text-muted mb-5 fs-5">
      I’m an entry-level MERN stack developer open to learning opportunities, freelance projects, and collaborations. Let’s connect!
    </p>

    {/* Contact Form */}
    <div className="row justify-content-center">
      <div className="col-md-8">
        <form  action='https://formspree.io/f/mzzzkjqd' method="POST" className="contact-form">
          
          {/* Name */}
          <div className="form-group mb-4">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group mb-4">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Subject */}
          <div className="form-group mb-4">
            <label htmlFor="subject" className="form-label">Subject</label>
            <select
              className="form-control"
              id="subject"
              name="subject"
              required
            >
              <option value="" disabled>Select a subject</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Freelance Work">Freelance Work</option>
              <option value="General Question">General Question</option>
            </select>
          </div>

          {/* Message */}
          <div className="form-group mb-4">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg px-5 py-3 shadow-lg rounded-pill">Send Message</button>
          </div>
        </form>

        {/* Resume Button */}
        <div className="text-center mt-5">
          <a href="https://drive.google.com/file/d/1wUF54wb0vTuEBqIy_ER-0WQANHffZYNK/view?usp=sharing" target="_blank" className="btn-resume">View My Resume</a>
        </div>
      </div>
    </div>
  </div>
</section>




    </div>
  )
}

export default ContactMe
