import styles from "./wallet-icon.module.css";
const WalletIcon = ({ imageIcon, transactionTypeIcon }) => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.parent}>
        <img className={styles.icon} alt="" src={imageIcon} />
        <div className={styles.withdraw}>{transactionTypeIcon}</div>
      </div>
    </div>
  );
};

export default WalletIcon;
