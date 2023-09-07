import LIST from "./l-i-s-t";
import styles from "./search-icons.module.css";
const SearchIcons = ({
  ellipse1,
  outlineNotificationsBell,
  line1,
  outlineMessagesConversati,
  line2,
  outlineLikeHeart,
  outlineSearchMagnifer,
  outlineArrowsAltArrowDown,
  outlineArrowsAltArrowD,
  lEFTICON2,
  lEFT,
}) => {
  return (
    <div className={styles.searchIcons}>
      <div className={styles.searchIconsInner}>
        <div className={styles.ellipseWrapper}>
          <img className={styles.frameChild} alt="" src={ellipse1} />
        </div>
      </div>
      <div className={styles.icon}>
        <div className={styles.outlineNotificationsBellParent}>
          <img
            className={styles.outlineNotificationsBell}
            alt=""
            src={outlineNotificationsBell}
          />
          <div className={styles.frameItem} />
        </div>
        <img className={styles.iconChild} alt="" src={line1} />
        <img
          className={styles.outlineMessagesConversati}
          alt=""
          src={outlineMessagesConversati}
        />
        <img className={styles.iconChild} alt="" src={line2} />
        <img
          className={styles.outlineLikeHeart}
          alt=""
          src={outlineLikeHeart}
        />
      </div>
      <LIST
        iconImageUrl="/outline--search--magnifer1.svg"
        pLACEHOLDER="Search"
        customIconId="/outline--arrows--alt-arrow-down1.svg"
        lEFTICON2
        lEFT={false}
        lISTBorder="unset"
        lISTPadding="var(--padding-xs) var(--padding-base)"
        lISTJustifyContent="flex-start"
        lISTFlex="1"
        lISTBackgroundColor="#161617"
        lISTMinWidth="200px"
        lISTWidth="unset"
        technologyCodingLineHeight="152%"
        technologyCodingColor="#464957"
        technologyCodingDisplay="inline-block"
        technologyCodingBorder="none"
        technologyCodingBackgroundColor="transparent"
        technologyCodingFlex="1"
      />
    </div>
  );
};

export default SearchIcons;
