import { Input, RadioButton, Layout } from "components";
import styles from "components/Delivery/Delivery.module.scss";

export default function Delivery() {
  return (
    <Layout>
      <h2 className="subTitle">Доставка</h2>
      <div className={styles.grid}>
        <Input
          label="Адрес"
          type="text"
          placeholder="Москва, Московская ул., 221"
        />
        <RadioButton text="Самовывоз" image="assets/icons/pickup.svg" />
        <RadioButton image="assets/icons/sdek.svg" />
        <RadioButton image="assets/icons/business-line.svg" />
      </div>
    </Layout>
  );
}
