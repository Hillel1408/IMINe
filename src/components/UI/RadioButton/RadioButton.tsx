import { Radio } from "components";
import styles from "components/UI/RadioButton/RadioButton.module.scss";
import { useRef } from "react";

export default function RadioButton({
  text,
  image,
  name,
  value,
  onChange,
}: {
  text?: string;
  image: string;
  name?: string;
  value?: string;
  onChange?: any;
}) {
  const radioRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={styles.root}
      onClick={() => {
        radioRef?.current?.click();
      }}
    >
      <img src={image} alt="" />
      <span>{text}</span>
      <Radio
        name={name}
        value={value}
        onChange={onChange}
        radioRef={radioRef}
      />
    </div>
  );
}
