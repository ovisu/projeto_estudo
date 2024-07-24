import styles from "./Button.module.css";

function Button({ text, alinhamento, margem }) {
  return (
    <a
      href="#"
      className={styles.btn}
      style={{ alignSelf: `${alinhamento}`, marginTop: `${margem}` }}
    >
      {text}
    </a>
  );
}

export default Button;
