import { useState } from 'react';
import '../css/about.css';
import Header from '../shared/partials/Header';
import Footer from '../shared/partials/Footer';

const Careers = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero-video">
        <video autoPlay muted loop playsInline>
          <source src="/src/assets/media/CAREERS BG.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="firstContainer">
          <div className="firstContent">
            <h1>WHO WE ARE</h1>
            <p>Grow your career with purpose. Join a team that values innovation, collaboration, and your potential.</p>
          </div>
        </div>
      </section>

      {/* Intern Section */}
      <section className="careers2">
        <h1>WE ARE ACCEPTING INTERNS!</h1>

        <div className="c2main">
          <div className="c2mainContent">
            <h2>Let’s create something great together.</h2>
            <p>We are searching for ambitious, creative, and driven individuals who are ready to build, innovate, and grow with us.</p>
            <br />
            <p>At Oikos Technologies, we don’t just develop digital solutions — we craft meaningful experiences. From web development to IT support and creative services, our team thrives on collaboration, curiosity, and purpose.</p>
            <button onClick={() => setModalOpen(true)}>Apply Now</button>
          </div>

          <div className="c2mainContent">
            <h2>Join us.</h2>
            <p>At Oikos Technologies, we’re more than a team — we’re a community of innovators, problem-solvers, and creators. We’re looking for individuals who are not only skilled, but curious, motivated, and ready to grow.</p>
            <br />
            <p>Whether you're a developer, designer, strategist, or support specialist, you’ll find a place here to sharpen your skills, take ownership, and collaborate on work that matters.</p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="modal" id="applyModal" onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
          <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            <h2>FILL OUT THE FORM</h2>
            <form
              action="https://formsubmit.co/oikostechnologies@gmail.com"
              method="POST"
              encType="multipart/form-data"
            >
              <input type="text" name="First Name" placeholder="FIRST NAME" required />
              <input type="text" name="Middle Name" placeholder="MIDDLE NAME" />
              <input type="text" name="Last Name" placeholder="LAST NAME" required />
              <input type="email" name="Email" placeholder="EMAIL" required />
              <label>Attach Your CV Here:</label>
              <input type="file" name="attachment" accept=".pdf,.doc,.docx" required />
              <button type="submit">SUBMIT</button>
              <p><a href="#" className="cancel" onClick={(e) => { e.preventDefault(); setModalOpen(false); }}>Cancel</a></p>
            
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Careers;
