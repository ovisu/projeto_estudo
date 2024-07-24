import styles from "./ProductRight.module.css";
import prodImg from "../img/prodRight.jpg";
import Button from "./Button";
function ProductRight() {
  return (
    <div className={styles.produtoWrapper}>
      <div className={styles.prodImgWrapper}>
        <img src={prodImg} alt="" />
      </div>

      <div className={styles.prodTextWrapper}>
        <h1>PDC Professional Cleaning Process®</h1>
        <p>
          Our cleaning will impress you because we combine the best eco-friendly
          products, professional tools and vacuums with the world's top
          professional cleaning process,
          <em> PDC Professional Cleaning Process®</em>, created and perfected by
          owner and cleaning expert Antawana Hunter.
        </p>
        <Button
          text="LEARN MORE"
          alinhamento="self-start"
          margem="10%"
        ></Button>
      </div>
    </div>
  );
}

export default ProductRight;
