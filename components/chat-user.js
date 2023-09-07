import styles from "./chat-user.module.css";
const ChatUser = () => {
  return (
    <div className={styles.ellipseParent}>
      <img className={styles.componentChild} alt="" src="/ellipse-3@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.moulud1997Parent}>
          <div className={styles.moulud1997}>moulud1997</div>
          <div className={styles.m}>3m</div>
        </div>
        <div className={styles.iWillCreate}>I will create ac...</div>
      </div>
    </div>
  );
};

export default ChatUser;
