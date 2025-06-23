import { useState } from 'react';
import Header from '../shared/partials/Header';
import Footer from '../shared/partials/Footer';
import '../css/about.css';

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header />

      <section className="hero-video">
        <video autoPlay muted loop playsInline>
          <source src="/src/assets/media/CONTACT US BG.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="firstContainer">
          <div className="firstContent">
            <p>
              We are more than just a service provider—we’re your partner in
              innovation. Reach out today and let’s start creating impactful
              solutions together.
            </p>
          </div>
        </div>
      </section>

      <section className="s2Contacts">
        <p>
          We believe that great partnerships begin with a simple conversation.
          Whether you’re looking for innovative solutions, creative support, or a
          team that truly listens—your journey starts here. Reach out to us, and
          let’s turn your ideas into impact.
        </p>
      </section>

      <section className="s3Contacts">
        <div className="s3main">
          <div className="s3contactsInfo">
            <h1>Have a project in mind or just want to say hello?</h1>
            <br />
            <p>
              We're here for you. Send us a message, and we'll respond as soon as
              possible.
            </p>
            <button onClick={openModal}>Email Us</button>
          </div>

          <div className="s3contactsInfo">
            <img src="/media/CONNECT WITH US.png" alt="" />
          </div>
        </div>
      </section>

      <section className="s4Contacts">
        <div className="s3main">
          <div className="s3contactsInfo">
            <img src="/media/MAP.jpg" alt="" />
          </div>

          <div className="s4contactsInfo">
            <h1>Come Say Hi!</h1>
            <br />
            <p>
              B2 L38 Champaca St., Maligaya Park Subd., Novaliches, Quezon City,
              Metro Manila, Philippines 1123
            </p>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div id="emailModal" className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>SEND US YOUR INQUIRY/MESSAGE HERE</h2>
            <form
              action="https://formsubmit.co/oikostechnologies@gmail.com"
              method="POST"
            >
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="text"
                  name="First Name"
                  placeholder="FIRST NAME"
                  required
                />
                <input
                  type="text"
                  name="Last Name"
                  placeholder="LAST NAME"
                  required
                />
              </div>
              <input
                type="email"
                name="Email"
                placeholder="EMAIL"
                required
              />
              <select name="Subject" required>
                <option value="">- CHOOSE SUBJECT -</option>
                <option value="Website Development">Website Development</option>
                <option value="Web App Development">Web App Development</option>
                <option value="IT Support Services">IT Support Services</option>
                <option value="Creative Support Services">
                  Creative Support Services
                </option>
                <option value="Social Media Management">
                  Social Media Management
                </option>
                <option value="Virtual Admin Support Management">
                  Virtual Admin Support Management
                </option>
                <option value="Other">Other</option>
              </select>

              <label>INQUIRY/MESSAGE</label>
              <textarea
                name="Message"
                rows={5}
                placeholder="Type your inquiry or message here."
                required
              ></textarea>

              <button type="submit">SUBMIT INQUIRY</button>
              <p>
                <a
                  href="#"
                  className="cancel"
                  onClick={(e) => {
                    e.preventDefault();
                    closeModal();
                  }}
                >
                  Cancel
                </a>
              </p>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Contact;
