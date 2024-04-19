import { useContext } from "react";
import { Layout, Input, Button } from "components";
import { OrderContext } from "pages/Order/Order";
import styles from "components/YourOrder/YourOrder.module.scss";

export default function YourOrder() {
  const value = useContext(OrderContext);

  const onSubmit = () => {
    console.log({ ...value.order, goods: order.goods });
  };

  const order = {
    goods: [
      { id: 1, name: "Bitmain Antminer S19K PRO 120 TH/s" },
      { id: 2, name: "Bitmain Antminer L7 9050MH/s" },
      { id: 3, name: "Bitmain Antminer S19 XP 141" },
      { id: 4, name: "Bitmain Antminer S19 XP 141 TH/s" },
    ],
    list: [
      { title: "Товары", value: "36 890 ₽" },
      { title: "Скидка (20%)", value: "29 512 ₽" },
      { title: "Доставка", value: "2 000 ₽" },
      { title: "Промокод", value: "-20%" },
    ],
  };

  return (
    <Layout>
      <h2 className="subTitle">Ваш заказ:</h2>
      <div className={styles.promocod}>
        <div>
          <Input
            type="text"
            placeholder="Промокод"
            value={value.order.promocode}
            onChange={(e: any) =>
              value.setOrder({ ...value.order, promocode: e.target.value })
            }
          />
          <button>
            <svg width="20" height="20">
              <path d="M6.98286 2.95796C7.22694 2.71388 7.62267 2.71388 7.86675 2.95796L13.3001 8.39129C14.1858 9.27704 14.1858 10.7228 13.3001 11.6085L7.86675 17.0418C7.62267 17.2859 7.22694 17.2859 6.98286 17.0418C6.73879 16.7978 6.73879 16.402 6.98286 16.158L12.4162 10.7246C12.8138 10.327 12.8138 9.67277 12.4162 9.27518L6.98286 3.84184C6.73879 3.59777 6.73879 3.20204 6.98286 2.95796Z" />
            </svg>
          </button>
        </div>
        <p>Неверный промокод или промокод с истекшим сроком действия</p>
      </div>
      <ul className={styles.list}>
        {order.goods.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={styles.total}>
        <ul>
          {order.list.map((item, index) => (
            <li key={index}>
              <span>{item.title}</span>
              <span></span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
        <div>
          <span>Итого:</span>
          <span></span>
          <span>31 512 ₽</span>
          <p>203 000</p>
        </div>
      </div>
      <Button text="Оформить заказ" onClick={onSubmit} />
    </Layout>
  );
}
