import { useMemo } from "react";
import styles from "./amount-form.module.css";
const AmountForm = ({ inputLabel, amountInputLabel, propBorder }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div className={styles.enterAmountParent}>
      <div className={styles.enterAmount}>{inputLabel}</div>
      <div className={styles.frameWrapper} style={frameDiv1Style}>
        <div className={styles.wrapper}>
          <div className={styles.div}>{amountInputLabel}</div>
        </div>
      </div>
    </div>
  );
};

export default AmountForm;
