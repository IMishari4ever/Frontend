import styles from "./container-box.module.css";
const ContainerBox = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.caretleftWrapper}>
        <img className={styles.caretleftIcon} alt="" src="/caretleft.svg" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>1</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>2</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>3</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>4</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>....</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>120</div>
      </div>
      <div className={styles.caretrightWrapper}>
        <img className={styles.caretleftIcon} alt="" src="/caretright1.svg" />
      </div>
    </div>
  );
};

export default ContainerBox;
