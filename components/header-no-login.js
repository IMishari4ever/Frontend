import styles from "./header-no-login.module.css";
const HeaderNoLogin = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.communityWrapper}>
        <div className={styles.community}>Community</div>
      </div>
      <div className={styles.instanceParent}>
        <div className={styles.outlineSearchMagniferParent}>
          <img
            className={styles.outlineSearchMagnifer}
            alt=""
            src="/outline--search--magnifer2.svg"
          />
          <div className={styles.technologyCoding}>Search</div>
          <img
            className={styles.outlineArrowsAltArrowD}
            alt=""
            src="/outline--arrows--alt-arrow-down1.svg"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.ctaParent}>
            <div className={styles.cta}>
              <div className={styles.createAGigWrapper}>
                <div className={styles.createAGig}>Register</div>
              </div>
            </div>
            <button className={styles.cta1}>
              <div className={styles.createAGig1}>Sign In</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNoLogin;
