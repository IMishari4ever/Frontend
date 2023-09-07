import styles from "./container-card.module.css";
const GigIndex = ({
  animatedBottleHoldingTool,
  prop,
  maskGroup,
  prop1,
  price = "$5",
  title = "I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design",
  onFrameContainer54Click,
}) => {
  return (
    <div
      className={styles.animatedBottleHoldingToolSParent}
      onClick={onFrameContainer54Click}
    >
      <img
        className={styles.animatedBottleHoldingToolSIcon}
        alt=""
        src={animatedBottleHoldingTool}
      />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.parent}>
                <img className={styles.icon} alt="" src={prop} />
                <div className={styles.div}>4.5</div>
              </div>
              <div className={styles.div1}>(10)</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.rahimAlieParent}>
                <div className={styles.rahimAlie}>Rahim Alie</div>
                <div className={styles.topRatedSeller}>Top Rated Seller</div>
              </div>
              <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
            </div>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.frameParent1}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <img className={styles.icon1} alt="" src={prop1} />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.div2}>{price}</div>
              <div className={styles.startingPrice}>Starting Price</div>
            </div>
          </div>
          <div className={styles.iWillConvert}>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default GigIndex;
