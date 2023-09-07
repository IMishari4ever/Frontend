import { useMemo } from "react";
import styles from "./c-t-a.module.css";
const CTA = ({
  dimensionCode,
  button = "Create a Gig",
  placeholder = true,
  right = true,
  cTABackground,
  cTAPadding,
  cTAWidth,
}) => {
  const cTAStyle = useMemo(() => {
    return {
      background: cTABackground,
      padding: cTAPadding,
      width: cTAWidth,
    };
  }, [cTABackground, cTAPadding, cTAWidth]);

  return (
    <div className={styles.cta} style={cTAStyle}>
      <div className={styles.outlineMessagesConversatiParent}>
        {right && (
          <img
            className={styles.outlineMessagesConversati}
            alt=""
            src={dimensionCode}
          />
        )}
        {placeholder && <div className={styles.createAGig}>{button}</div>}
      </div>
    </div>
  );
};

export default CTA;
