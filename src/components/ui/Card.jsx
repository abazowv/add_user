import styles from "./Card.module.css";

/**
 * Reusable Card wrapper component to provide consistent styling (borders, padding, shadows)
 * @param {ReactNode} children - The content to be wrapped inside the card
 */
function Card({ children }) {
  return <div className={styles.card}>{children}</div>;
}

export default Card;