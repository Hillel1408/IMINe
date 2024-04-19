import { Input, RadioButton } from "components";

import styles from "components/Delivery/Delivery.module.scss";

export default function Delivery() {
  return (
    <div className={styles.root}>
      <h2 className="subTitle">Доставка</h2>
      <div className={styles.grid}>
        <Input
          label="Адрес"
          type="text"
          placeholder="Москва, Московская ул., 221"
        />
        <RadioButton text="Самовывоз" image="assets/icons/pickup.svg" />
        <RadioButton image="assets/icons/sdek.svg" />
      </div>
    </div>
  );
}
