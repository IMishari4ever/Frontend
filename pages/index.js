import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchIcons from "../components/search-icons";
import FreelancersCard1 from "../components/freelancers-card1";
import ContainerCard from "../components/container-card";
import ContainerFooter from "../components/container-footer";
import styles from "./index.module.css";
import RightHeader from "../components/right-header";


const Index1 = () => {
  const [gigs, setGigs] = useState([]);
  console.log("gifgs" , gigs)
  useEffect(() => {
    fetch('http://134.255.234.247:8800/api/gigs')
    .then(response => response.json())
    .then(res => {setGigs(res)
    })
  }, [gigs])

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
              
               {gigs
                .sort((a, b) => (b.pinned || 0) - (a.pinned || 0))
                .map((cardData) => {
                  console.log("id" , cardData.id , "pinnned" , cardData.pinned )
                  return (
                  <ContainerCard
                    key={cardData.id}
                    animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife1@2x.png"
                    prop="/9793425631537356145-12.svg"
                    maskGroup="/mask-group14@2x.png"
                    prop1="/169881781558095014-12.svg"
                    price={cardData?.price}
                    title={cardData?.title}
                   // pinned={cardData?.pinned}
                    onFrameContainer54Click={onFrameContainer10Click}
                  />
                )})}

              {/* <ContainerCard
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
              /> */}
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
      <RightHeader />
    </div>
  );
};

export default Index1;
