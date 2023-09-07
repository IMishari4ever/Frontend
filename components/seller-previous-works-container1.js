import styles from "./seller-previous-works-container1.module.css";
const SellerPreviousWorksContainer1 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.sellerPreviousWorksWrapper}>
        <div className={styles.sellerPreviousWorks}>Seller Previous Works</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.midiKeyboardHeadphonesLaptoParent}>
          <img
            className={styles.midiKeyboardHeadphonesLaptoIcon}
            alt=""
            src="/midikeyboardheadphoneslaptopwithprogramcreatingmusic@2x.png"
          />
          <div className={styles.expertInData}>
            Expert in Data Entry | Lead Generation | WordPress | Shopify | Wix
          </div>
        </div>
        <div className={styles.midiKeyboardHeadphonesLaptoParent}>
          <img
            className={styles.manWearingStripedShirtUsesIcon}
            alt=""
            src="/manwearingstripedshirtuseslaptopwork1@2x.png"
          />
          <div className={styles.expertInData}>
            Expert in Data Entry | Lead Generation | WordPress | Shopify | Wix
          </div>
        </div>
        <div className={styles.midiKeyboardHeadphonesLaptoParent}>
          <img
            className={styles.midiKeyboardHeadphonesLaptoIcon}
            alt=""
            src="/happyasianwomansongwriterplayingacousticguitarlistensongfromsmartphone@2x.png"
          />
          <div className={styles.expertInData}>
            Expert in Data Entry | Lead Generation | WordPress | Shopify | Wix
          </div>
        </div>
      </div>
      <button className={styles.viewAllWorksWrapper}>
        <div className={styles.viewAllWorks}>View All Works</div>
      </button>
    </div>
  );
};

export default SellerPreviousWorksContainer1;
