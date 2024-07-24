import Button from "./Button";
import styles from "./Footer.module.css";
import footerImg from "../img/footerImg.jpg";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div
        className={styles.footerImgWrapper}
        style={{ backgroundImage: `url(${footerImg})` }}
      >
        <div className={styles.footerImgBg}>
          <h1>Let's Talk!</h1>
          <p>
            Your virtual consultation is free & there’s zero pressure to book an
            appointment.
          </p>
          <Button
            alinhamento="center"
            text="Schedule a Virtual or In-Home Estimate"
          ></Button>
        </div>
      </div>
      <div className={styles.footerContactWrapper}>
        <div className={styles.footerAbout}>
          <h1>Natganic Housecleaning Service</h1>
          <p>We service all of South Florida and Palm Beach Counties.</p>
          <p>
            <a href="#">
              Contact us to book your house cleaning appointment today!
            </a>
          </p>
        </div>
        <div className={styles.footerContactInfo}>
          <div className={styles.footerDetails}>
            <h2>The Details</h2>
            <ul>
              <li>
                <a href="">Book Appointment</a>
              </li>
              <li>
                <a href="">Cleaning Services</a>
              </li>
              <li>
                <a href="">Premium Upgrades</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerLocation}>
            <h2>Location</h2>
            <p>2700 W Atlantic Blvd</p>
            <p>Suite 269</p>
            <p>Pompano Beach, FL 33069</p>
          </div>
          <div className={styles.footerContact}>
            <h2>Contact</h2>
            <p>(954) 673.6284</p>
            <p>info@natganic.com</p>
          </div>
          <div className={styles.footerFollow}>
            <h2>Follow</h2>
            <p>
              <a href="#">Instagram</a>
            </p>
            <p>
              <a href="#">Facebook</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
