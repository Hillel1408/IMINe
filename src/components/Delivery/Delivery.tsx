import { useContext } from "react";
import { Input, RadioButton, Layout } from "components";
import { OrderContext } from "pages/Order/Order";
import styles from "components/Delivery/Delivery.module.scss";

export default function Delivery() {
  const value = useContext(OrderContext);

  const onChange = (e: any) =>
    value.setOrder({ ...value.order, delivery: e.target.value });

  return (
    <Layout>
      <h2 className="subTitle">Доставка</h2>
      <div className={styles.grid}>
        <Input
          label="Адрес"
          type="text"
          placeholder="Москва, Московская ул., 221"
          value={value.order.deliveryAddress}
          onChange={(e: any) =>
            value.setOrder({ ...value.order, deliveryAddress: e.target.value })
          }
        />
        <RadioButton
          text="Самовывоз"
          image="assets/icons/pickup.svg"
          name="delivery"
          value="Самовывоз"
          onChange={onChange}
        />
        <RadioButton
          image="assets/icons/sdek.svg"
          name="delivery"
          value="SDEK"
          onChange={onChange}
        />
        <RadioButton
          image="assets/icons/business-line.svg"
          name="delivery"
          value="Деловые линии"
          onChange={onChange}
        />
      </div>
    </Layout>
  );
}
