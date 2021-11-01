import Styles from "../styles/Card.module.css";

const Card = ({ children, direction }) => {
  return (
    <div className={Styles.card} style={{ flexDirection: direction }}>
      {children}
    </div>
  );
};

export default Card;
