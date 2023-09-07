import styles from "./buyer-container.module.css";
const BuyerContainer = ({ userRole, dimensionCode }) => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.buyerParent}>
        <div className={styles.buyer}>{userRole}</div>
        <img className={styles.vectorStrokeIcon} alt="" src={dimensionCode} />
      </div>
    </div>
  );
};

export default BuyerContainer;
