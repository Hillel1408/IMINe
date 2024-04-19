import styles from "components/UI/Input/Input.module.scss";

export default function Input({
  type,
  label,
  placeholder,
}: {
  type: string;
  label: string;
  placeholder?: string;
}) {
  return (
    <label className={styles.root}>
      {label}
      <input type={type} placeholder={placeholder} />
    </label>
  );
}
