import '../css/about.css';
import Header from '../shared/partials/Header';
import Footer from '../shared/partials/Footer';

const About: React.FC = () => {
  return (
    <>
      <Header />

      <section className="hero-video">
        <video autoPlay muted loop playsInline>
          <source src="/src/assets/media/ABOUT US BG.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="firstContainer">
          <div className="firstContent">
            <h1>WHAT WE ARE.</h1>
            <p>
              Delivering smart IT solutions, web and app development, and ongoing technical support.
            </p>
          </div>
        </div>
      </section>

      <section className="secondContent">
        <h1>WHAT WE DO.</h1>
        <p>
          We deliver exceptional IT services and digital solutions that help businesses grow,
          innovate, and succeed. From creating websites, software, and mobile applications to
          providing reliable technical support, we are committed to being a dependable partner
          every step of the way.
        </p>
      </section>

      <section className="section3">
        <video autoPlay muted loop playsInline>
          <source src="/src/assets/media/MISSION VISSION BG.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="s3container">
          <div className="s3content">
            <h1>VISSION</h1>
            <p>
              To become the preferred partner of Schools and business institutions by providing
              cost-effective applications and management systems that will improve their
              productivity.
            </p>
          </div>

          <div className="s3content">
            <h1>MISSION</h1>
            <ul>
              <li>Streamline administrative tasks saving time and money</li>
              <li>Improve school-to-home communication</li>
              <li>Manage information across the school</li>
              <li>Make information available online for students, parents and staff</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section4">
        <div className="main-container">
          <h1>MEET OUR TEAM</h1>

          <div className="firstPerson">
            <div className="personCard">
              <img src="/src/assets/media/Mr. Rubio.jpg" alt="Sole Proprietor" />
              <h3>Sole Proprietor</h3>
            </div>
            <div className="personInfo1">
              <h2>Jonel Rubio</h2>
              <p>
                Oversees all aspects of the business, including developing strategies, delivering services, managing finances, and handling client relationships. They design and implement IT solutions, provide consulting, and ensure that the business stays competitive through continuous innovation. The sole proprietor also handles sales, marketing, project management, and legal compliance, while managing the day-to-day operations and providing ongoing support to clients. Essentially, they act as the business's decision-maker, technician, marketer, and customer support, all rolled into one.
              </p>
            </div>
          </div>

          <div className="firstPerson">
            <div className="personInfo2">
              <h2>Mark Wendel Murillo</h2>
                <p>Oversees all aspects of the business, including developing strategies, delivering services, managing finances, and handling client relationships. They design and implement IT solutions, provide consulting, and ensure that the business stays competitive through continuous innovation. The sole proprietor also handles sales, marketing, project management, and legal compliance, while managing the day-to-day operations and providing ongoing support to clients. Essentially, they act as the business's decision-maker, technician, marketer, and customer support, all rolled into one.</p>
            </div>
            <div className="personCard">
              <img src="/src/assets/media/Murillo.jpg" alt="Operations Head" />
              <h3>Operations Head</h3>
            </div>
          </div>

          <div className="firstPerson">
            <div className="personInfo1">
              <h2>IT Associates</h2>
                <p>The key members of OIKOS team who provide IT-related services and support to clients. They handle tasks such as system setup, troubleshooting, and maintenance, ensuring that client IT systems run smoothly. Treated as partners, they collaborate with other teams, use their technical expertise to deliver solutions, and stay updated on the latest technologies to meet client needs effectively.</p>
            </div>
          </div>

          <div className="firstPerson">
            <div className="personInfo2">
              <h2>Business Associates</h2>
                <p>Essential player in Oikos Team. Serves as partners who provide a range of business services to clients, including operations support, marketing strategies, sales assistance, and tailored business solutions. They work closely with clients to optimize processes, enhance marketing efforts, support sales, and develop effective strategies for business growth.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
