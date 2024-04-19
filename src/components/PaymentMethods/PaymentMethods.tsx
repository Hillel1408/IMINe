import { useContext } from "react";
import { RadioButton, Layout } from "components";
import { OrderContext } from "pages/Order/Order";
import styles from "components/PaymentMethods/PaymentMethods.module.scss";

export default function PaymentMethods() {
  const value = useContext(OrderContext);

  const onChange = (e: any) =>
    value.setOrder({ ...value.order, paymentMethods: e.target.value });

  return (
    <Layout>
      <h2 className="subTitle">Способы оплаты</h2>
      <div className={styles.grid}>
        <RadioButton
          text="USDT"
          image="assets/icons/usdt.svg"
          name="paymentMethods"
          value="USDT"
          onChange={onChange}
        />
        <RadioButton
          text="Наличные"
          image="assets/icons/cash.svg"
          name="paymentMethods"
          value="Наличные"
          onChange={onChange}
        />
        <RadioButton
          text="Банковская карта"
          image="assets/icons/bank-card.svg"
          name="paymentMethods"
          value="Банковская карта"
          onChange={onChange}
        />
      </div>
    </Layout>
  );
}
