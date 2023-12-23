import styles from "./form-container.module.css";
const FormContainer = ({
  imageDimensions,
  imageIdentifier,
  imageCode,
  imageCode2,
  title,
  category, 
  createdOn, 
  status,
  description
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.ellipseParent}>
          <img className={styles.frameChild} alt="" src={imageDimensions} />
          <div className={styles.frameContainer}>
            <div className={styles.abdullahWrapper}>
              <div className={styles.abdullah}>Abdullah</div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src={imageIdentifier}
                />
                <div className={styles.lastInteractin5}>
                 { //Last interactin 5 Hours ago
                 }
                  Last interaction {createdOn} Hours ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.adamDavisWrapper}>
            {//<div className={styles.adamDavis}>Adam Davis</div>
            }
              <div className={styles.adamDavis}>{title}</div>
            </div>
            <div className={styles.frameParent2}>
              <div />
              <div className={styles.vectorParent}>
                {/* <div className={styles.hoursAgo}>5 Hours ago</div> */}
                <div className={styles.hoursAgo}>{status}</div>
                <img className={styles.vectorIcon} alt="" src={imageCode} />
              </div>
            </div>
          </div>
          <img className={styles.frameChild} alt="" src={imageCode2} />
        </div>
      </div>
      <div className={styles.softUiDesign}>
        {
          description
        }
        {/* {Soft UI Design Sustem - Free Resources and Starters} */}
      </div>
    </div>
  );
};

export default FormContainer;
