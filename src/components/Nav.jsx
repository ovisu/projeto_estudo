import logo from "../img/logo.png";
import iconShop from "../img/iconShop.svg";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <header>
      <div className={styles.Logo}>
        <img src={logo} alt="Logo Natganic" />
      </div>
      <div className={styles.navRight}>
        <ul>
          <li>Home</li>
          <li>Our Services</li>
          <li>Book Appointment</li>
          <li>Premium Upgrades</li>
          <li>Careers</li>
        </ul>

        <div className={styles.iconShop}>
          <img src={iconShop} alt="" />
          <p>0</p>
        </div>
      </div>
    </header>
  );
}
export default Nav;
