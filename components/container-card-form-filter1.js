import { useMemo } from "react";
import styles from "./container-card-form-filter1.module.css";
const ContainerCardFormFilter1 = ({
  dimensionCode,
  imageDimensions,
  imageDimensionsCode,
  imageDimensionsCode2,
  imageDimensions2,
  imageCode,
  imageSizeCode,
  personImageUrl,
  propBorderRadius,
}) => {
  const maskGroupIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.webDesignDevelopmentExperParent}>
        <div
          className={styles.webDesign}
        >{`Web Design & Development Expert`}</div>
        <div className={styles.hourParent}>
          <div className={styles.hour}>$50 /hour</div>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.parent}>
                  <img className={styles.icon} alt="" src={dimensionCode} />
                  <img className={styles.icon} alt="" src={imageDimensions} />
                  <img
                    className={styles.icon}
                    alt=""
                    src={imageDimensionsCode}
                  />
                  <img
                    className={styles.icon}
                    alt=""
                    src={imageDimensionsCode2}
                  />
                  <img className={styles.icon} alt="" src={imageDimensions2} />
                </div>
                <div className={styles.div}>4.5</div>
              </div>
            </div>
            <div className={styles.maskGroupParent}>
              <img className={styles.maskGroupIcon} alt="" src={imageCode} />
              <div className={styles.fromUnitedState}>From United State</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.uiUxDesignWrapper}>
            <div className={styles.fromUnitedState}>UI UX Design</div>
          </div>
          <div className={styles.uiUxDesignWrapper}>
            <div className={styles.fromUnitedState}>Front-end Dev.</div>
          </div>
          <div className={styles.uiUxDesignWrapper}>
            <div className={styles.fromUnitedState}>PHP</div>
          </div>
          <div className={styles.uiUxDesignWrapper}>
            <div className={styles.fromUnitedState}>Laravel</div>
          </div>
        </div>
      </div>
      <div className={styles.maskGroupGroup}>
        <img
          className={styles.maskGroupIcon1}
          alt=""
          src={imageSizeCode}
          style={maskGroupIconStyle}
        />
        <div className={styles.rahimAlie}>{personImageUrl}</div>
      </div>
    </div>
  );
};

export default ContainerCardFormFilter1;
