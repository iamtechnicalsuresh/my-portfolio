import Styles from "../styles/Button.module.css";

const Button = ({ title, onSubmit }) => {
  return (
    <button
      className={`${Styles.button} ${Styles.btn_primary} my-1 `}
      type="submit"
      onSubmit={onSubmit}
    >
      {title}
    </button>
  );
};

export default Button;
