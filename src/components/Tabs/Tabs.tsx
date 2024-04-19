import classNames from "classnames";
import styles from "components/Tabs/Tabs.module.scss";

export default function Tabs({ className }: { className?: string }) {
  return (
    <ul className={classNames(styles.root, className)}>
      <li className={styles.activeTab}>Для физических лиц</li>
      <li>Для юридических лиц и ИП</li>
    </ul>
  );
}
