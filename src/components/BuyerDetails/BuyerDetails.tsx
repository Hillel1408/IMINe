import { useContext } from "react";
import { Input, Layout } from "components";
import { OrderContext } from "pages/Order/Order";
import styles from "components/BuyerDetails/BuyerDetails.module.scss";

export default function BuyerDetails() {
  const value = useContext(OrderContext);

  return (
    <Layout>
      <h2 className="subTitle">Данные покупателя</h2>
      <div className={styles.grid}>
        <Input
          label="Имя"
          type="text"
          placeholder="Вадим"
          value={value.order.name}
          onChange={(e: any) =>
            value.setOrder({ ...value.order, name: e.target.value })
          }
        />
        <Input
          label="Фамилия"
          type="text"
          placeholder="Портнягин"
          value={value.order.surname}
          onChange={(e: any) =>
            value.setOrder({ ...value.order, surname: e.target.value })
          }
        />
        <Input
          label="Номер телефона"
          type="tel"
          placeholder="+7 999 999 99 99"
          value={value.order.phoneNumber}
          onChange={(e: any) =>
            value.setOrder({ ...value.order, phoneNumber: e.target.value })
          }
        />
        <Input
          label="E-mail"
          type="email"
          placeholder="vadim.portnyagin@gmail.com"
          value={value.order.email}
          onChange={(e: any) =>
            value.setOrder({ ...value.order, email: e.target.value })
          }
        />
        <Input
          label="Telegram"
          type="text"
          placeholder="@p.vadim"
          value={value.order.telegram}
          onChange={(e: any) =>
            value.setOrder({ ...value.order, telegram: e.target.value })
          }
        />
      </div>
    </Layout>
  );
}
