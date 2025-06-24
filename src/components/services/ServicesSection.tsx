import { useState, useEffect} from 'react';
import '../../css/about.css';

// Media imports
import ServicesBG from '../../assets/media/SERVICES BG.png';

import WebDevImage from '../../assets/media/WEB DEV.jpg';
import WebsiteDevIcon from '../../assets/media/WEBSITEDEV.jpg';
import WebAppDevIcon from '../../assets/media/WEBAPP.jpg';
import WebAppDevImage from '../../assets/media/WEB APP DEV.jpg';
import ITSupportImage from '../../assets/media/IT SUPPORT.png';
import ITSupportIcon from '../../assets/media/ITSUPPORT ICON.jpg';
import SocMedImage from '../../assets/media/SOC MED.png';
import SocMedIcon from '../../assets/media/SOCMED ICON.png';
import VirtualAdminIcon from '../../assets/media/VIR ADD ICON.png';
import VirtualAdminImage from '../../assets/media/VIRTUA ADMIN.jpg';


const ServicesSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 756);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <section
        className="services"
        style={{ backgroundImage: `url(${ServicesBG})` }}
      >

      <div className="main-container">

        {/* Website Development */}
        <div className="rightPic">
          <div className="infoContainer">
            <div className="infoTitle">
              <img src={WebsiteDevIcon} alt="Website Dev Icon" />
              <h2>Website Development</h2>
            </div>

            {isMobile && (
              <div className="imageContainer">
                <img src={WebDevImage} alt="Web Development" />
              </div>
            )}

            <p>We craft responsive and user-friendly websites that reflect your brand identity and engage your audience.</p>
            <h3>Key Features</h3>
            <li>Custom design aligned with your brand</li>
            <li>Mobile-first responsive layouts</li>
            <li>SEO optimization for better visibility</li>
            <li>Ongoing maintenance and support</li>
            <p>Bring your vision to life with innovative IT solutions designed for growth, reliability, and long-term success. Let's build something extraordinary—together.</p>
            
            <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ02pQP0Q7-rGzeViTUQTaNdnAl5DnBynS8tBPYd6D8Ef6vNZ1XkFtEHz22euT-H6GU7s2fQCmyY" target="_blank" rel="noopener noreferrer">
              <button>Interested</button>
            </a>
          </div>

          {!isMobile && (
            <div className="imageContainer">
              <img src={WebDevImage} alt="Web Development" />
            </div>
          )}
        </div>

        {/* Web App Development */}
        <div className="rightPic">

          {!isMobile && (
            <div className="imageContainer">
              <img src={WebAppDevImage} alt="Web App Development" />
            </div>
          )}

          <div className="infoContainer">
            <div className="infoTitle">
              <img src={WebAppDevIcon} alt="Web App Dev Icon" />
              <h2>Web App Development</h2>
            </div>

            {isMobile && (
              <div className="imageContainer">
                <img src={WebAppDevImage} alt="Web App Development" />
              </div>
            )}

            <p>Our team develops scalable and secure web applications tailored to streamline your business operations.</p>
            <h3>Key Features</h3>
            <li>Customized solutions for your business processes</li>
            <li>Integration with existing systems</li>
            <li>User-friendly interfaces</li>
            <li>Robust security measures</li>
            
            <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ02pQP0Q7-rGzeViTUQTaNdnAl5DnBynS8tBPYd6D8Ef6vNZ1XkFtEHz22euT-H6GU7s2fQCmyY" target="_blank" rel="noopener noreferrer">
              <button>Interested</button>
            </a>
          </div>


        </div>

        {/* IT Support Services */}
        <div className="rightPic">
          <div className="infoContainer">
            <div className="infoTitle">
              <img src={ITSupportIcon} alt="IT Support Icon" />
              <h2>IT Support Services</h2>
            </div>

            {isMobile && (
              <div className="imageContainer">
                <img src={ITSupportImage} alt="IT Support" />
              </div>
            )}

            <p>We provide comprehensive IT support to ensure your systems run smoothly and efficiently.</p>
            <h3>Key Features</h3>
            <li>Custom design aligned with your brand</li>
            <li>Mobile-first responsive layouts</li>
            <li>SEO optimization for better visibility</li>
            <li>Ongoing maintenance and support</li>

            <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ02pQP0Q7-rGzeViTUQTaNdnAl5DnBynS8tBPYd6D8Ef6vNZ1XkFtEHz22euT-H6GU7s2fQCmyY" target="_blank" rel="noopener noreferrer">
              <button>Interested</button>
            </a>
          </div>

          {!isMobile && (
            <div className="imageContainer">
              <img src={ITSupportImage} alt="IT Support" />
            </div>
          )}
        </div>

        {/* Social Media Management */}
        <div className="rightPic">
          {!isMobile && (
            <div className="imageContainer">
              <img src={SocMedImage} alt="Social Media Management" />
            </div>
          )}
        
          <div className="infoContainer">
            <div className="infoTitle">
              <img src={SocMedIcon} alt="Social Media Icon" />
              <h2>Social Media Management</h2>
            </div>

            {isMobile && (
              <div className="imageContainer">
                <img src={SocMedImage} alt="Social Media Management" />
              </div>
            )}

            <p>Enhance your online presence with our social media management services.</p>
            <h3>Key Features</h3>
            <li>Strategy development and planning</li>
            <li>Content creation and scheduling</li>
            <li>Community management</li>
            <li>Analytics and performance tracking</li>

            <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ02pQP0Q7-rGzeViTUQTaNdnAl5DnBynS8tBPYd6D8Ef6vNZ1XkFtEHz22euT-H6GU7s2fQCmyY" target="_blank" rel="noopener noreferrer">
              <button>Interested</button>
            </a>
          </div>

        </div>

        {/* Virtual Admin Support Management */}
        <div className="rightPic">
          <div className="infoContainer">
            <div className="infoTitle">
              <img src={VirtualAdminIcon} alt="Virtual Admin Icon" />
              <h2>Virtual Admin Support Management</h2>
            </div>

            {isMobile && (
              <div className="imageContainer">
                <img src={VirtualAdminImage} alt="Virtual Admin" />
              </div>
            )}

            <p>Our virtual administrative services provide reliable support to handle your day-to-day tasks.</p>
            <h3>Key Features</h3>
            <li>Email and calendar management</li>
            <li>Data entry and database management</li>
            <li>Document preparation and management</li>
            <li>Customer service support</li>

            <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ02pQP0Q7-rGzeViTUQTaNdnAl5DnBynS8tBPYd6D8Ef6vNZ1XkFtEHz22euT-H6GU7s2fQCmyY" target="_blank" rel="noopener noreferrer">
              <button>Interested</button>
            </a>
          </div>

          {!isMobile && (
            <div className="imageContainer">
              <img src={VirtualAdminImage} alt="Virtual Admin" />
            </div>
          )}
        </div>

      </div>
      </section>
    </>
  );
};

export default ServicesSection;
