import Nav from "./Nav";
import styles from "./Welcome.module.css";
import welcomeImg from "../img/welcome.jpg";

function Welcome() {
  return (
    <div className={styles.welcomeWrapper}>
      <div
        style={{ backgroundImage: `url(${welcomeImg})` }}
        className={styles.welcomeImgWrapper}
      >
        <div className={styles.welcomeBgimg}>
          <div className={styles.welcomeBg}>
            <h1>
              The spa
              <br /> treatment
              <br /> for your home.
            </h1>
            <p>
              <a href="#">Get A Quote</a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.welcomeText}>
        <h2>
          Put your Housecleaning in the caring hands of the Certified
          Professional Cleaning Technicians at Natganic Housecleaning Service.
        </h2>
      </div>
    </div>
  );
}

export default Welcome;
