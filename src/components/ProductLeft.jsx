import styles from "./ProductLeft.module.css";
import prodLeft from "../img/prodLeft.jpg";
import Button from "./Button";
function ProductLeft() {
  return (
    <div className={styles.prodWrapper}>
      <div className={styles.prodImgWrapper}>
        <img src={prodLeft} alt="Produto Esquerda" />
      </div>
      <div className={styles.prodTextWrapper}>
        <h1>Your dream of a sparkling clean house is about to come true…</h1>
        <p>
          We use 100% eco-friendly cleaning products infused with organic
          essential oils (or choose an unscented clean) and provide the expert
          service and attention to detail that you'd expect from a five-star
          hotel or spa. We guarantee our cleaning services will be the best you
          have ever experienced.
        </p>
        <ul>
          <li>detailed kitchen & bathroom cleaning and disinfecting</li>
          <li>high and low dusting throughout the home</li>
          <li>general tidying (toys, blankets, papers)</li>
          <li>carpets thoroughly vacuumed</li>
          <li>hard floors mopped</li>
          <li>deep cleaning extras available</li>
        </ul>
        <Button
          text="GET A QUOTE"
          alinhamento="self-start"
          margem="10%"
        ></Button>
      </div>
    </div>
  );
}

export default ProductLeft;
