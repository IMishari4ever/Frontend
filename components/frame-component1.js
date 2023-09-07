import { useMemo } from "react";
import Property1Default from "./property1-default";
import styles from "./frame-component1.module.css";
const FrameComponent = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsId,
  imageId,
  imageDimensionsTextId,
  profilePictureUrl,
  frameDivFlex,
  frameDivMinWidth,
  frameDivMaxWidth,
  frameACursor,
  frameACursor1,
  frameButtonBoxSizing,
  nadiaAlie09Display,
  frameButtonBoxSizing1,
  nadiaAlie09Display1,
  frameButtonBoxSizing2,
  nadiaAlie09Display2,
  frameButtonBoxSizing3,
  nadiaAlie09Display3,
  onFrameLinkClick,
  onFrameLink4Click,
  onFrameButton8Click,
  onFrameButton9Click,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: frameDivFlex,
      minWidth: frameDivMinWidth,
      maxWidth: frameDivMaxWidth,
    };
  }, [frameDivFlex, frameDivMinWidth, frameDivMaxWidth]);

  const property1DefaultStyle = useMemo(() => {
    return {
      cursor: frameACursor,
    };
  }, [frameACursor]);

  const property1DefaultStyle1 = useMemo(() => {
    return {
      cursor: frameACursor1,
    };
  }, [frameACursor1]);

  const frameButtonStyle = useMemo(() => {
    return {
      boxSizing: frameButtonBoxSizing,
    };
  }, [frameButtonBoxSizing]);

  const nadiaAlie09Style = useMemo(() => {
    return {
      display: nadiaAlie09Display,
    };
  }, [nadiaAlie09Display]);

  const frameButton1Style = useMemo(() => {
    return {
      boxSizing: frameButtonBoxSizing1,
    };
  }, [frameButtonBoxSizing1]);

  const nadiaAlie091Style = useMemo(() => {
    return {
      display: nadiaAlie09Display1,
    };
  }, [nadiaAlie09Display1]);

  const frameButton2Style = useMemo(() => {
    return {
      boxSizing: frameButtonBoxSizing2,
    };
  }, [frameButtonBoxSizing2]);

  const nadiaAlie092Style = useMemo(() => {
    return {
      display: nadiaAlie09Display2,
    };
  }, [nadiaAlie09Display2]);

  const frameButton3Style = useMemo(() => {
    return {
      boxSizing: frameButtonBoxSizing3,
    };
  }, [frameButtonBoxSizing3]);

  const nadiaAlie093Style = useMemo(() => {
    return {
      display: nadiaAlie09Display3,
    };
  }, [nadiaAlie09Display3]);

  return (
    <div className={styles.logoParent} style={frameDivStyle}>
      <div className={styles.logo}>
        <div className={styles.logoHere}>LOGO HERE</div>
      </div>
      <div className={styles.navbar}>
        <img className={styles.navbarChild} alt="" src="/group-46.svg" />
        <img className={styles.navbarItem} alt="" src="/vector-10.svg" />
        <div className={styles.navbarInner}>
          <div className={styles.instanceParent}>
            <Property1Default
              boldSettingsFineTuningWid="/bold--essentional-ui--home-21.svg"
              text="Home"
              property1DefaultBackgroundColor="unset"
              property1DefaultBackground="linear-gradient(180deg, rgba(46, 63, 218, 0.36), rgba(205, 20, 235, 0.36))"
              property1DefaultCursor="unset"
              ellipseDivBackground="linear-gradient(129.33deg, rgba(160, 170, 255, 0.3), rgba(220, 9, 255, 0.3))"
            />
            <Property1Default
              boldSettingsFineTuningWid="/bold--settings-fine-tuning--widget-22.svg"
              text="Category"
              property1DefaultBackgroundColor="#242427"
              property1DefaultBackground="unset"
              property1DefaultCursor="unset"
              ellipseDivBackground="linear-gradient(129.33deg, rgba(46, 63, 218, 0.3), rgba(110, 24, 124, 0.3))"
            />
            <Property1Default
              boldSettingsFineTuningWid="/bold--users--user-rounded1.svg"
              text="Profile"
              property1DefaultBackgroundColor="#242427"
              property1DefaultBackground="unset"
              property1DefaultCursor="unset"
              ellipseDivBackground="linear-gradient(129.33deg, rgba(46, 63, 218, 0.3), rgba(110, 24, 124, 0.3))"
            />
            <Property1Default
              boldSettingsFineTuningWid="/bold-duotone--money--wallet1.svg"
              text="Checkout"
              property1DefaultBackgroundColor="#242427"
              property1DefaultBackground="unset"
              property1DefaultCursor="unset"
              ellipseDivBackground="linear-gradient(129.33deg, rgba(46, 63, 218, 0.3), rgba(110, 24, 124, 0.3))"
            />
            <Property1Default
              boldSettingsFineTuningWid="/bold--settings-fine-tuning--settings1.svg"
              text="Settings"
              property1DefaultBackgroundColor="#242427"
              property1DefaultBackground="unset"
              property1DefaultCursor="unset"
              ellipseDivBackground="linear-gradient(129.33deg, rgba(46, 63, 218, 0.3), rgba(110, 24, 124, 0.3))"
            />
            <Property1Default
              boldSettingsFineTuningWid="/vector.svg"
              text="Support"
              property1DefaultBackgroundColor="#242427"
              property1DefaultBackground="unset"
              property1DefaultCursor="unset"
              ellipseDivBackground="linear-gradient(129.33deg, rgba(46, 63, 218, 0.3), rgba(110, 24, 124, 0.3))"
            />
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.activePeopleWrapper}>
            <div className={styles.activePeople}>Active People</div>
          </div>
          <button
            className={styles.nadiaAlie09Parent}
            style={frameButtonStyle}
            onClick={onFrameButton8Click}
          >
            <div className={styles.nadiaAlie09} style={nadiaAlie09Style}>
              {profilePictureUrl}
            </div>
            <div className={styles.maskGroupParent}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group@2x.png"
              />
              <div className={styles.frameItem} />
            </div>
          </button>
          <button
            className={styles.nadiaAlie09Group}
            style={frameButton1Style}
            onClick={onFrameButton9Click}
          >
            <div className={styles.nadiaAlie09} style={nadiaAlie091Style}>
              Jack Smith_45
            </div>
            <div className={styles.maskGroupParent}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group@2x.png"
              />
              <div className={styles.frameItem} />
            </div>
          </button>
          <button
            className={styles.nadiaAlie09Container}
            style={frameButton2Style}
          >
            <div className={styles.nadiaAlie09} style={nadiaAlie092Style}>
              Ema Watson_56
            </div>
            <div className={styles.maskGroupParent}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group@2x.png"
              />
              <div className={styles.frameItem} />
            </div>
          </button>
          <button className={styles.frameButton} style={frameButton3Style}>
            <div className={styles.nadiaAlie09} style={nadiaAlie093Style}>
              Williumson_89
            </div>
            <div className={styles.maskGroupParent}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group@2x.png"
              />
              <div className={styles.frameItem} />
            </div>
          </button>
          <div className={styles.frameChild2} />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
