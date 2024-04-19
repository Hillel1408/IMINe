import { Input } from "components";
import styles from "components/BuyerDetails/BuyerDetails.module.scss";

export default function BuyerDetails() {
  return (
    <div className={styles.root}>
      <h2 className="subTitle">Данные покупателя</h2>
      <div className={styles.grid}>
        <Input label="Имя" type="text" placeholder="Вадим" />
        <Input label="Фамилия" type="text" placeholder="Портнягин" />
        <Input
          label="Номер телефона"
          type="tel"
          placeholder="+7 999 999 99 99"
        />
        <Input
          label="E-mail"
          type="email"
          placeholder="vadim.portnyagin@gmail.com"
        />
        <Input label="Telegram" type="text" placeholder="@p.vadim" />
      </div>
    </div>
  );
}
