const TextHeading = ({
  text,
  fontSize = "1.4rem",
  color = "white",
  fontWeight = "bolder",
  margin = "0.5rem",
  lineHeight,
}) => {
  return (
    <h3
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
    </h3>
  );
};

export default TextHeading;
