import { useCallback } from "react";
import { useRouter } from "next/router";
import SearchIcons from "../components/search-icons";
import RightHeader from "../components/right-header";
import styles from "./gigboost.module.css";
const Gigboost = () => {
  const router = useRouter();

  const onFrameLink4Click = useCallback(() => {
    router.push("/gigboost");
  }, [router]);

  const onFrameButtonClick = useCallback(() => {
    router.push("/chat");
  }, [router]);

  return (
    <div className={styles.gigboost}>
      <img className={styles.vGIcon} alt="" src="/vg.svg" />
      <img className={styles.gigboostChild} alt="" src="/group-391.svg" />
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
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameContainer}>
                <div className={styles.selectYourBudgetParent}>
                  <div className={styles.selectYourBudget}>
                    Select Your Budget
                  </div>
                  <div className={styles.youllGetTheContainer}>
                    <span
                      className={styles.youllGetThe}
                    >{`You’ll get the best ad results with a daily budger of at least `}</span>
                    <span className={styles.usd5}>USD $5.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.chooseYourGigParent}>
                <div className={styles.boostYourGigParent}>
                  <div className={styles.boostYourGig}>Boost Your Gig</div>
                  <div className={styles.frameParent3}>
                    <div className={styles.chooseYourGigParent}>
                      <div className={styles.boostYourGig}>Choose Your Gig</div>
                      <input
                        className={styles.frameChild}
                        type="text"
                        placeholder="Website design"
                      />
                    </div>
                    <div className={styles.chooseYourGigParent}>
                      <div className={styles.boostYourGig}>
                        Number of Days for Boost
                      </div>
                      <input
                        className={styles.frameItem}
                        type="number"
                        placeholder="00"
                        step={1}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.theMinimumCost}>
                  The Minimum Cost is $5.00 for 3 Days
                </div>
              </div>
              <button className={styles.boostGigWrapper}>
                <div className={styles.boostGig}>Boost Gig</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <RightHeader
        group46="/group-46.svg"
        vector10="/vector-10.svg"
        frameACursor="unset"
        boldEssentionalUIHome2="/bold--essentional-ui--home-23.svg"
        boldSettingsFineTuningWid="/bold--settings-fine-tuning--widget-241.svg"
        boldUsersUserRounded="/bold--users--user-rounded3.svg"
        boldDuotoneMoneyWallet="/bold-duotone--money--wallet3.svg"
        onFrameLink5Click={onFrameLink4Click}
        boldSettingsFineTuningSet="/bold--settings-fine-tuning--settings2.svg"
        vector="/vector.svg"
        maskGroup={`https://d1xzdqg8s8ggsr.cloudfront.net/64f992e4aa40a9b30a2520d5/27a499bf-7990-4e1b-845f-dee0f05f0fd4_1694079393365975546?Expires=-62135596800&Signature=eC1fyp5Nw9CCjm5TtUF7f6PEIbyVsZ73pS0K~iLpiraY7SIUQsej6bB07qR5eMx8by4aWCIdbXuHCf6ELKRsYwGS7Fq-Gd7yx0ZcJKPFQhBUjHqc6IVSompvxSspHM7zGc~TJI2jwwD4n9jyLhznN-MqPNdLyxxgcemK8rRYkbJwBEQOshXDs4apta1HyWVyjhB1FSVdtRyb6T5GflN9fLhOqPEDRoFZDVuej-7b0GnzovT7E8ZyAatQ-2sFXoGdnLFaJ6aUUjL6l4OIRpjs5tr-uVcHGQ1geFXAFx0TFMHA-6FFhXOr~ooo1ei98TIx59hN4xgBf5xMrI4RUCmQlA__&Key-Pair-Id=K1P54FZWCHCL6J`}
      />
    </div>
  );
};

export default Gigboost;
