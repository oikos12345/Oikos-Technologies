import HomeHeader from '../components/HomeHeader';
import Footer from '../shared/partials/Footer';
import '../css/style.css';
import GoalCard from '../shared/components/GoalCard';
import { Link } from "react-router-dom";

// --- IMPORT ALL MEDIA ASSETS HERE ---
// Videos
import HOMEPAGE_BG_Video from '../assets/media/HOMEPAGE BG.mp4';
import OUR_GOAL_BG_Video from '../assets/media/OUR GOAL BG.mp4';

// Images
import OIKOS_NO_BG_Image from '../assets/media/OIKOS NO BG.png';
import WHYCHOOSEUS_Image from '../assets/media/WHYCHOOSEUS.png';
import WEBSITEDEV_Image from '../assets/media/WEBSITEDEV.jpg';
import WEBAPP_Image from '../assets/media/WEBAPP.jpg';
import ITSUPPORT_ICON_Image from '../assets/media/ITSUPPORT ICON.jpg';
import CREATIVE_ICON_Image from '../assets/media/CREATIVE ICON.jpg'; // Note: You have two items using this image.
import SOCMED_ICON_Image from '../assets/media/SOCMED ICON.png';


const Home = () => {
  return (
    <>
      <HomeHeader />

      <section className="hero-video">
        <video autoPlay muted loop playsInline>
          <source src={HOMEPAGE_BG_Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="logoTitle">
          <img src={OIKOS_NO_BG_Image} alt="Oikos Logo" />
          <h1>BRINGING TECHNOLOGY CLOSER TO HOME</h1>
        </div>

        <div className="bottom-content">
          <div className="paragraph1">
            <p>
              We specialize in system software development, empowering
              businesses and educational institutions to thrive through
              innovative technology solutions.
            </p>
          </div>
 
          <Link to="/about" className="btn">
            Know More
          </Link>
        </div>

      </section>

      <section className="section2">
        <h1>WHO ARE WE?</h1>

        <div className="main-container">
          <div className="paragraphS2">
            <p>
              Oikos Technologies is an IT based company established to provide
              IT Solutions, Websites Portals, Software and Mobile App
              Development.
            </p>
          </div>

          <div className="paragraphS2">
            <p>
              Our vision is to provide quality services and comprehensive
              solutions for our valuable customers in order to satisfy their
              business requirements and to assure the goals achievements.
              Moreover the company concentrates on client’s technical support
              and after sales services.
            </p>
          </div>
        </div>

        <div className="main-container2">

          <div className="image">
            <img src={WHYCHOOSEUS_Image} alt="Why Choose Us" /> {/* Added alt for accessibility */}
          </div>

          <div className="paragraphS22">
            <h1>WHY CHOOSE US?</h1>
            <p>
              At Oikos Technologies, we combine innovation with deep industry
              knowledge to deliver high-impact digital solutions.
            </p>
            <p>
              Our team is driven by a passion for excellence, ensuring each
              project we take on is developed with care, precision, and
              forward-thinking technology.
            </p>
            <p>
              We prioritize our clients’ needs by offering personalized support
              and reliable after-sales service — because your success is our
              success.
            </p>
          </div>

        </div>
      </section>

      <section className="section3">
        <video autoPlay muted loop playsInline>
          <source src={OUR_GOAL_BG_Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="title-container">
          <hr />
          <h2>OUR GOALS</h2>
          <hr />
        </div>

        <div className="goals-cards">
          {[
            {
              default: 'BETTER SOFTWARE',
              hover:
                'We create high-performance, custom solutions tailored to your business needs.',
              className: 'goal-card1',
            },
            {
              default: 'BETTER SERVICE',
              hover:
                'We are dedicated to offering outstanding support and continuous guidance at every stage of your project.',
              className: 'goal-card2',
            },
            {
              default: 'BETTER VALUE',
              hover:
                'We deliver exceptional solutions that drive sustainable growth and create lasting success for your business.',
              className: 'goal-card3',
            },
          ].map(({ default: label, hover, className }, i) => (
            <GoalCard key={i} label={label} hover={hover} className={className} />
          ))}
        </div>
        <div className="space"></div>
      </section>

      <section className="carousel-section">
        <h1>WHAT WE OFFER</h1>
        <div className="carousel-container">
          <div className="carousel">

            <div className="item">
              <img src={WEBSITEDEV_Image} alt="Website Development Icon" />
              <h3>Website Development</h3>
              <p>Crafting responsive and user-friendly websites tailored to your brand's identity and goals.</p>
              <a href="/services.html"><button>More</button></a>
            </div>

            <div className="item">
              <img src={WEBAPP_Image} alt="Web App Development Icon" />
              <h3>Web App Development</h3>
              <p>Building custom web applications that streamline operations and enhance user engagement.</p>
              <a href="/services.html"><button>More</button></a>
            </div>

            <div className="item">
              <img src={ITSUPPORT_ICON_Image} alt="IT Support Services Icon" />
              <h3>IT Support Services</h3>
              <p>Providing reliable technical assistance to ensure your IT infrastructure runs smoothly.</p>
              <a href="/services.html"><button>More</button></a>
            </div>

            <div className="item">
              <img src={CREATIVE_ICON_Image} alt="Creative Support Services Icon" />
              <h3>Creative Support Services</h3>
              <p>Offering graphic design and content creation to bring your ideas to life visually.</p>
              <a href="/services.html"><button>More</button></a>
            </div>

            <div className="item">
              <img src={SOCMED_ICON_Image} alt="Social Media Management Icon" />
              <h3>Social Media Management</h3>
              <p>Managing and optimizing your social media presence to connect with your audience effectively.</p>
              <Link to="/services"><button>More</button></Link>
            </div>

            <div className="item">
              <img src={SOCMED_ICON_Image} alt="Virtual Admin Services Support Icon" />
              <h3>Virtual Admin Services Support</h3>
              <p>Delivering administrative support remotely to keep your business organized and efficient.</p>
              <Link to="/services"><button>More</button></Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;