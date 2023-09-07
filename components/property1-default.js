import { useMemo } from "react";
import styles from "./property1-default.module.css";
const Property1Default = ({
  boldSettingsFineTuningWid,
  text = "Category",
  property1DefaultBackgroundColor,
  property1DefaultBackground,
  property1DefaultCursor,
  ellipseDivBackground,
  onFrameLink4Click,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      backgroundColor: property1DefaultBackgroundColor,
      background: property1DefaultBackground,
      cursor: property1DefaultCursor,
    };
  }, [
    property1DefaultBackgroundColor,
    property1DefaultBackground,
    property1DefaultCursor,
  ]);

  const ellipseDivStyle = useMemo(() => {
    return {
      background: ellipseDivBackground,
    };
  }, [ellipseDivBackground]);

  return (
    <a
      className={styles.property1default}
      style={property1DefaultStyle}
      onClick={onFrameLink4Click}
    >
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} style={ellipseDivStyle} />
        <img
          className={styles.boldSettingsFineTuning}
          alt=""
          src={boldSettingsFineTuningWid}
        />
      </div>
      <div className={styles.category}>{text}</div>
    </a>
  );
};

export default Property1Default;
