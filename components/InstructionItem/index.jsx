import styles from "./index.module.css";

const InstructionItem = ({ name, children }) => {
  return (
    <div className={styles.instruction__item}>
      {name && <p className={styles.item__title}>{name}</p>}
      <div className={styles.item__text}>{children}</div>
    </div>
  );
};

export default InstructionItem;
