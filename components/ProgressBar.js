import Styles from "../styles/ProgressBar.module.css";
import TextHeading from "./TextHeading";

const ProgressBar = ({ title, width, fontSize, color }) => {
  return (
    <div className={Styles.ProgressBarContainer}>
      <TextHeading
        text={`${title} ${width}`}
        fontSize={fontSize}
        color={color}
      />
      <div className={Styles.progressBar}>
        <span className={Styles.progress} style={{ width: width }}></span>
      </div>
    </div>
  );
};

export default ProgressBar;
