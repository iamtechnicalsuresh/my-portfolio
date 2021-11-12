import Styles from "../styles/TextDescription.module.css";

const TextDescription = ({
  text,
  fontSize = "0.9rem",
  color = "",
  textAlign,
  fontWeight = "bolder",
  lineHeight,
}) => {
  return (
    <p
      className={Styles.paragraph}
      style={{
        fontSize: fontSize,
        color: color,
        textAlign: textAlign,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
      }}
    >
      {text}
    </p>
  );
};

export default TextDescription;
