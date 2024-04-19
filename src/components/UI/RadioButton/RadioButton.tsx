import styles from "components/UI/RadioButton/RadioButton.module.scss";

export default function RadioButton({
  text,
  image,
}: {
  text?: string;
  image: string;
}) {
  return (
    <div className={styles.root}>
      <img src={image} alt="" />
      {text}
    </div>
  );
}
