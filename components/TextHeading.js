import Styles from "../styles/TextHeading.module.css";

const TextHeading = ({
  text,
  fontSize = "1.4rem",
  color = "",
  fontWeight = "",
  margin = "0.5rem",
  lineHeight,
}) => {
  return (
    <h1
      className={Styles.heading}
      style={{
        fontSize: fontSize,
        color: color,
        fontWeight: fontWeight,
        marginTop: margin,
        marginBlock: margin,
        lineHeight: lineHeight,
      }}
    >
      {text}
    </h1>
  );
};

export default TextHeading;
