import { useCallback } from "react";
import { useRouter } from "next/router";
import SearchIcons from "../components/search-icons";
import ResponseTimeAvgUserContainer1 from "../components/response-time-avg-user-container1";
import ReviewCard from "../components/review-card";
import InstrumentSelectionContainer1 from "../components/instrument-selection-container1";
import SellerPreviousWorksContainer1 from "../components/seller-previous-works-container1";
import ContainerFooter from "../components/container-footer";
import RightHeader from "../components/right-header";
import styles from "./gig.module.css";
import ContainerCard from "../components/container-card";
const Gig = () => {
  const router = useRouter();

  const onFrameContainer159Click = useCallback(() => {
    router.push("/gig");
  }, [router]);

  const onFrameContainer170Click = useCallback(() => {
    router.push("/gig");
  }, [router]);

  const onFrameContainer181Click = useCallback(() => {
    router.push("/gig");
  }, [router]);

  const onFrameContainer192Click = useCallback(() => {
    router.push("/gig");
  }, [router]);

  const onFrameContainer203Click = useCallback(() => {
    router.push("/gig");
  }, [router]);

  const onFrameContainer214Click = useCallback(() => {
    router.push("/gig");
  }, [router]);

  const onFrameLinkClick = useCallback(() => {
    router.push("/index1");
  }, [router]);

  const onFrameLink4Click = useCallback(() => {
    router.push("/gigboost");
  }, [router]);

  const onFrameButton4Click = useCallback(() => {
    router.push("/chat");
  }, [router]);

  const onFrameButton5Click = useCallback(() => {
    router.push("/chat");
  }, [router]);

  const onFrameButtonClick = useCallback(() => {
    router.push("/checkout");
  }, [router]);

  const onReviewTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='reviewContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onFAQTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='fAQContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onPreviousWorkTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='worksContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onFrameButton1Click = useCallback(() => {
    router.push("/order-page");
  }, [router]);

  const onFrameButton2Click = useCallback(() => {
    router.push("/chat");
  }, [router]);

  return (
    <div className={styles.gig}>
      <img className={styles.gigChild} alt="" src="/group-393.svg" />
      <img className={styles.vGIcon} alt="" src="/vg.svg" />
      <div className={styles.searchIconsParent}>
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
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.orderInProgressWrapper}>
                    <div className={styles.orderInProgress}>
                      2 Order in Progress
                    </div>
                  </div>
                  <div
                    className={styles.musicAudio}
                  >{`Music & Audio > Music Composing`}</div>
                </div>
                <div className={styles.iWillOrganize}>
                  I will organize your vocal music with best background music
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.infoqInner}>
                  <div className={styles.responseTimeAvgParent}>
                    <div className={styles.responseTimeAvg}>
                      Response Time Avg
                    </div>
                    <div className={styles.hours}>1 hours</div>
                  </div>
                </div>
                <div className={styles.infoqInner}>
                  <div className={styles.responseTimeAvgParent}>
                    <div className={styles.responseTimeAvg}>Language</div>
                    <div className={styles.hours}>Bangla, English</div>
                  </div>
                </div>
                <div className={styles.infoqInner}>
                  <div className={styles.responseTimeAvgParent}>
                    <div className={styles.responseTimeAvg}>
                      Started Selling
                    </div>
                    <div className={styles.hours}>November 2022</div>
                  </div>
                </div>
                <div className={styles.infoqInner}>
                  <div className={styles.responseTimeAvgParent}>
                    <div className={styles.responseTimeAvg}>Last Delivery</div>
                    <div className={styles.hours}>18 hours ago</div>
                  </div>
                </div>
              </div>
              <ResponseTimeAvgUserContainer1 />
            </div>
          </div>
          <div className={styles.closeUpImageProgramerWorkiParent}>
            <img
              className={styles.closeUpImageProgramerWorkiIcon}
              alt=""
              src="/closeupimageprogramerworkinghisdeskoffice@2x.png"
            />
            <button
              className={styles.continueWrapper}
              onClick={onFrameButtonClick}
            >
              <div className={styles.continue}>Continue</div>
            </button>
          </div>
        </div>
        <div className={styles.frameWrapper5}>
          <div className={styles.gigSpecificationParent}>
            <div className={styles.gigSpecification}>Gig Specification</div>
            <div className={styles.review} onClick={onReviewTextClick}>
              Review
            </div>
            <div className={styles.review} onClick={onFAQTextClick}>
              FAQ
            </div>
            <div
              className={styles.previousWork}
              onClick={onPreviousWorkTextClick}
            >
              Previous Work
            </div>
          </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.userInfo}>
            <div className={styles.top}>
              <div className={styles.topInner}>
                <div className={styles.frameParent3}>
                  <div className={styles.frameWrapper6}>
                    <div className={styles.frameParent4}>
                      <div className={styles.frameParent5}>
                        <div className={styles.hoursParent}>
                          <div className={styles.bengaliEnglish}>2 Hours</div>
                          <div className={styles.responseTimeAvg1}>
                            Response Time Avg.
                          </div>
                        </div>
                        <div className={styles.frameChild} />
                      </div>
                      <div className={styles.frameParent5}>
                        <div className={styles.hoursParent}>
                          <div className={styles.bengaliEnglish}>
                            Bengali, English
                          </div>
                          <div className={styles.responseTimeAvg1}>
                            Language
                          </div>
                        </div>
                        <div className={styles.frameChild} />
                      </div>
                      <div className={styles.frameParent5}>
                        <div className={styles.hoursParent}>
                          <div className={styles.bengaliEnglish}>
                            3 may, 2023
                          </div>
                          <div className={styles.responseTimeAvg1}>
                            Started Selling
                          </div>
                        </div>
                        <div className={styles.frameChild} />
                      </div>
                      <div className={styles.frameParent5}>
                        <div className={styles.hoursParent}>
                          <div className={styles.bengaliEnglish}>
                            3 Days Ago
                          </div>
                          <div className={styles.responseTimeAvg1}>
                            Last Delivery
                          </div>
                        </div>
                        <div className={styles.frameChild} />
                      </div>
                    </div>
                  </div>
                  <ResponseTimeAvgUserContainer1 />
                </div>
              </div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor ut labore sit amet, consectetur adipiscing elit, sed do eiusmod  Lorem ipsum dolor ut labore sit amet, consectetur adipiscing elit, sed do  ame   eiusmod tempor incididunt  eiusmod tempor incididuntut labore tempor incididunt  eiusmod tempor incididuntut labore `}</div>
            </div>
            <div className={styles.footer}>
              <div className={styles.btnGourp}>
                <button
                  className={styles.orderNowWrapper}
                  onClick={onFrameButton1Click}
                >
                  <div className={styles.orderNow}>Order Now</div>
                </button>
                <button
                  className={styles.contactMeWrapper}
                  onClick={onFrameButton2Click}
                >
                  <div className={styles.contactMe}>Contact Me</div>
                </button>
              </div>
              <div className={styles.infoq}>
                <div className={styles.infoqInner}>
                  <div className={styles.frameParent9}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.frameWrapper8}>
                        <div className={styles.infoqInner}>
                          <div className={styles.frameWrapper10}>
                            <div className={styles.frameWrapper11}>
                              <div className={styles.frameWrapper8}>
                                <div className={styles.infoqInner}>
                                  <div className={styles.responseTimeAvgParent}>
                                    <div className={styles.basicParent}>
                                      <div className={styles.basic}>Basic</div>
                                      <img
                                        className={styles.vectorIcon}
                                        alt=""
                                        src="/vector11.svg"
                                      />
                                    </div>
                                    <div className={styles.package}>
                                      Package
                                    </div>
                                    <img
                                      className={styles.vectorIcon1}
                                      alt=""
                                      src="/vector12.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.frameWrapper15}>
                        <div className={styles.infoqInner}>
                          <div className={styles.frameWrapper10}>
                            <div className={styles.frameWrapper11}>
                              <div className={styles.frameWrapper8}>
                                <div className={styles.infoqInner}>
                                  <div className={styles.responseTimeAvgParent}>
                                    <div className={styles.div}>$50</div>
                                    <div className={styles.package}>Price</div>
                                    <img
                                      className={styles.vectorIcon2}
                                      alt=""
                                      src="/vector13.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent11}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameWrapper8}>
                      <div className={styles.infoqInner}>
                        <div className={styles.frameWrapper10}>
                          <div className={styles.frameWrapper11}>
                            <div className={styles.frameWrapper8}>
                              <div className={styles.infoqInner}>
                                <div className={styles.responseTimeAvgParent}>
                                  <div className={styles.div}>28 Days</div>
                                  <div className={styles.package}>
                                    Delivery time
                                  </div>
                                  <img
                                    className={styles.vectorIcon2}
                                    alt=""
                                    src="/vector14.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameWrapper8}>
                      <div className={styles.infoqInner}>
                        <div className={styles.frameWrapper10}>
                          <div className={styles.frameWrapper11}>
                            <div className={styles.frameWrapper8}>
                              <div className={styles.infoqInner}>
                                <div className={styles.responseTimeAvgParent}>
                                  <div className={styles.div}>2</div>
                                  <div className={styles.package}>
                                    Extra assets
                                  </div>
                                  <img
                                    className={styles.groupIcon}
                                    alt=""
                                    src="/group.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.gigSpeck}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameWrapper35}>
                <div className={styles.gigSpecificationGroup}>
                  <div className={styles.frequentlyAskedQuestions}>
                    Gig Specification
                  </div>
                  <div className={styles.weAreSeekingContainer}>
                    <p
                      className={styles.weAreSeeking}
                    >{`We are seeking a skilled music composer to create original compositions for [Project Name]. The project is a [brief description of the project, such as a short film, video game, advertisement, or podcast]. `}</p>
                    <p className={styles.weAreSeeking}>&nbsp;</p>
                    <p className={styles.responsibilities}>Responsibilities:</p>
                    <p className={styles.weAreSeeking}>
                      Compose original music tracks that align with the
                      project's requirements.
                    </p>
                    <p
                      className={styles.weAreSeeking}
                    >{`Collaborate with the project team to understand their vision and incorporate their `}</p>
                    <p className={styles.responsibilities}>&nbsp;</p>
                    <p className={styles.responsibilities}>Deliverables:</p>
                    <p
                      className={styles.weAreSeeking}
                    >{`A set number of fully composed and mixed tracks (specify the required length and number of tracks). High-quality audio files in the specified format `}</p>
                    <p className={styles.blankLine2}>
                      <span>
                        <span className={styles.blankLine3}>&nbsp;</span>
                      </span>
                    </p>
                    <p className={styles.timeline}>
                      <span>
                        <span className={styles.blankLine3}>Timeline</span>
                      </span>
                      <span>
                        <span>
                          <span className={styles.span}>{`: `}</span>
                        </span>
                      </span>
                    </p>
                    <p className={styles.timeline}>
                      <span className={styles.specifyTheProjectDurationA1}>
                        <span>
                          <span>
                            <span>
                              Specify the project duration and key milestones,
                              including deadlines for initial drafts, revisions,
                              and final delivery
                            </span>
                            <span>.</span>
                          </span>
                        </span>
                      </span>
                    </p>
                    <p className={styles.blankLine4}>
                      <span className={styles.specifyTheProjectDurationA1}>
                        <span>
                          <span>
                            <span>&nbsp;</span>
                          </span>
                        </span>
                      </span>
                    </p>
                    <p className={styles.budget}>
                      <span className={styles.specifyTheProjectDurationA1}>
                        <span>
                          <span className={styles.budget2}>{`Budget: `}</span>
                        </span>
                      </span>
                    </p>
                    <p className={styles.timeline}>
                      <span className={styles.specifyTheProjectDurationA1}>
                        <span>
                          <span>
                            Clearly define the budget for the project or
                            indicate that it will be discussed with interested
                            composers individually.
                          </span>
                        </span>
                      </span>
                    </p>
                    <p className={styles.budget}>
                      <span>
                        <span>
                          <span className={styles.span}>&nbsp;</span>
                        </span>
                      </span>
                    </p>
                    <p className={styles.blankLine4}>
                      <span>
                        <span className={styles.blankLine3}>&nbsp;</span>
                      </span>
                    </p>
                    <p className={styles.timeline}>
                      <span>
                        <span className={styles.blankLine3}>
                          Qualifications:
                        </span>
                      </span>
                    </p>
                    <p className={styles.weAreSeeking}>
                      Proven experience as a music composer, with a portfolio of
                      previous work showcasing a range of styles and
                      genres.Proficiency in music composition software
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.extras}>
          <div className={styles.extrasParent}>
            <div className={styles.extras1}>Extras</div>
            <div className={styles.frameWrapper36}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent12}>
                  <div className={styles.container}>
                    <div className={styles.div2}>$4</div>
                    <div className={styles.days1}>2days</div>
                  </div>
                  <div className={styles.frameParent13}>
                    <div className={styles.boostYourWeb20sWith100HParent}>
                      <div className={styles.boostYourWeb}>
                        Boost Your Web 2.0s with 100 HQ Do follow backlinks
                      </div>
                      <div className={styles.recommended}>(Recommended)</div>
                    </div>
                    <div className={styles.ellipseDiv} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent12}>
                <div className={styles.container}>
                  <div className={styles.div2}>$4</div>
                  <div className={styles.days1}>2days</div>
                </div>
                <div className={styles.frameParent13}>
                  <div className={styles.boostYourWeb20sWith100HGroup}>
                    <div className={styles.boostYourWeb1}>
                      Boost Your Web 2.0s with 100 HQ Do follow backlinks
                    </div>
                    <div className={styles.recommended}>(Recommended)</div>
                  </div>
                  <div className={styles.ellipseDiv} />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent12}>
                <div className={styles.container}>
                  <div className={styles.div2}>$4</div>
                  <div className={styles.days1}>2days</div>
                </div>
                <div className={styles.frameParent13}>
                  <div className={styles.boostYourWeb20sWith100HGroup}>
                    <div className={styles.boostYourWeb1}>
                      Boost Your Web 2.0s with 100 HQ Do follow backlinks
                    </div>
                    <div className={styles.recommended}>(Recommended)</div>
                  </div>
                  <div className={styles.ellipseDiv} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.review1} data-scroll-to="reviewContainer">
          <ReviewCard
            imageDimensions="/mask-group8@2x.png"
            imageDimensionsText="/9793425631537356145-51.svg"
            imageDimensionsText2="/9793425631537356145-51.svg"
            imageDimensionsText3="/9793425631537356145-51.svg"
            imageDimensionsText4="/9793425631537356145-51.svg"
            imageDimensionsText5="/9793425631537356145-51.svg"
            imageDimensionsText6="/mask-group9@2x.png"
            imageDimensionsText7="/9793425631537356145-51.svg"
            imageDimensionsText8="/9793425631537356145-51.svg"
            imageDimensionsText9="/9793425631537356145-51.svg"
            imageDimensionsText10="/9793425631537356145-51.svg"
            imageDimensionsText11="/9793425631537356145-51.svg"
            imageDimensionsText12="/mask-group9@2x.png"
            imageDimensionsText13="/9793425631537356145-51.svg"
            imageDimensionsText14="/9793425631537356145-51.svg"
            imageDimensionsText15="/9793425631537356145-51.svg"
            imageDimensionsText16="/9793425631537356145-51.svg"
            imageDimensionsText17="/9793425631537356145-51.svg"
            propAlignSelf="unset"
            propFlex="1"
          />
        </div>
        <div className={styles.faq1} data-scroll-to="fAQContainer">
          <div className={styles.frequentlyAskedQuestionsParent}>
            <div className={styles.frequentlyAskedQuestions}>
              Frequently Asked Questions
            </div>
            <div className={styles.frameParent18}>
              <div className={styles.frameWrapper40}>
                <div className={styles.frameParent19}>
                  <div className={styles.frameParent20}>
                    <div className={styles.caretdownWrapper}>
                      <img
                        className={styles.caretdownIcon}
                        alt=""
                        src="/caretdown.svg"
                      />
                    </div>
                    <div className={styles.responseTimeAvg}>
                      <ul className={styles.whyITake}>
                        Why I take your Service?
                      </ul>
                    </div>
                  </div>
                  <div className={styles.weAreSeekingASkilledMusicWrapper}>
                    <div className={styles.weAreSeeking1}>
                      We are seeking a skilled music composer to create original
                      compositions for [Project Name]. The project is a [brief
                      description of the project, such as a short film, video
                      game, advertisement, or podcast]. We require unique and
                      captivating music that enhances the overall experience and
                      complements the project's theme and mood.
                    </div>
                  </div>
                </div>
              </div>
              <InstrumentSelectionContainer1 questionText="What kind of instuments you gonna use?" />
              <InstrumentSelectionContainer1
                questionText="What will be the final output of the project?"
                propBorderRadius="unset"
              />
              <InstrumentSelectionContainer1
                questionText="Can I use the song in Commercial use?"
                propBorderRadius="unset"
              />
              <InstrumentSelectionContainer1
                questionText="Can I use the song in Commercial use?"
                propBorderRadius="unset"
              />
              <InstrumentSelectionContainer1
                questionText="Can I use the song in Commercial use?"
                propBorderRadius="unset"
              />
              <InstrumentSelectionContainer1
                questionText="Can I use the song in Commercial use?"
                propBorderRadius="0px 0px var(--br-3xs) var(--br-3xs)"
              />
            </div>
          </div>
        </div>
        <div className={styles.works} data-scroll-to="worksContainer">
          <SellerPreviousWorksContainer1 />
        </div>
        <div className={styles.gigs}>
          <div className={styles.frameWrapper}>
            <div className={styles.frequentlyAskedQuestions}>Suggested GIG</div>
          </div>
          <div className={styles.instanceParent}>
            <ContainerCard
              animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife@2x.png"
              prop="/9793425631537356145-11.svg"
              maskGroup="/mask-group10@2x.png"
              prop1="/169881781558095014-11.svg"
              price="$350"
              title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
              onFrameContainer54Click={onFrameContainer159Click}
            />
            <ContainerCard
              animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife@2x.png"
              prop="/9793425631537356145-11.svg"
              maskGroup="/mask-group10@2x.png"
              prop1="/169881781558095014-11.svg"
              price="$350"
              title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
              onFrameContainer54Click={onFrameContainer170Click}
            />
            <ContainerCard
              animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife@2x.png"
              prop="/9793425631537356145-11.svg"
              maskGroup="/mask-group10@2x.png"
              prop1="/169881781558095014-11.svg"
              price="$350"
              title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
              onFrameContainer54Click={onFrameContainer181Click}
            />
            <ContainerCard
              animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife@2x.png"
              prop="/9793425631537356145-11.svg"
              maskGroup="/mask-group10@2x.png"
              prop1="/169881781558095014-11.svg"
              price="$350"
              title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
              onFrameContainer54Click={onFrameContainer192Click}
            />
            <ContainerCard
              animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife@2x.png"
              prop="/9793425631537356145-11.svg"
              maskGroup="/mask-group10@2x.png"
              prop1="/169881781558095014-11.svg"
              price="$350"
              title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
              onFrameContainer54Click={onFrameContainer203Click}
            />
            <ContainerCard
              animatedBottleHoldingTool="/animatedbottleholdingtoolstilllife@2x.png"
              prop="/9793425631537356145-11.svg"
              maskGroup="/mask-group10@2x.png"
              prop1="/169881781558095014-11.svg"
              price="$350"
              title={`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}
              onFrameContainer54Click={onFrameContainer214Click}
            />
          </div>
        </div>
        <ContainerFooter
          dimensionCode="/9112598-copyright-icon-14.svg"
          imageDimensionCode="/instagram-link4.svg"
          imageCode="/facbook-link4.svg"
          dimensionCodeImageUrl="/twitter-link4.svg"
          imageDimensionCodeText="/linkedin-link4.svg"
          dimensionCodeImageUrlText="/youtube-link4.svg"
        />
      </div>
      <RightHeader
        group46="/group-46.svg"
        vector10="/vector-10.svg"
        onFrameLinkClick={onFrameLinkClick}
        frameACursor="pointer"
        boldEssentionalUIHome2="/bold--essentional-ui--home-22.svg"
        boldSettingsFineTuningWid="/bold--settings-fine-tuning--widget-23.svg"
        boldUsersUserRounded="/bold--users--user-rounded2.svg"
        boldDuotoneMoneyWallet="/bold-duotone--money--wallet2.svg"
        onFrameLink5Click={onFrameLink4Click}
        boldSettingsFineTuningSet="/bold--settings-fine-tuning--settings2.svg"
        vector="/vector.svg"
        maskGroup={`https://d1xzdqg8s8ggsr.cloudfront.net/64f992e4aa40a9b30a2520d5/4139d88c-ade5-4e23-96a4-fe9556c0d01c_1694078786600393632?Expires=-62135596800&Signature=LDdWFe7iYSrX7yl9r73GDQAxCvN6PE6Bl0-tNCh-2Gb1bOVjvnds9yknrI00R~jSPHezdHDUg84l8NcABydxBvmhbujlRdi3aO9-Ipg1RwPbN3Kyveu-BmmYgFJVwDySe2-eNOMrE0728W-fHvzVKOO-9ajr6wWEUEny7bIPX49GJ5iG~dghVc4xNwAzJXPll6Jadp~m7WRsk0EuR~ZNwdY1iQVbrRyd5bGjnzGZmHiZUbwcn1lD1gcAT5Hlsjyrcrf3HevzOoF8mHHW6yD1j3zy1Ab~yBssD3hz0fYRGQ94~LCaLK4OhzY8eY8XO7Y-7Pocy~XuB9gGCFEl~lbCGg__&Key-Pair-Id=K1P54FZWCHCL6J`}
      />
    </div>
  );
};

export default Gig;
