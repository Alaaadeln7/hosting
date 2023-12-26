import "./footer.css";
import Logo from "../Logo";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <div className="text">
            <Logo />
            <span>M:(900)-1567-98</span>
            <span>Info@Me.com</span>
            <div className="social-media">
              <ul>
                <li>
                  <a href="https://www.facebook.com" target="_blank">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" target="_blank">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com" target="_blank">
                    <FaPinterest />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="products">
            <h3>Products</h3>
            <ul>
              <li>Features</li>
              <li>Security</li>
              <li>Enterprise</li>
              <li>Testimonials</li>
              <li>Our Proicing</li>
            </ul>
          </div>
          <div className="company">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Meet Our Team</a>
              </li>
              <li>
                <a href="#">News &amp; Media</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="support">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#">Supports Team</a>
              </li>
              <li>
                <a href="#">police &amp; Security</a>
              </li>
              <li>
                <a href="#">Call Center</a>
              </li>
              <li>
                <a href="#">Customer Services</a>
              </li>
              <li>
                <a href="#">Technical Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="copy-right">
        <p>CopyRight © Hosting By Alaa adel.All Right Recoverd.Teams Of Use</p>
      </div>
    </footer>
  );
}
