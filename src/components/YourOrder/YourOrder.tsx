import { Layout, Input, Button } from "components";
import styles from "components/YourOrder/YourOrder.module.scss";

export default function YourOrder() {
  const order = {
    goods: [
      { id: 1, name: "Bitmain Antminer S19K PRO 120 TH/s" },
      { id: 2, name: "Bitmain Antminer L7 9050MH/s" },
      { id: 3, name: "Bitmain Antminer S19 XP 141" },
      { id: 4, name: "Bitmain Antminer S19 XP 141 TH/s" },
    ],
  };

  return (
    <Layout>
      <h2 className="subTitle">Ваш заказ:</h2>
      <div className={styles.promocod}>
        <div>
          <Input type="text" placeholder="Промокод" />
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
      <Button text="Оформить заказ" />
    </Layout>
  );
}
