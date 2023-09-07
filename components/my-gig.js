import styles from "./my-gig.module.css";
const MyGig = ({ imageDimensions }) => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.podcast1Wrapper}>
        <img className={styles.podcast1Icon} alt="" src={imageDimensions} />
      </div>
      <div className={styles.webDesignlandingPage}>
        Web design/Landing page. Fitter life from Vitalix Fitness
      </div>
    </div>
  );
};

export default MyGig;
