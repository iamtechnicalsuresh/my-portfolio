import Styles from "../styles/TextArea.module.css";

const TextArea = ({ title, name, placeHolder, onChange }) => {
  return (
    <div className={Styles.formGroup}>
      <label className={Styles.formLabel}>{title}</label>
      <textarea
        className={Styles.formInput}
        name={name}
        placeholder={placeHolder}
        onChange={onChange}
        rows="8"
      />
    </div>
  );
};

export default TextArea;
