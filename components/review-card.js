import { useMemo } from "react";
import styles from "./review-card.module.css";
const ReviewCard = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsText2,
  imageDimensionsText3,
  imageDimensionsText4,
  imageDimensionsText5,
  imageDimensionsText6,
  imageDimensionsText7,
  imageDimensionsText8,
  imageDimensionsText9,
  imageDimensionsText10,
  imageDimensionsText11,
  imageDimensionsText12,
  imageDimensionsText13,
  imageDimensionsText14,
  imageDimensionsText15,
  imageDimensionsText16,
  imageDimensionsText17,
  propAlignSelf,
  propFlex,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div
      className={styles.clientsReviewsAboutTheSelParent}
      style={frameDiv3Style}
    >
      <div className={styles.clientsReviewsAbout}>
        Client’s Reviews about the Seller
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.williumWatsonParent}>
                <div className={styles.williumWatson}>Willium Watson</div>
                <div className={styles.unitedKingdom}>United Kingdom</div>
              </div>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src={imageDimensions}
              />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.daysAgoParent}>
                <div className={styles.daysAgo}>16days ago</div>
                <div className={styles.stars}>
                  <div className={styles.williumWatson}>5.0</div>
                  <div className={styles.icons}>
                    <img
                      className={styles.icon}
                      alt=""
                      src={imageDimensionsText}
                    />
                    <img
                      className={styles.icon}
                      alt=""
                      src={imageDimensionsText2}
                    />
                    <img
                      className={styles.icon}
                      alt=""
                      src={imageDimensionsText3}
                    />
                    <img
                      className={styles.icon}
                      alt=""
                      src={imageDimensionsText4}
                    />
                    <img
                      className={styles.icon}
                      alt=""
                      src={imageDimensionsText5}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.certainlyGunsN}>
                Certainly! Guns N' Roses is a legendary rock band known for
                their energetic performances and iconic songs. However, as an AI
                text-based model, I don't have the ability to listen to the
                music directly.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent1}>
            <div className={styles.frameContainer}>
              <div className={styles.williumWatsonParent}>
                <div className={styles.williumWatson}>Ema Watson</div>
                <div className={styles.unitedKingdom}>Canada</div>
              </div>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src={imageDimensionsText6}
              />
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.daysAgoParent}>
                <div className={styles.daysAgo}>16days ago</div>
                <div className={styles.stars}>
                  <div className={styles.williumWatson}>5.0</div>
                  <div className={styles.icons}>
                    <img
                      className={styles.icon}
                      alt=""
                      src={imageDimensionsText7}
                    />
                    <img
                      className={styles.icon}
                      alt=""
                      src={imageDimensionsText8}
                    />
                    <img
                      className={styles.icon}
                      alt=""
                      src={imageDimensionsText9}
                    />
                    <img
                      className={styles.icon}
                      alt=""
                      src={imageDimensionsText10}
                    />
                    <img
                      className={styles.icon}
                      alt=""
                      src={imageDimensionsText11}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.certainlyGunsN}>
                Certainly! Guns N' Roses is a legendary rock band known for
                their energetic performances and iconic songs. However, as an AI
                text-based model, I don't have the ability to listen to the
                music directly.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper2}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.emaWatsonGroup}>
                <div className={styles.clientsReviewsAbout}>Ema Watson</div>
                <div className={styles.canada1}>Canada</div>
              </div>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src={imageDimensionsText12}
              />
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.daysAgoParent}>
                <div className={styles.daysAgo}>16days ago</div>
                <div className={styles.stars}>
                  <div className={styles.williumWatson}>5.0</div>
                  <div className={styles.icons}>
                    <img
                      className={styles.icon}
                      alt=""
                      src={imageDimensionsText13}
                    />
                    <img
                      className={styles.icon}
                      alt=""
                      src={imageDimensionsText14}
                    />
                    <img
                      className={styles.icon}
                      alt=""
                      src={imageDimensionsText15}
                    />
                    <img
                      className={styles.icon}
                      alt=""
                      src={imageDimensionsText16}
                    />
                    <img
                      className={styles.icon}
                      alt=""
                      src={imageDimensionsText17}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.certainlyGunsN}>
                Certainly! Guns N' Roses is a legendary rock band known for
                their energetic performances and iconic songs. However, as an AI
                text-based model, I don't have the ability to listen to the
                music directly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
