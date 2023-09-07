import ContainerCardFormFilter1 from "./container-card-form-filter1";
import styles from "./freelancers-card1.module.css";
const FreelancersCard1 = () => {
  return (
    <div className={styles.freelancers}>
      <div className={styles.frameParent}>
        <a className={styles.arrowcirclerightParent}>
          <img
            className={styles.arrowcirclerightIcon}
            alt=""
            src="/arrowcircleright.svg"
          />
          <div className={styles.viewAll}>View All</div>
        </a>
        <div className={styles.hireTopRated}>Hire Top Rated Freelancers</div>
      </div>
      <div className={styles.frameGroup}>
        <ContainerCardFormFilter1
          dimensionCode="/9793425631537356145-41.svg"
          imageDimensions="/9793425631537356145-41.svg"
          imageDimensionsCode="/9793425631537356145-41.svg"
          imageDimensionsCode2="/9793425631537356145-41.svg"
          imageDimensions2="/9793425631537356145-41.svg"
          imageCode="/mask-group11@2x.png"
          imageSizeCode="/mask-group12@2x.png"
          personImageUrl="Rahim Alie"
        />
        <ContainerCardFormFilter1
          dimensionCode="/9793425631537356145-42.svg"
          imageDimensions="/9793425631537356145-42.svg"
          imageDimensionsCode="/9793425631537356145-42.svg"
          imageDimensionsCode2="/9793425631537356145-42.svg"
          imageDimensions2="/9793425631537356145-42.svg"
          imageCode="/mask-group13@2x.png"
          imageSizeCode="/ellipse-11@2x.png"
          personImageUrl="Ema Watson"
          propBorderRadius="50%"
        />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <img className={styles.caretleftIcon} alt="" src="/caretleft1.svg" />
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameItem} />
          <img className={styles.caretleftIcon} alt="" src="/caretright2.svg" />
        </div>
      </div>
    </div>
  );
};

export default FreelancersCard1;
