import styles from "./container-footer.module.css";
const ContainerFooter = ({
  dimensionCode,
  imageDimensionCode,
  imageCode,
  dimensionCodeImageUrl,
  imageDimensionCodeText,
  dimensionCodeImageUrlText,
}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinks}>
        <div className={styles.categoriesParent}>
          <div className={styles.categories}>Categories</div>
          <div className={styles.technologyCodingParent}>
            <div
              className={styles.technologyCoding}
            >{`Technology & Coding`}</div>
            <div className={styles.technologyCoding}>Graphics Design</div>
            <div className={styles.technologyCoding}>Digital Marketing</div>
            <div
              className={styles.technologyCoding}
            >{`Writing & translation`}</div>
            <div className={styles.technologyCoding}>{`Video & Photo`}</div>
            <div className={styles.technologyCoding}>{`Music & Audio`}</div>
            <div className={styles.technologyCoding}>Ai services</div>
            <div className={styles.technologyCoding}>Business</div>
          </div>
        </div>
        <div className={styles.aboutUsParent}>
          <div className={styles.categories}>About Us</div>
          <div className={styles.careerParent}>
            <div className={styles.technologyCoding}>Career</div>
            <div className={styles.technologyCoding}>About Buyer</div>
            <div className={styles.technologyCoding}>About Seller</div>
            <div className={styles.technologyCoding}>Partnership</div>
            <div className={styles.technologyCoding}>Privacy Policy</div>
            <div
              className={styles.technologyCoding}
            >{`Terms & Conditions`}</div>
          </div>
        </div>
        <div className={styles.aboutUsParent}>
          <div className={styles.categories}>From Marketplace</div>
          <div className={styles.careerParent}>
            <div className={styles.technologyCoding}>Our Courses</div>
            <div className={styles.technologyCoding}>Course Mentors</div>
            <div
              className={styles.technologyCoding}
            >{`About Level & Batch`}</div>
            <div className={styles.technologyCoding}>Pro Seller</div>
            <div className={styles.technologyCoding}>Selection</div>
            <div className={styles.technologyCoding}>Our Workspce</div>
          </div>
        </div>
        <div className={styles.aboutUsParent}>
          <div className={styles.categories}>Others</div>
          <div className={styles.careerParent}>
            <div className={styles.technologyCoding}>Billing Information</div>
            <div className={styles.technologyCoding}>Checkout Conditons</div>
            <div className={styles.technologyCoding}>Terms of Payments</div>
            <div className={styles.technologyCoding}>Moneyback Conditons</div>
            <div className={styles.technologyCoding}>Community</div>
            <div className={styles.technologyCoding}>Our Blog</div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightLinks}>
        <div className={styles.copyrightLinksChild} />
        <div className={styles.frameParent}>
          <div className={styles.sitelogoParent}>
            <div className={styles.sitelogo}>SiteLogo</div>
            <div className={styles.copyrightIcon1Parent}>
              <img
                className={styles.copyrightIcon1}
                alt=""
                src={dimensionCode}
              />
              <div className={styles.marketplace2023All}>
                Marketplace 2023. All Rights Reserved
              </div>
            </div>
          </div>
          <div className={styles.socialLinksParent}>
            <div className={styles.marketplace2023All}>Social Links</div>
            <div className={styles.socialIcons}>
              <img
                className={styles.instagramLinkIcon}
                alt=""
                src={imageDimensionCode}
              />
              <img className={styles.facbookLinkIcon} alt="" src={imageCode} />
              <img
                className={styles.facbookLinkIcon}
                alt=""
                src={dimensionCodeImageUrl}
              />
              <img
                className={styles.facbookLinkIcon}
                alt=""
                src={imageDimensionCodeText}
              />
              <img
                className={styles.facbookLinkIcon}
                alt=""
                src={dimensionCodeImageUrlText}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerFooter;
