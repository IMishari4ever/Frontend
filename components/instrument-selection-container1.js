import { useMemo } from "react";
import styles from "./instrument-selection-container1.module.css";
const InstrumentSelectionContainer1 = ({ questionText, propBorderRadius }) => {
  const frameDiv4Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className={styles.frameParent} style={frameDiv4Style}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <img className={styles.caretdownIcon} alt="" src="/caretdown1.svg" />
      </div>
      <div className={styles.whatKindOfContainer}>
        <ul className={styles.whatKindOf}>{questionText}</ul>
      </div>
    </div>
  );
};

export default InstrumentSelectionContainer1;
