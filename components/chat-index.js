import { useMemo } from "react";
import styles from "./chat-index.module.css";
const ChatIndex = ({
  chatName,
  onFrameButton10Click,
  frameButtonZIndex,
  maskGroup,
  frameButtonBoxSizing,
  nadiaAlie09Display,
}) => {
  const frameButton4Style = useMemo(() => {
    return {
      zIndex: frameButtonZIndex,
      boxSizing: frameButtonBoxSizing,
    };
  }, [frameButtonZIndex, frameButtonBoxSizing]);

  const nadiaAlie094Style = useMemo(() => {
    return {
      display: nadiaAlie09Display,
    };
  }, [nadiaAlie09Display]);

  return (
    <button
      className={styles.nadiaAlie09Parent}
      onClick={onFrameButton10Click}
      style={frameButton4Style}
    >
      <div className={styles.nadiaAlie09} style={nadiaAlie094Style}>
        {chatName}
      </div>
      <div className={styles.maskGroupParent}>
        <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
        <div className={styles.frameChild} />
      </div>
    </button>
  );
};

export default ChatIndex;
