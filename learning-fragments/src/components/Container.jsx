import styles from "./Container.module.css";

const Container = (props) => {
  const props1 = props;
  return <div className={styles.container}>{props1.children}</div>;
};

export default Container;
