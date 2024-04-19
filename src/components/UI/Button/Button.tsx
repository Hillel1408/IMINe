import styles from "components/UI/Button/Button.module.scss";

export default function Button({ text }: { text: string }) {
  return <button className={styles.root}>{text}</button>;
}
