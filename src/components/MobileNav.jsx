import styles from "./MobileNav.module.css";
import logo from "../img/logo.png";
import iconShop from "../img/iconShop.svg";
import React from "react";

function MobileNav() {
  const [menuAtivo, setMenuAtivo] = React.useState(false);
  const ativaMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  return (
    <header>
      <div className={styles.menuBurguer} onClick={ativaMenu}>
        ---
      </div>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.iconShopWrapper}>
        <img src={iconShop} alt="" />
        <p>0</p>
      </div>
      <div className={menuAtivo ? styles.dropMenu : styles.hidden}>
        <ul>
          <li>Home</li>
          <li>Our Services</li>
          <li>Book Appointment</li>
          <li>Premiu Upgrades</li>
          <li>Careers</li>
        </ul>
      </div>
    </header>
  );
}

export default MobileNav;
