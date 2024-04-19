import classNames from "classnames";
import styles from "components/Tabs/Tabs.module.scss";

export default function Tabs({
  className,
  tabs,
  activeTab,
  setActiveTab,
}: {
  className?: string;
  tabs: string[];
  activeTab: number;
  setActiveTab: (arg: number) => void;
}) {
  return (
    <ul className={classNames(styles.root, className)}>
      {tabs.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            setActiveTab(index + 1);
          }}
          className={classNames(activeTab === index + 1 && styles.activeTab)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
