import styles from "components/UI/Input/Input.module.scss";

export default function Input({
  type,
  label,
  placeholder,
  value,
  onChange,
  inputRef,
}: {
  type: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  inputRef?: any;
}) {
  return (
    <label className={styles.root}>
      {label}
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
