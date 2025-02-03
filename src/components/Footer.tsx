
import './Footer.css'; // Import the CSS file
import amazonLogo from '../assets/amazon-logo.png'


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About Amazon</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Amazon Devices</a></li>
            <li><a href="#">Amazon Science</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li><a href="#">Sell products on Amazon</a></li>
            <li><a href="#">Sell on Amazon Business</a></li>
            <li><a href="#">Sell apps on Amazon</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Advertise Your Products</a></li>
            <li><a href="#">Self-Publish with Us</a></li>
            <li><a href="#">Host an Amazon Hub</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li><a href="#">Amazon Rewards Visa Signature Cards</a></li>
            <li><a href="#">Amazon.com Store Card</a></li>
            <li><a href="#">Amazon Business Card</a></li>
            <li><a href="#">Amazon Business Line of Credit</a></li>
            <li><a href="#">Shop with Points</a></li>
            <li><a href="#">Credit Card Marketplace</a></li>
            <li><a href="#">Reload Your Balance</a></li>
            <li><a href="#">Amazon Currency Converter</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Let Us Help You</h3>
          <ul>
            <li><a href="#">Amazon and COVID-19</a></li>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Your Orders</a></li>
            <li><a href="#">Shipping Rates & Policies</a></li>
            <li><a href="#">Amazon Prime</a></li>
            <li><a href="#">Returns & Replacements</a></li>
            <li><a href="#">Manage Your Content and Devices</a></li>
            <li><a href="#">Amazon Assistant</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
      <img src={amazonLogo} alt="Amazon Logo" className="amazon-logo" />

        <div className="footer-countries">
          <a href="#">Australia</a>
          <a href="#">Brazil</a>
          <a href="#">Canada</a>
          <a href="#">China</a>
          <a href="#">France</a>
          <a href="#">Germany</a>
          <a href="#">Italy</a>
          <a href="#">Japan</a>
          <a href="#">Mexico</a>
          <a href="#">Netherlands</a>
          <a href="#">Singapore</a>
          <a href="#">Spain</a>
          <a href="#">United Arab Emirates</a>
          <a href="#">United Kingdom</a>
          <a href="#">United States</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
