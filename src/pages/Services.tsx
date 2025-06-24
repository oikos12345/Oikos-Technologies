import Header from '../shared/partials/Header';
import Footer from '../shared/partials/Footer';
import OurServicesBG from '../assets/media/OUR SERVICES BG.mp4';
import ServicesSection from '../components/services/ServicesSection';

const Services: React.FC = () => {
  return (
    <>
      <Header />

      <section className="hero-video" id="heroVideo">
        <video autoPlay muted loop playsInline>
          <source src={OurServicesBG} type="video/mp4" />
        </video>

        <div className="firstContainer">
          <div className="firstContent">
            <p>Bring your vision to life with innovative IT solutions designed for growth, reliability, and long-term success. Let's build something extraordinary—together.</p>
            <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ02pQP0Q7-rGzeViTUQTaNdnAl5DnBynS8tBPYd6D8Ef6vNZ1XkFtEHz22euT-H6GU7s2fQCmyY" target="_blank" rel="noopener noreferrer">
              <button>Book a Consultation Now</button>
            </a>
          </div>
        </div>
      </section>

      <section className="ourServices">
        <h1>OUR SERVICES</h1>
        <p>At Oikos Technologies, we are committed to delivering innovative and tailored IT solutions that drive success for our clients.</p>
      </section>

      <ServicesSection />

      <Footer />
    </>
  );
};

export default Services;
