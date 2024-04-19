import classNames from "classnames";
import {
  Tabs,
  BuyerDetails,
  Delivery,
  PaymentMethods,
  YourOrder,
} from "components";
import styles from "pages/Order/Order.module.scss";
import { useState } from "react";

export default function Order() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = ["Для физических лиц", "Для юридических лиц и ИП"];

  return (
    <div className="container">
      <h1 className={classNames("title", styles.title)}>
        Оформление заказа <span>4 товара</span>
      </h1>
      <div className={styles.grid}>
        <div>
          <Tabs
            className={styles.tabs}
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className={styles.flex}>
            {activeTab === 1 && (
              <>
                <BuyerDetails />
                <Delivery />
                <PaymentMethods />
              </>
            )}
          </div>
        </div>
        <YourOrder />
      </div>
    </div>
  );
}
