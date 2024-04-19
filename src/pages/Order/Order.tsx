import classNames from "classnames";
import { Tabs, BuyerDetails, Delivery } from "components";
import styles from "pages/Order/Order.module.scss";

export default function Order() {
  return (
    <div className="container">
      <h1 className={classNames("title", styles.title)}>
        Оформление заказа <span>4 товара</span>
      </h1>
      <div className={styles.grid}>
        <div>
          <Tabs className={styles.tabs} />
          <div className={styles.flex}>
            <BuyerDetails />
            <Delivery />
          </div>
        </div>
      </div>
    </div>
  );
}
