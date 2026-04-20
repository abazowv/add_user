import styles from "./Button.module.css";

/**
 * Reusable UI Button component
 * @param {ReactNode} children - The content inside the button (e.g., text)
 * @param {Object} rest - Any other standard button props (e.g., onClick, type)
 */
function Button({ children, ...rest }) {
  return (
      <button className={styles.btn} {...rest}>
        {children}
      </button>
  );
}

export default Button;