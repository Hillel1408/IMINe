import styles from "components/Layout/Layout.module.scss";

export default function Layout({ children }: { children: any }) {
  return <div className={styles.root}>{children}</div>;
}
