import { ErrorMessage } from "formik";
import Styles from "../styles/TextInput.module.css";

const TextInput = ({ title, name, placeHolder, type, onChange }) => {
  return (
    <div className={Styles.formGroup}>
      <label className={Styles.formLabel}>{title}</label>
      <input
        className={Styles.formInput}
        name={name}
        placeholder={placeHolder}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
