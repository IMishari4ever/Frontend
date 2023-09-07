import styles from "./response-time-avg-user-container1.module.css";
const ResponseTimeAvgUserContainer1 = () => {
  return (
    <div className={styles.user}>
      <button className={styles.viewprofile}>
        <div className={styles.viewProfile}>View Profile</div>
      </button>
      <div className={styles.user1}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameWrapper}>
              <div className={styles.rahimAlie}>Rahim Alie</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.topRatedParent}>
                <div className={styles.topRated}>{`Top Rated `}</div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-2960.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img className={styles.userChild} alt="" src="/ellipse-871@2x.png" />
      </div>
    </div>
  );
};

export default ResponseTimeAvgUserContainer1;
