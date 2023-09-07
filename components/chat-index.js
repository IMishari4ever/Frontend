import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./chat-index.module.css";
const ChatIndex = () => {
  const router = useRouter();

  const onFrameButtonClick = useCallback(() => {
    router.push("/chat");
  }, [router]);

  return (
    <button className={styles.nadiaAlie09Parent} onClick={onFrameButtonClick}>
      <div className={styles.nadiaAlie09}>Nadia Alie</div>
      <div className={styles.maskGroupParent}>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
        <div className={styles.frameChild13} />
      </div>
    </button>
  );
};

export default ChatIndex;
