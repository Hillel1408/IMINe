import styles from "components/UI/Button/Button.module.scss";

export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={styles.root}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
    >
      {text}
    </button>
  );
}
