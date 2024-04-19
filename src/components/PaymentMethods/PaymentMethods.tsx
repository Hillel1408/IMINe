import { RadioButton, Layout } from "components";
import styles from "components/PaymentMethods/PaymentMethods.module.scss";

export default function PaymentMethods() {
  return (
    <Layout>
      <h2 className="subTitle">Способы оплаты</h2>
      <div className={styles.grid}>
        <RadioButton text="USDT" image="assets/icons/usdt.svg" />
        <RadioButton text="Наличные" image="assets/icons/cash.svg" />
        <RadioButton
          text="Банковская карта"
          image="assets/icons/bank-card.svg"
        />
      </div>
    </Layout>
  );
}
