// src/components/Footer.tsx
import '../../css/style.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-column">
          <h3>VISIT US.</h3>
          <p>
            <a href="https://www.facebook.com/OikosTechnologies">
              <img src="/src/assets/media/FB.png" alt="Facebook" className="icon" />
            </a>{' '}
            Facebook | B2 L38 Champaca St., Maligaya Park Subd., Novaliches,
            <br />
            Quezon City, Metro Manila, Philippines 1123
          </p>
        </div>
        <div className="footer-column">
          <h3>CONTACT US.</h3>
          <p>oikostechnologies@gmail.com | 0961 284 8264</p>
        </div>
      </div>

      <div className="mobile-footer">
        <a href="https://www.facebook.com/OikosTechnologies">
          <img src="/src/assets/media/FB.png" alt="Facebook" />
        </a>
      </div>

      <div className="footer-bottom">
        <p>© 2004 Oikos Technologies. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
