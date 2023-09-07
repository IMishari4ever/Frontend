import { useCallback } from "react";
import { useRouter } from "next/router";
import SearchIcons from "../components/search-icons";
import FreelancersCard1 from "../components/freelancers-card1";
import GigIndex from "../components/container-card";
import ContainerFooter from "../components/container-footer";
import styles from "./index.module.css";
const Index1 = () => {
  const router = useRouter();

  const onFrameContainer10Click = useCallback(() => {
    router.push("/gig");
  }, [router]);

  const onFrameLink4Click = useCallback(() => {
    router.push("/gigboost");
  }, [router]);

  const onFrameButtonClick = useCallback(() => {
    router.push("/chat");
  }, [router]);

  return (
    <div className={styles.index1}>
      <img className={styles.indexChild} alt="" src="/group-394.svg" />
      <img className={styles.vGIcon} alt="" src="/vg.svg" />
      <div className={styles.headerParent}>
        <div className={styles.header}>
          <SearchIcons
            ellipse1="/ellipse-1@2x.png"
            outlineNotificationsBell="/outline--notifications--bell1.svg"
            line1="/line-1.svg"
            outlineMessagesConversati="/outline--messages-conversation----letter2.svg"
            line2="/line-1.svg"
            outlineLikeHeart="/outline--like--heart.svg"
            outlineSearchMagnifer="/outline--search--magnifer1.svg"
            outlineArrowsAltArrowDown="/outline--arrows--alt-arrow-down1.svg"
            outlineArrowsAltArrowD={false}
            lEFTICON2
            lEFT={false}
          />
          <div className={styles.frameParent}>
            <button className={styles.technologyGamingWrapper}>
              <div
                className={styles.technologyGaming}
              >{`Technology & Gaming`}</div>
            </button>
            <button className={styles.graphicsDesignWrapper}>
              <div className={styles.technologyGaming}>Graphics Design</div>
            </button>
            <button className={styles.graphicsDesignWrapper}>
              <div className={styles.technologyGaming}>Digital Marketing</div>
            </button>
            <button className={styles.graphicsDesignWrapper}>
              <div
                className={styles.technologyGaming}
              >{`Writing & Translation`}</div>
            </button>
            <button className={styles.musicAudioWrapper}>
              <div className={styles.technologyGaming}>{`Music & Audio`}</div>
            </button>
            <button className={styles.videoPhotoWrapper}>
              <div className={styles.technologyGaming}>{`Video & Photo`}</div>
            </button>
            <button className={styles.graphicsDesignWrapper}>
              <div className={styles.technologyGaming}>AI Services</div>
            </button>
            <button className={styles.graphicsDesignWrapper}>
              <div className={styles.technologyGaming}>Business</div>
            </button>
          </div>
        </div>
        <div className={styles.topBanner}>
          <div className={styles.heroTextCard}>
            <div className={styles.frameGroup}>
              <div className={styles.welcomeBackParent}>
                <div className={styles.welcomeBack}>Welcome Back !</div>
                <div
                  className={styles.createAEffective}
                >{`Create a effective Gig according to your skill & Experience. Soon you will get your first order !`}</div>
              </div>
              <button className={styles.createAGigWrapper}>
                <div className={styles.createAGig}>Create a Gig</div>
              </button>
            </div>
          </div>
          <div className={styles.businesswomanUseLaptopLadyParent}>
            <img
              className={styles.businesswomanUseLaptopLadyIcon}
              alt=""
              src="/businesswomanuselaptopladywithdifferentfaceemotionsisolatedwhitewallremovebgpreview-1@2x.png"
            />
            <div className={styles.frameContainer}>
              <div className={styles.weAlwaysBeliefInQualityParent}>
                <div
                  className={styles.weAlwaysBelief}
                >{`We always belief in Quality & Experience`}</div>
                <div className={styles.bestMarketplaceTo}>
                  Best Marketplace to buy and sell Qualitifull services
                </div>
              </div>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
                <div className={styles.frameItem} />
                <div className={styles.frameItem} />
              </div>
            </div>
          </div>
        </div>
        <FreelancersCard1 />
        <div className={styles.gigSection}>
          <div className={styles.browseServicesAsYourNeedParent}>
            <div className={styles.browseServicesAs}>
              Browse Services As your Need
            </div>
            <div className={styles.componentParent}>
              <ContainerCard
                animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife1@2x.png"
                prop="/9793425631537356145-12.svg"
                maskGroup="/mask-group14@2x.png"
                prop1="/169881781558095014-12.svg"
                price="$350"
                title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
                onFrameContainer54Click={onFrameContainer10Click}
              />
              <ContainerCard
                animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife1@2x.png"
                prop="/9793425631537356145-12.svg"
                maskGroup="/mask-group14@2x.png"
                prop1="/169881781558095014-12.svg"
                price="$350"
                title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
                onFrameContainer54Click={onFrameContainer10Click}
              />
              <ContainerCard
                animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife1@2x.png"
                prop="/9793425631537356145-12.svg"
                maskGroup="/mask-group14@2x.png"
                prop1="/169881781558095014-12.svg"
                price="$350"
                title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
                onFrameContainer54Click={onFrameContainer10Click}
              />
              <ContainerCard
                animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife1@2x.png"
                prop="/9793425631537356145-12.svg"
                maskGroup="/mask-group14@2x.png"
                prop1="/169881781558095014-12.svg"
                price="$350"
                title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
                onFrameContainer54Click={onFrameContainer10Click}
              />
              <ContainerCard
                animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife1@2x.png"
                prop="/9793425631537356145-12.svg"
                maskGroup="/mask-group14@2x.png"
                prop1="/169881781558095014-12.svg"
                price="$350"
                title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
                onFrameContainer54Click={onFrameContainer10Click}
              />
              <ContainerCard
                animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife1@2x.png"
                prop="/9793425631537356145-12.svg"
                maskGroup="/mask-group14@2x.png"
                prop1="/169881781558095014-12.svg"
                price="$350"
                title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
                onFrameContainer54Click={onFrameContainer10Click}
              />
              <ContainerCard
                animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife1@2x.png"
                prop="/9793425631537356145-12.svg"
                maskGroup="/mask-group14@2x.png"
                prop1="/169881781558095014-12.svg"
                price="$350"
                title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
                onFrameContainer54Click={onFrameContainer10Click}
              />
              <ContainerCard
                animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife1@2x.png"
                prop="/9793425631537356145-12.svg"
                maskGroup="/mask-group14@2x.png"
                prop1="/169881781558095014-12.svg"
                price="$350"
                title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
                onFrameContainer54Click={onFrameContainer10Click}
              />
              <ContainerCard
                animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife1@2x.png"
                prop="/9793425631537356145-12.svg"
                maskGroup="/mask-group14@2x.png"
                prop1="/169881781558095014-12.svg"
                price="$350"
                title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
                onFrameContainer54Click={onFrameContainer10Click}
              />
              <ContainerCard
                animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife2@2x.png"
                prop="/9793425631537356145-13.svg"
                maskGroup="/mask-group15@2x.png"
                prop1="/169881781558095014-13.svg"
                price="$350"
                title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
                onFrameContainer54Click={onFrameContainer10Click}
              />
              <ContainerCard
                animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife2@2x.png"
                prop="/9793425631537356145-13.svg"
                maskGroup="/mask-group15@2x.png"
                prop1="/169881781558095014-13.svg"
                price="$350"
                title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
                onFrameContainer54Click={onFrameContainer10Click}
              />
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.caretleftWrapper}>
              <img
                className={styles.caretleftIcon}
                alt=""
                src="/caretleft2.svg"
              />
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div}>2</div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div}>....</div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div}>120</div>
            </div>
            <div className={styles.caretrightWrapper}>
              <img
                className={styles.caretleftIcon}
                alt=""
                src="/caretright3.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.courseBanner}>
          <div className={styles.courseBannerContent}>
            <div className={styles.cheerfulSmartGirlStudentSiParent}>
              <img
                className={styles.cheerfulSmartGirlStudentSiIcon}
                alt=""
                src="/cheerfulsmartgirlstudentsittingfloorwithlaptopremovebgpreview-1@2x.png"
              />
              <div className={styles.frameChild1} />
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.browseServicesAsYourNeedParent}>
                <div className={styles.weAlwaysBeliefInQualityParent}>
                  <div className={styles.weAlwaysBelief}>
                    Learn Web Design Course from Our Experts
                  </div>
                  <div className={styles.getMoreSkills}>
                    Get more skills and earn more from marketplace. It’s Free
                    for you
                  </div>
                </div>
                <button className={styles.learnMoreWrapper}>
                  <div className={styles.learnMore}>Learn More</div>
                </button>
              </div>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
                <div className={styles.frameItem} />
                <div className={styles.frameItem} />
              </div>
            </div>
          </div>
          <div className={styles.courseBannerChild} />
        </div>
        <ContainerFooter
          dimensionCode="/9112598-copyright-icon-11.svg"
          imageDimensionCode="/instagram-link1.svg"
          imageCode="/facbook-link1.svg"
          dimensionCodeImageUrl="/twitter-link1.svg"
          imageDimensionCodeText="/linkedin-link1.svg"
          dimensionCodeImageUrlText="/youtube-link1.svg"
        />
      </div>
      <div className={styles.containerWrapper}>
        <div className={styles.container1}>
          <div className={styles.logo}>
            <div className={styles.logoHere}>LOGO HERE</div>
          </div>
          <div className={styles.navbar}>
            <img className={styles.navbarChild} alt="" src="/group-46.svg" />
            <img className={styles.navbarItem} alt="" src="/vector-10.svg" />
            <div className={styles.navbarInner}>
              <div className={styles.instanceParent}>
                <a className={styles.frameA}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.frameChild6} />
                    <img
                      className={styles.boldEssentionalUiHome}
                      alt=""
                      src="/bold--essentional-ui--home-22.svg"
                    />
                  </div>
                  <div className={styles.category}>Home</div>
                </a>
                <a className={styles.frameParent3}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.frameChild7} />
                    <img
                      className={styles.boldEssentionalUiHome}
                      alt=""
                      src="/bold--settings-fine-tuning--widget-23.svg"
                    />
                  </div>
                  <div className={styles.category}>Category</div>
                </a>
                <a className={styles.frameParent3}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.frameChild7} />
                    <img
                      className={styles.boldEssentionalUiHome}
                      alt=""
                      src="/bold--users--user-rounded2.svg"
                    />
                  </div>
                  <div className={styles.category}>Profile</div>
                </a>
                <a className={styles.frameParent3}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.frameChild7} />
                    <img
                      className={styles.boldEssentionalUiHome}
                      alt=""
                      src="/bold-duotone--money--wallet2.svg"
                    />
                  </div>
                  <div className={styles.category}>Checkout</div>
                </a>
                <a className={styles.frameParent6} onClick={onFrameLink4Click}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.frameChild7} />
                    <img
                      className={styles.boldEssentionalUiHome}
                      alt=""
                      src="/bold--settings-fine-tuning--settings2.svg"
                    />
                  </div>
                  <div className={styles.category}>Settings</div>
                </a>
                <a className={styles.frameParent3}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.frameChild7} />
                    <img
                      className={styles.boldEssentionalUiHome}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.category}>Support</div>
                </a>
              </div>
            </div>
            <div className={styles.navbarInner1}>
              <div className={styles.frameChild12} />
            </div>
            <div className={styles.frameParent8}>
              <div className={styles.activePeopleWrapper}>
                <div className={styles.activePeople}>Active People</div>
              </div>
              <button
                className={styles.nadiaAlie09Parent}
                onClick={onFrameButtonClick}
              >
                <div className={styles.nadiaAlie09}>Nadia Alie</div>
                <div className={styles.maskGroupParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className={styles.frameChild13} />
                </div>
              </button>
              <button
                className={styles.nadiaAlie09Group}
                onClick={onFrameButtonClick}
              >
                <div className={styles.nadiaAlie09}>Jack Smith_45</div>
                <div className={styles.maskGroupParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className={styles.frameChild13} />
                </div>
              </button>
              <button className={styles.nadiaAlie09Container}>
                <div className={styles.nadiaAlie09}>Ema Watson_56</div>
                <div className={styles.maskGroupParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className={styles.frameChild13} />
                </div>
              </button>
              <button className={styles.frameButton}>
                <div className={styles.nadiaAlie09}>Williumson_89</div>
                <div className={styles.maskGroupParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className={styles.frameChild13} />
                </div>
              </button>
              <div className={styles.frameChild17} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index1;
