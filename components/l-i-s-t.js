import { useMemo } from "react";
import styles from "./l-i-s-t.module.css";
const LIST = ({
  iconImageUrl,
  pLACEHOLDER = "Technology & Coding",
  customIconId,
  lEFTICON2 = true,
  lEFT = true,
  lISTBorder,
  lISTPadding,
  lISTJustifyContent,
  lISTFlex,
  lISTBackgroundColor,
  lISTMinWidth,
  lISTWidth,
  technologyCodingLineHeight,
  technologyCodingColor,
  technologyCodingDisplay,
  technologyCodingBorder,
  technologyCodingBackgroundColor,
  technologyCodingFlex,
}) => {
  const lISTStyle = useMemo(() => {
    return {
      border: lISTBorder,
      padding: lISTPadding,
      justifyContent: lISTJustifyContent,
      flex: lISTFlex,
      backgroundColor: lISTBackgroundColor,
      minWidth: lISTMinWidth,
      width: lISTWidth,
    };
  }, [
    lISTBorder,
    lISTPadding,
    lISTJustifyContent,
    lISTFlex,
    lISTBackgroundColor,
    lISTMinWidth,
    lISTWidth,
  ]);

  const technologyCodingStyle = useMemo(() => {
    return {
      lineHeight: technologyCodingLineHeight,
      color: technologyCodingColor,
      display: technologyCodingDisplay,
      border: technologyCodingBorder,
      backgroundColor: technologyCodingBackgroundColor,
      flex: technologyCodingFlex,
    };
  }, [
    technologyCodingLineHeight,
    technologyCodingColor,
    technologyCodingDisplay,
    technologyCodingBorder,
    technologyCodingBackgroundColor,
    technologyCodingFlex,
  ]);

  return (
    <div className={styles.list} style={lISTStyle}>
      {lEFTICON2 && (
        <img
          className={styles.outlineSearchMagnifer}
          alt=""
          src={iconImageUrl}
        />
      )}
      <div className={styles.technologyCoding} style={technologyCodingStyle}>
        {pLACEHOLDER}
      </div>
      {lEFT && (
        <img
          className={styles.outlineSearchMagnifer}
          alt=""
          src={customIconId}
        />
      )}
    </div>
  );
};

export default LIST;
