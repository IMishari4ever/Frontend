import { useCallback } from "react";
import { useRouter } from "next/router";
import SearchIcons from "../components/search-icons";
import MyGig from "../components/my-gig";
import ContainerBox from "../components/container-box";
import ReviewCard from "../components/review-card";
import CTA from "/";
import ContainerFooter from "../components/container-footer";
import RightHeader from "../components/right-header";
import styles from "./seller2.module.css";
const Seller2 = () => {
  const router = useRouter();

  const onFrameLink4Click = useCallback(() => {
    router.push("/gigboost");
  }, [router]);

  const onFrameButton8Click = useCallback(() => {
    router.push("/chat");
  }, [router]);

  const onFrameButton9Click = useCallback(() => {
    router.push("/chat");
  }, [router]);

  return (
    <div className={styles.seller2}>
      <img className={styles.vGIcon} alt="" src="/vg1.svg" />
      <img className={styles.seller2Child} alt="" src="/group-392.svg" />
      <div className={styles.headerParent}>
        <div className={styles.header}>
          <SearchIcons
            ellipse1="/ellipse-1@2x.png"
            outlineNotificationsBell="/outline--notifications--bell3.svg"
            line1="/line-1.svg"
            outlineMessagesConversati="/outline--messages-conversation----letter4.svg"
            line2="/line-1.svg"
            outlineLikeHeart="/outline--like--heart2.svg"
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
        <div className={styles.leftParent}>
          <div className={styles.left}>
            <div className={styles.abstractEyePortraitYoungWoParent}>
              <img
                className={styles.abstractEyePortraitYoungWoIcon}
                alt=""
                src="/abstracteyeportraityoungwomenelegancegeneratedbyai@2x.png"
              />
              <div className={styles.frameWrapper}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameContainer}>
                    <div className={styles.frameDiv}>
                      <div className={styles.rahimAlieParent}>
                        <div className={styles.rahimAlie}>Rahim Alie</div>
                        <div className={styles.uiuxDesignerParent}>
                          <div className={styles.uiuxDesigner}>
                            UI/UX Designer
                          </div>
                          <div className={styles.frameChild} />
                          <div className={styles.graphicDesigner}>
                            Graphic Designer
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.freelancer12gmailcomParent}>
                          <div className={styles.freelancer12gmailcom}>
                            freelancer12@gmail.com
                          </div>
                          <img
                            className={styles.outlineMessagesConversati}
                            alt=""
                            src="/outline--messages-conversation----letter5.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent1}>
                      <div className={styles.contactWrapper}>
                        <div className={styles.freelancer12gmailcom}>
                          Contact
                        </div>
                      </div>
                      <div className={styles.followWrapper}>
                        <div className={styles.freelancer12gmailcom}>
                          Follow
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/ellipse-87@2x.png"
                  />
                </div>
              </div>
              <div className={styles.groupWrapper}>
                <div className={styles.topRatedParent}>
                  <div className={styles.topRated}>{`Top Rated `}</div>
                  <img
                    className={styles.groupChild}
                    alt=""
                    src="/group-2961.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.projectSuccessParent}>
                  <div className={styles.projectSuccess}>Project Success</div>
                  <div className={styles.div}>05</div>
                </div>
                <div className={styles.targetIcon1Wrapper}>
                  <img
                    className={styles.targetIcon1}
                    alt=""
                    src="/8666701-target-icon-1.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.totalServicesParent}>
                  <div className={styles.projectSuccess}>Total Services</div>
                  <div className={styles.div}>05</div>
                </div>
                <div className={styles.targetIcon1Wrapper}>
                  <img
                    className={styles.layer2Icon}
                    alt=""
                    src="/layer-2.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.projectSuccessParent}>
                  <div className={styles.projectSuccess}>
                    Completed Services
                  </div>
                  <div className={styles.div}>05</div>
                </div>
                <div className={styles.targetIcon1Wrapper}>
                  <img
                    className={styles.achievementChallengeCompetitIcon}
                    alt=""
                    src="/6843054-achievement-challenge-competition-success-victory-icon.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameWrapper4}>
                <div className={styles.frameParent6}>
                  <div className={styles.bangladeshParent}>
                    <div className={styles.bangladesh}>Bangladesh</div>
                    <div className={styles.from}>From</div>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                  <div className={styles.bangladeshParent}>
                    <div className={styles.bangladesh}>November 2022</div>
                    <div className={styles.from}>Member Since</div>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector3.svg"
                    />
                  </div>
                  <div className={styles.bangladeshParent}>
                    <div className={styles.bangladesh}>18 hours ago</div>
                    <div className={styles.from}>Last Delivery</div>
                    <img
                      className={styles.layer2Icon1}
                      alt=""
                      src="/layer-21.svg"
                    />
                  </div>
                  <div className={styles.bangladeshParent}>
                    <div className={styles.bangladesh}>1 hours</div>
                    <div className={styles.from}>Response Time</div>
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector4.svg"
                    />
                  </div>
                  <div className={styles.aboutParent}>
                    <div className={styles.projectSuccess}>About</div>
                    <div className={styles.loremIpsumDolorUtLaboreSiWrapper}>
                      <div
                        className={styles.loremIpsumDolor}
                      >{`Lorem ipsum dolor ut labore sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  eiusmod tempor incididuntut labore `}</div>
                    </div>
                  </div>
                  <div className={styles.ratingParent}>
                    <div className={styles.rating}>{`Rating `}</div>
                    <div className={styles.frameParent7}>
                      <div className={styles.parent}>
                        <div className={styles.div3}>(10)</div>
                        <div className={styles.div4}>4.9</div>
                      </div>
                      <div className={styles.group}>
                        <img
                          className={styles.achievementChallengeCompetitIcon}
                          alt=""
                          src="/9793425631537356145-4.svg"
                        />
                        <img
                          className={styles.achievementChallengeCompetitIcon}
                          alt=""
                          src="/9793425631537356145-4.svg"
                        />
                        <img
                          className={styles.achievementChallengeCompetitIcon}
                          alt=""
                          src="/9793425631537356145-4.svg"
                        />
                        <img
                          className={styles.achievementChallengeCompetitIcon}
                          alt=""
                          src="/9793425631537356145-4.svg"
                        />
                        <img
                          className={styles.achievementChallengeCompetitIcon}
                          alt=""
                          src="/9793425631537356145-4.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent8}>
          <div className={styles.myGigsParent}>
            <div className={styles.myGigs}>My Gigs</div>
            <div className={styles.frameParent9}>
              <MyGig imageDimensions="/podcast-1@2x.png" />
              <MyGig imageDimensions="/podcast-1@2x.png" />
              <MyGig imageDimensions="/podcast-11@2x.png" />
              <MyGig imageDimensions="/podcast-11@2x.png" />
              <MyGig imageDimensions="/podcast-12@2x.png" />
              <MyGig imageDimensions="/podcast-12@2x.png" />
            </div>
          </div>
          <ContainerBox />
        </div>
        <div className={styles.review}>
          <ReviewCard
            imageDimensions="/mask-group6@2x.png"
            imageDimensionsText="/9793425631537356145-5.svg"
            imageDimensionsText2="/9793425631537356145-5.svg"
            imageDimensionsText3="/9793425631537356145-5.svg"
            imageDimensionsText4="/9793425631537356145-5.svg"
            imageDimensionsText5="/9793425631537356145-5.svg"
            imageDimensionsText6="/mask-group7@2x.png"
            imageDimensionsText7="/9793425631537356145-5.svg"
            imageDimensionsText8="/9793425631537356145-5.svg"
            imageDimensionsText9="/9793425631537356145-5.svg"
            imageDimensionsText10="/9793425631537356145-5.svg"
            imageDimensionsText11="/9793425631537356145-5.svg"
            imageDimensionsText12="/mask-group7@2x.png"
            imageDimensionsText13="/9793425631537356145-5.svg"
            imageDimensionsText14="/9793425631537356145-5.svg"
            imageDimensionsText15="/9793425631537356145-5.svg"
            imageDimensionsText16="/9793425631537356145-5.svg"
            imageDimensionsText17="/9793425631537356145-5.svg"
          />
          <div className={styles.frameParent10}>
            <div className={styles.yourCommentParent}>
              <div className={styles.projectSuccess}>Your Comment</div>
              <textarea
                className={styles.frameInner}
                placeholder="Write a comment"
              />
            </div>
            <CTA
              dimensionCode="/outline--messages-conversation----letter6.svg"
              button="Submit Review"
              placeholder
              right={false}
              cTABackground="linear-gradient(88.16deg, #bf43d3, #7000ff)"
              cTAPadding="var(--padding-xl) var(--padding-13xl)"
              cTAWidth="unset"
            />
          </div>
        </div>
        <ContainerFooter
          dimensionCode="/9112598-copyright-icon-12.svg"
          imageDimensionCode="/instagram-link2.svg"
          imageCode="/facbook-link2.svg"
          dimensionCodeImageUrl="/twitter-link2.svg"
          imageDimensionCodeText="/linkedin-link2.svg"
          dimensionCodeImageUrlText="/youtube-link2.svg"
        />
      </div>
      <RightHeader
        group46="/group-46.svg"
        vector10="/vector-10.svg"
        frameACursor="unset"
        boldEssentionalUIHome2="/bold--essentional-ui--home-24.svg"
        boldSettingsFineTuningWid="/bold--settings-fine-tuning--widget-25.svg"
        boldUsersUserRounded="/bold--users--user-rounded4.svg"
        boldDuotoneMoneyWallet="/bold-duotone--money--wallet4.svg"
        onFrameLink5Click={onFrameLink4Click}
        boldSettingsFineTuningSet="/bold--settings-fine-tuning--settings2.svg"
        vector="/vector.svg"
        maskGroup={`https://d1xzdqg8s8ggsr.cloudfront.net/64f992e4aa40a9b30a2520d5/0626dcf6-1836-46ec-953e-218a9774047d_1694079122762122970?Expires=-62135596800&Signature=YaiLcEej4uOIGfKmGomJKU8S0Cc~16OKD~vaN4-A47Y2CbNtf8x1NT9cm2cRkUG6unrQiTsLK2TWDCbeDWIy3v~r0NltTwengLj4UQrjNoz5rnW9rEKjELx8okxIvXGuB56TVzI-5VAa-fIr3~nnXQiH1v4MYDP68CDlX9bfm~Cb3wV6LWHpv0CigNCdMGqrv6QynXdj-fWYdIibhynzUsUfaOcmIakvV7OMK-b5r2fK4pCOFHMciJUVCJNrDPVSjCcA9iBB4KjX0qyMob64pttincpV68a0Gb9223Ij0KjdXF7jMYKr4D8VsI81PyxtKKS3FfBkVsh9uXH9LlIZIg__&Key-Pair-Id=K1P54FZWCHCL6J`}
      />
    </div>
  );
};

export default Seller2;
