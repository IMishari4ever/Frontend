import { useMemo } from "react";
import styles from "./section-card-form.module.css";
const SectionCardForm = ({
  timestampText,
  actionButtonText,
  timeAgoText,
  propAlignSelf,
  propFlex,
  propWidth,
  propFlexShrink,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const divStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const minutesAgoStyle = useMemo(() => {
    return {
      width: propWidth,
      flexShrink: propFlexShrink,
    };
  }, [propWidth, propFlexShrink]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.parent} style={frameDiv4Style}>
        <div className={styles.div} style={divStyle}>
          +$675.00
        </div>
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" src={timestampText} />
          <div className={styles.complete}>{actionButtonText}</div>
        </div>
        <div className={styles.complete} style={minutesAgoStyle}>
          {timeAgoText}
        </div>
        <div className={styles.complete}>@mynamepolishchuk</div>
        <div className={styles.groupParent}>
          <img className={styles.frameItem} alt="" src="/ellipse-73@2x.png" />
          <div className={styles.complete}>Yulia Polishchuk</div>
        </div>
      </div>
    </div>
  );
};

export default SectionCardForm;
