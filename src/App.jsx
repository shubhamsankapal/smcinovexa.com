import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#2d3436", overflowX: 'hidden' }}>
      
      {/* --- Navbar --- */}
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top py-3">
  <div className="container">
    <a className="navbar-brand fw-bold text-primary fs-3 d-flex align-items-center" href="#">
{/* Logo */}
      <img 
        src="./WhatsApp Image 2025-12-27 at 12.51.58 PM.jpeg" 
        alt="SMC Inovexa Logo"
        width="40"
        height="40"
        className="me-2"
      />      <span style={{ letterSpacing: '1px' }}>SMC INOVEXA</span>
    </a>
    
    {/* Toggle Button */}
    <button 
      className="navbar-toggler border-0 shadow-none" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav"
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto align-items-center">
        {['home', 'about', 'vision', 'services', 'team','Careers'].map((item) => (
          <li className="nav-item mx-1" key={item}>
            <button 
              onClick={() => scrollToSection(item)} 
              className="nav-link btn btn-link border-0 text-capitalize fw-semibold text-dark nav-hover-effect"
            >
              {item}
            </button>
          </li>
        ))}
        <li className="nav-item ms-lg-3">
          <button 
            onClick={() => scrollToSection('contact')} 
            className="btn btn-outline-primary rounded-pill px-4 py-2 fw-bold shadow-sm transition-all"
          >
            Contact Us
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>

      {/* --- Hero Section --- */}
      <header id="home" className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="badge bg-primary-soft text-primary mb-2 px-3 py-2 rounded-pill shadow-sm">IT & Consulting Excellence</span>
              <h1 className="display-3 fw-bold mb-4">Empowering Businesses Through <span className="text-primary">Innovation</span></h1>
              <p className="lead mb-5 text-secondary">SMC Inovexa provides high-end software solutions and strategic IT consulting to help you scale globally.</p>
              <div className="d-flex gap-3">
                <button onClick={() => scrollToSection('contact')} className="btn btn-primary btn-lg rounded-pill px-5 shadow">Work With Us</button>
                <button onClick={() => scrollToSection('services')} className="btn btn-outline-dark btn-lg rounded-pill px-5">Our Work</button>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 text-center">
              <img 
                src="/WhatsApp Image 2025-12-26 at 11.36.14 AM.jpeg" 
                alt="Tech Team" 
                className="img-fluid rounded-4 shadow-lg border border-5 border-white"
              />
            </div>
          </div>
        </div>
      </header>

      {/* --- About Section --- */}
      <section id="about" className="py-5 mt-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="/WhatsApp Image 2025-12-26 at 12.15.00 PM.jpeg" 
                className="img-fluid rounded-4 shadow" 
                alt="About us" 
              />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h6 className="text-primary fw-bold text-uppercase">Who We Are</h6>
              <h2 className="display-5 fw-bold mb-4">Driving Digital Transformation Since 2025</h2>
              <p className="text-secondary mb-4">SMC Inovexa is more than just a software house; we are your strategic growth partners. We blend creativity with deep technical expertise to solve complex business challenges.</p>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-3 border-start border-primary border-4 bg-light">
                    <h5 className="fw-bold mb-1">10+</h5>
                    <small className="text-muted">Projects Delivered</small>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 border-start border-primary border-4 bg-light">
                    <h5 className="fw-bold mb-1">50+</h5>
                    <small className="text-muted">Expert Consultants</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Vision & Mission Section (Light Version) --- */}
<section id="vision" className="py-5 bg-light">
  <div className="container py-5">
    
    {/* Section Header */}
    <div className="text-center mb-5">
      <h6 className="text-primary fw-bold text-uppercase tracking-wider mb-2">Our Values</h6>
      <h2 className="fw-bold display-6 text-dark">Building the Future Together</h2>
      <div className="mx-auto bg-primary rounded" style={{ height: '4px', width: '50px' }}></div>
    </div>

    <div className="row g-4 justify-content-center">
      {/* Vision Card */}
      <div className="col-lg-5 col-md-6">
        <div className="card border-0 shadow-sm rounded-4 h-100 p-2">
          <div className="card-body p-4">
            <div className="mb-4 d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-3" style={{ width: '60px', height: '60px' }}>
              <i className="bi bi-eye-fill text-primary fs-3"></i>
            </div>
            <h3 className="fw-bold text-dark mb-3">Our Vision</h3>
            <p className="text-muted mb-0 lh-base">
              To be the global leader in digital innovation, setting the standard for how technology can transform businesses and improve lives across industries.
            </p>
          </div>
          <div className="card-footer bg-transparent border-0 pb-4 px-4">
            <a href="#" className="text-primary text-decoration-none fw-semibold small">Learn More <i className="bi bi-arrow-right ms-1"></i></a>
          </div>
        </div>
      </div>

      {/* Mission Card */}
      <div className="col-lg-5 col-md-6">
        <div className="card border-0 shadow-sm rounded-4 h-100 p-2">
          <div className="card-body p-4">
            <div className="mb-4 d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-3" style={{ width: '60px', height: '60px' }}>
              <i className="bi bi-rocket-takeoff-fill text-success fs-3"></i>
            </div>
            <h3 className="fw-bold text-dark mb-3">Our Mission</h3>
            <p className="text-muted mb-0 lh-base">
              Our mission is to deliver high-quality, scalable, and secure software solutions that provide a competitive edge to our clients while fostering a culture of continuous learning.
            </p>
          </div>
          <div className="card-footer bg-transparent border-0 pb-4 px-4">
            <a href="#" className="text-success text-decoration-none fw-semibold small">View Roadmap <i className="bi bi-arrow-right ms-1"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* --- Services Section --- */}
      <section id="services" className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h6 className="text-primary fw-bold text-uppercase">What We Do</h6>
            <h2 className="fw-bold display-6">Comprehensive IT Solutions</h2>
            <div className="bg-primary mx-auto" style={{ width: '60px', height: '4px', marginTop: '10px' }}></div>
          </div>
          <div className="row g-4">
            {[
              { icon: 'bi-code-slash', title: 'Software Dev', desc: 'Custom enterprise software tailored to your specific business needs.' },
{ 
  icon: 'bi-phone', 
  title: 'Mobile App ', 
  desc: 'High-performance Android and iOS mobile applications built for scalability and user engagement.' 
}, 
{ 
  icon: 'bi-graph-up-arrow', 
  title: 'Digital Marketing', 
  desc: 'Data-driven digital marketing strategies to grow your online presence.' 
},
{ 
  icon: 'bi-gear', 
  title: 'API Development', 
  desc: 'Robust and scalable RESTful APIs for seamless system integration.' 
},
{ 
  icon: 'bi-palette', 
  title: 'UI/UX Design', 
  desc: 'User-centric UI/UX designs that enhance usability, engagement, and customer experience.' 
},
{ 
  icon: 'bi-layers', 
  title: 'Java Full Stack Development', 
  desc: 'Scalable and secure full-stack solutions built with Java, Spring Boot, and modern frontend technologies to support business growth.' 
},    
           { icon: 'bi-globe', title: 'Web Development', desc: 'Modern, responsive, and secure websites tailored to your business goals' },
              // { icon: 'bi-cloud-check', title: 'Cloud Solutions', desc: 'Optimized cloud migration and serverless architecture management.' },
              { icon: 'bi-graph-up-arrow', title: 'IT Consulting', desc: 'Expert strategy to modernize your technology landscape.' },
              // { icon: 'bi-shield-lock', title: 'Cyber Security', desc: 'Robust protection against modern digital threats and data breaches.' }
            ].map((service, index) => (
              <div className="col-md-3" key={index}>
                <div className="card h-100 border-0 shadow-sm p-4 text-center">
                  <div className="text-primary mb-3"><i className={`bi ${service.icon} h1`}></i></div>
                  <h4 className="fw-bold">{service.title}</h4>
                  <p className="text-secondary small">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Team Section --- */}
      <section id="team" className="py-5">
        <div className="container-fluid py-5">
          <div className="text-center mb-5">
            <h6 className="text-primary fw-bold text-uppercase">Meet Our Team</h6>
            <h2 className="fw-bold display-6">Driven By Passion, Guided By Expertise</h2>
            <div className="bg-primary mx-auto" style={{ width: '60px', height: '4px', marginTop: '10px' }}></div>
          </div>
          <div className="row g-2 justify-content-center">
            {[
              { 
                name: 'Chetan Shimpi', 
                role: 'CEO & Founder', 
                img: '/WhatsApp Image 2025-12-27 at 12.46.41 PM.jpeg', // Example image
                social: { twitter: '#', linkedin: '#' } 
              },
              { 
                name: 'Shubham Sankpal', 
                role: 'Director & Co-Founder', 
                img: '/WhatsApp Image 2025-12-26 at 11.36.12 AM.jpeg', // Example image
                social: { twitter: '#', linkedin: '#' } 
              },
              { 
                name: 'Karan Rajput', 
                role: 'Manager', 
                img: '/Screenshot 2025-12-27 214134.png',
                social: { twitter: '#', linkedin: '#' } 
              },
              { 
                name: 'Arjun Rajput', 
                role: 'Leader', 
                img: '/WhatsApp Image 2025-12-27 at 11.33.10 AM.jpeg', // Example image
                social: { twitter: '#', linkedin: '#' } 
              },
              { 
                name: 'Mantu Kumar', 
                role: 'Leader', 
                img: '/WhatsApp Image 2025-12-27 at 11.32.16 AM.jpeg', // Example image
                social: { twitter: '#', linkedin: '#' } 
              },
              
            ].map((member, index) => (
              <div className="col-md-4 col-lg-2" key={index}>
                <div className="card h-100 border-0 shadow-sm text-center pt-4" style={{minWidth:'14rem'}}>
                  <img 
                    src={member.img} 
                    className="card-img-top rounded-circle mx-auto mb-3" 
                    alt={member.name} 
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="fw-bold mb-1">{member.name}</h5>
                    <p className="text-primary small">{member.role}</p>
                    <div className="d-flex justify-content-center gap-2 mt-3">
                      <a href={member.social.twitter} className="text-secondary opacity-75"><i className="bi bi-twitter-x h5"></i></a>
                      <a href={member.social.linkedin} className="text-secondary opacity-75"><i className="bi bi-linkedin h5"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Partners Section --- */}
      <section id="partners" className="py-5 bg-light">
        <div className="container py-4 text-center">
          <h6 className="text-muted fw-bold text-uppercase mb-5">Trusted By Industry Leaders</h6>
          <div className="row align-items-center opacity-50 grayscale">
            <div className="col-6 col-md-2 mb-4 mb-md-0"><i className="bi bi-google h2"></i></div>
            <div className="col-6 col-md-2 mb-4 mb-md-0"><i className="bi bi-microsoft h2"></i></div>
            <div className="col-6 col-md-2 mb-4 mb-md-0"><i className="bi bi-nvidia h2"></i></div>
            <div className="col-6 col-md-2 mb-4 mb-md-0"><i className="bi bi-amd h2"></i></div>
            <div className="col-6 col-md-2 mb-4 mb-md-0"><i className="bi bi-apple h2"></i></div>
            <div className="col-6 col-md-2 mb-4 mb-md-0"><i className="bi bi-meta h2"></i></div>
          </div>
        </div>
      </section>




{/* --- Testimonials Section --- */}
<section id="testimonials" className="py-5 bg-light">
  <div className="container py-5">
    <div className="text-center mb-5">
      <h2 className="fw-bold display-5">What Our Clients Say</h2>
      <p className="text-muted">Trusted by over 200+ companies worldwide</p>
    </div>

    <div className="row g-4 justify-content-center">
      {/* Testimonial 1 */}
      <div className="col-lg-4 col-md-6">
        <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
          <div className="text-warning mb-3">
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </div>
          <p className="text-secondary fst-italic mb-4">
            "Working with this team was a game-changer for our business. Their attention to detail and innovative solutions exceeded our expectations."
          </p>
          <div className="d-flex align-items-center mt-auto">
            <img src="/WhatsApp Image 2025-12-27 at 11.28.01 AM.jpeg" className="rounded-circle me-3" width="50" height="50" alt="Client" />
            <div>
              <h6 className="fw-bold mb-0 text-dark">Tejas Sonawane</h6>
              <small className="text-muted">CEO, TechFlow</small>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="col-lg-4 col-md-6">
        <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white border-top border-primary border-4">
          <div className="text-warning mb-3">
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </div>
          <p className="text-secondary fst-italic mb-4">
            "The most professional software partners we've had. They didn't just write code; they understood our business goals perfectly."
          </p>
          <div className="d-flex align-items-center mt-auto">
            <img src="/WhatsApp Image 2025-12-27 at 11.28.02 AM.jpeg" className="rounded-circle me-3" width="50" height="50" alt="Client" />
            <div>
              <h6 className="fw-bold mb-0 text-dark">Rahul Kumar</h6>
              <small className="text-muted">Marketing Director, Globalize</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- Internship Recruitment Banner --- */}
<section id="Careers" className="py-5">
  <div className="container">
    <div className="position-relative rounded-5 overflow-hidden shadow-lg" style={{ minHeight: '450px' }}>
      
      {/* Background Image with Overlay */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        {/* Dark Gradient Overlay for Readability */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%)' }}></div>
      </div>

      {/* Content Layer */}
      <div className="position-relative z-1 d-flex align-items-center h-100 p-4 p-md-5" style={{ minHeight: '450px' }}>
        <div className="col-lg-7 text-white">
          <span className="badge bg-primary mb-3 px-3 py-2 rounded-pill text-uppercase tracking-wider">Hiring Interns</span>
          <h1 className="display-4 fw-bold mb-3">Kickstart Your Career <br /> with our <span className="text-primary">Internship Program</span></h1>
          <p className="lead mb-5 opacity-75">
            Get hands-on experience, mentorship from industry experts, and a chance to work on real-world projects. We are looking for passionate students ready to learn and grow.
          </p>
          
          <div className="d-flex flex-wrap gap-3">
            {/* Google Form Link Here */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdhUZwRmLgHiHhoBJYXtzFLyJkMiRuIc_75BVeLdRgyPDlWzw/viewform?usp=dialog" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-md px-5 py-3 rounded-pill fw-bold shadow-sm"
            >
              Apply Now <i className="bi bi-arrow-right-short fs-4 align-middle ms-1"></i>
            </a>
            
            <div className="d-flex align-items-center ms-md-3">
              <div className="bg-white bg-opacity-10 p-2 rounded-circle border border-white border-opacity-25">
                <i className="bi bi-clock text-white mx-1"></i>
              </div>
              <span className="ms-2 small fw-medium text-white-50">Duration: 3-6 Months</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

   {/* --- Contact Us Section --- */}
<section id="contact" className="py-5 bg-light position-relative overflow-hidden">
  
  {/* Decorative Background Element (Optional) */}
  <div className="position-absolute top-0 end-0 p-5 opacity-10 d-none d-lg-block">
    <i className="bi bi-envelope-paper-fill display-1 text-primary" style={{ fontSize: '200px', transform: 'rotate(-15deg)' }}></i>
  </div>

  <div className="container py-5 position-relative">
    <div className="row g-5 align-items-center">
      
      {/* Left Side: Contact Information */}
      <div className="col-lg-5">
        <h6 className="text-primary fw-bold text-uppercase mb-2">Contact Us</h6>
        <h2 className="fw-bold display-5 text-dark mb-4">Let's Start a Conversation</h2>
        <p className="text-muted mb-5">
          Have a question or a project in mind? Reach out to us and our team will get back to you within 24 hours.
        </p>

        {/* Contact Detail Items */}
        <div className="d-flex mb-4">
          <div className="flex-shrink-0 bg-white shadow-sm rounded-3 p-3 text-primary h-100">
            <i className="bi bi-geo-alt-fill fs-4"></i>
          </div>
          <div className="ms-4">
            <h5 className="fw-bold mb-1">Our Location</h5>
            <p className="text-muted mb-0">Nashik, India</p>
          </div>
        </div>

        <div className="d-flex mb-4">
          <div className="flex-shrink-0 bg-white shadow-sm rounded-3 p-3 text-success h-100">
            <i className="bi bi-telephone-fill fs-4"></i>
          </div>
          <div className="ms-4">
            <h5 className="fw-bold mb-1">Phone Number</h5>
            <p className="text-muted mb-0">+91 9309763635</p>
          </div>
        </div>

        <div className="d-flex">
          <div className="flex-shrink-0 bg-white shadow-sm rounded-3 p-3 text-info h-100">
            <i className="bi bi-envelope-at-fill fs-4"></i>
          </div>
          <div className="ms-4">
            <h5 className="fw-bold mb-1">Email Address</h5>
            <p className="text-muted mb-0">smcinovexa@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Right Side: Contact Form Card */}
      <div className="col-lg-7">
        <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-white">
          <form  action="https://formspree.io/f/xzdbepjq" method="POST">
            <div className="row g-4">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Your Name</label>
                <input type="text" name="name" className="form-control form-control-lg bg-light border-0 fs-6 p-3" placeholder="John Doe" />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Email Address</label>
                 <input type="email" name="email" className="form-control form-control-lg bg-light border-0 fs-6 p-3" placeholder="name@example.com" />
              </div>
      
              <div className="col-12">
                <label className="form-label fw-semibold">Message</label>
                <textarea type="text" name="message" className="form-control form-control-lg bg-light border-0 fs-6 p-3" rows="4" placeholder="Your message here..."></textarea>
              </div>
              <div className="col-12 mt-4">
                <button type="submit"  className="btn btn-primary btn-lg w-100 rounded-3 py-3 fw-bold shadow-sm">
                  Send Message <i className="bi bi-send-fill ms-2"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* --- Footer --- */}
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <img 
        src="./WhatsApp Image 2025-12-27 at 12.51.58 PM.jpeg" 
        alt="SMC Inovexa Logo"
        width="40"
        height="40"
        className="me-2"
      />      <span style={{ letterSpacing: '1px' }}>SMC INOVEXA</span>
    </a>
              <p className="small opacity-50">Leading the way in IT consulting and high-performance software development. Helping businesses thrive in a digital-first world.</p>
            </div>
            <div className="col-lg-4 mb-4 text-lg-center">
              <h5 className="mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><button onClick={() => scrollToSection('home')} className="btn btn-link text-white-50 text-decoration-none p-0">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="btn btn-link text-white-50 text-decoration-none p-0">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="btn btn-link text-white-50 text-decoration-none p-0">Services</button></li>
                <li><button onClick={() => scrollToSection('team')} className="btn btn-link text-white-50 text-decoration-none p-0">Team</button></li>
              </ul>
            </div>
            <div className="col-lg-4 mb-4">
              <h5 className="mb-3">Connect With Us</h5>
              <div className="d-flex gap-3 h4">
                <i className="bi bi-linkedin text-white-50"></i>
                <i className="bi bi-twitter-x text-white-50"></i>
                <i className="bi bi-facebook text-white-50"></i>
                <i className="bi bi-instagram text-white-50"></i>
              </div>
            </div>
          </div>
          <hr className="border-secondary" />
          <p className="text-center small opacity-50 mb-0">&copy; 2025 SMC Inovexa. Built for Innovation.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;






  // git init
  // git add README.md 
  // git commit -m "sec commit" 
  // git branch -M main 
  // git remote add origin https://github.com/ClassyKaran/smcinovexa.com.git 
  // git push -u origin main
