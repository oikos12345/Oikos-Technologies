import '../css/about.css';
import Header from '../shared/partials/Header';
import Footer from '../shared/partials/Footer';

const Services: React.FC = () => {
  return (
    <>
    <Header />

        <section className="hero-video" id="heroVideo">
            <video autoPlay muted loop playsInline>
                <source src="/src/assets/media/OUR SERVICES BG.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="firstContainer">
                <div className="firstContent">
                    <p>Bring your vision to life with innovative IT solutions designed for growth, reliability, and long-term success. Let's build something extraordinary—together.</p>
                    <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ02pQP0Q7-rGzeViTUQTaNdnAl5DnBynS8tBPYd6D8Ef6vNZ1XkFtEHz22euT-H6GU7s2fQCmyY" target="_blank">
                        <button>Book a Consulation Now</button>
                    </a>
                </div>
            </div>
        </section>

        <section className="ourServices">
            <h1>OUR SERVICES</h1>
            <p>At Oikos Technologies, we are committed to delivering innovative and tailored IT solutions that drive success for our clients. Explore our range of services designed to meet your unique business needs.</p>
        </section>
        
        <section className="services">
            <div className="main-container">

                <div className="rightPic">
                    <div className="imageContainer">
                        <img src="/src/assets/media/WEB DEV.jpg" alt="" />
                    </div>

                    <div className="infoContainer">
                        <div className="infoTitle">
                            <img src="/src/assets/media/WEBSITEDEV.jpg" alt="" />
                            <h2>Website Development</h2>
                        </div>
                            <p>We craft responsive and user-friendly websites that reflect your brand identity and engage your audience. Our development process ensures optimal performance across all devices.</p>
                        
                        <h3>Key Features</h3>
                            <li>Custom design aligned with your brand</li>
                            <li>Mobile-first responsive layouts</li>
                            <li>SEO optimization for better visibility</li>
                            <li>Ongoing maintenance and support</li>

                        <a href="#heroVideo"><button>Interested</button></a>
                    </div>
                </div>



                <div className="rightPic">

                    <div className="infoContainer">
                        <div className="infoTitle">
                            <img src="/src/assets/media/WEBAPP.jpg" alt="" />
                            <h2>Web App Development</h2>
                        </div>
                            <p>Our team develops scalable and secure web applications tailored to streamline your business operations and enhance user experience.</p>                    
                        <h3>Key Features</h3>
                            <li>Customized solutions for your business processes</li>
                            <li>Integration with existing systems</li>
                            <li>User-friendly interfaces</li>
                            <li>Robust security measures</li>

                        <a href="#heroVideo"><button>Interested</button></a>
                    </div>

                    <div className="imageContainer">
                        <img src="/src/assets/media/WEB APP DEV.jpg" alt="" />
                    </div>
                </div>


            <div className="rightPic">
                    <div className="imageContainer">
                        <img src="/src/assets/media/IT SUPPORT.png" alt="" />
                    </div>

                    <div className="infoContainer">
                        <div className="infoTitle">
                            <img src="/src/assets/media/ITSUPPORT ICON.jpg" alt="" />
                            <h2>IT Support Services</h2>
                        </div>
                            <p>We provide comprehensive IT support to ensure your systems run smoothly and efficiently, minimizing downtime and maximizing productivity.</p>                    
                        
                            <h3>Key Features</h3>
                            <li>Custom design aligned with your brand</li>
                            <li>Mobile-first responsive layouts</li>
                            <li>SEO optimization for better visibility</li>
                            <li>Ongoing maintenance and support</li>

                        <a href="#heroVideo"><button>Interested</button></a>
                    </div>
                </div>

                <div className="rightPic">
                    <div className="infoContainer">
                        <div className="infoTitle">
                            <img src="/src/assets/media/WEBAPP.jpg" alt="" />
                            <h2>Creative Suppors Services</h2>
                        </div>
                            <p>Our creative team offers a range of services to bring your ideas to life, from graphic design to content creation, ensuring your brand stands out.</p>

                        <h3>Key Features</h3>
                            <li>Logo and brand identity design</li>
                            <li>Marketing materials and collateral</li>
                            <li>Content creation for various platforms</li>
                            <li>Visual storytelling and illustration</li>

                        <a href="#heroVideo"><button>Interested</button></a>
                    </div>
                    <div className="imageContainer">
                        <img src="/src/assets/media/WEB APP DEV.jpg" alt="" />
                    </div>
                </div>

                <div className="rightPic">
                    <div className="imageContainer">
                        <img src="/src/assets/media/SOC MED.png" alt="" />
                    </div>

                    <div className="infoContainer">
                        <div className="infoTitle">
                            <img src="/src/assets/media/SOCMED ICON.png" alt="" />
                            <h2>Social Media Management</h2>
                        </div>
                            <p>Enhance your online presence with our social media management services. We create and manage content that resonates with your audience and drives engagement.</p>                    
                            
                        <h3>Key Features</h3>
                            <li>Strategy development and planning</li>
                            <li>Content creation and scheduling</li>
                            <li>Community management</li>
                            <li>Analytics and performance tracking</li>

                        <a href="#heroVideo"><button>Interested</button></a>
                    </div>
                </div>

                <div className="rightPic">

                    <div className="infoContainer">
                        <div className="infoTitle">
                            <img src="/src/assets/media/VIR ADD ICON.png" alt="" />
                            <h2>Virtual Admin Support Management</h2>
                        </div>
                            <p>Our virtual administrative services provide reliable support to handle your day-to-day tasks, allowing you to focus on growing your business.</p>

                        <h3>Key Features</h3>
                            <li>Email and calendar management</li>
                            <li>Data entry and database management</li>
                            <li>Document preparation and management</li>
                            <li>Customer service support</li>

                        <a href="#heroVideo"><button>Interested</button></a>
                    </div>

                    <div className="imageContainer">
                        <img src="/src/assets/media/VIRTUA ADMIN.jpg" alt="" />
                    </div>
                </div>

            </div>
        </section>

    <Footer />
    </>
  );
};

export default Services;
