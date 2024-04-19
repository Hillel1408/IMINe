import classNames from "classnames";
import {
  Tabs,
  BuyerDetails,
  Delivery,
  PaymentMethods,
  YourOrder,
} from "components";
import styles from "pages/Order/Order.module.scss";
import { useState, createContext } from "react";

const initialState = {
  name: "",
  surname: "",
  phoneNumber: "",
  email: "",
  telegram: "",
  deliveryAddress: "",
  delivery: "",
  paymentMethods: "",
  promocode: "",
};

export const OrderContext = createContext({
  order: initialState,
  setOrder: (arg: typeof initialState) => {},
});

export default function Order() {
  const [activeTab, setActiveTab] = useState(1);
  const [order, setOrder] = useState(initialState);

  const tabs = ["Для физических лиц", "Для юридических лиц и ИП"];

  return (
    <div className="container">
      <h1 className={classNames("title", styles.title)}>
        Оформление заказа <span>4 товара</span>
      </h1>
      <OrderContext.Provider value={{ order, setOrder }}>
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
      </OrderContext.Provider>
    </div>
  );
}
