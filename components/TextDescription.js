const TextDescription = ({
  text,
  fontSize = "0.9rem",
  color = "white",
  textAlign,
  fontWeight = "bolder",
  lineHeight,
}) => {
  return (
    <p
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
