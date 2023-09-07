import { useCallback } from "react";
import { useRouter } from "next/router";
import SearchIcons from "../components/search-icons";
import PhotoUploaderContainer from "../components/photo-uploader-container";
import ContainerFooter from "../components/container-footer";
import RightHeader from "../components/right-header";
import styles from "./gig-post-page.module.css";
const GigPostPage = () => {
  const router = useRouter();

  const onFrameLink4Click = useCallback(() => {
    router.push("/gigboost");
  }, [router]);

  const onFrameButtonClick = useCallback(() => {
    router.push("/chat");
  }, [router]);

  return (
    <div className={styles.gigPostPage}>
      <img className={styles.vGIcon} alt="" src="/vg.svg" />
      <img className={styles.gigPostPageChild} alt="" src="/group-39.svg" />
      <div className={styles.gigPostPageInner}>
        <div className={styles.headerParent}>
          <div className={styles.header}>
            <SearchIcons
              ellipse1="/ellipse-1@2x.png"
              outlineNotificationsBell="/outline--notifications--bell.svg"
              line1="/line-1.svg"
              outlineMessagesConversati="/outline--messages-conversation----letter1.svg"
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
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.groupParent}>
                <img className={styles.frameChild} alt="" src="/group-37.svg" />
                <div className={styles.publishGigParent}>
                  <div className={styles.publishGig}>Publish Gig</div>
                  <div className={styles.uploadImageWrapper}>
                    <div className={styles.uploadImage}>Upload Image</div>
                  </div>
                  <div className={styles.pricing}>Pricing</div>
                  <div className={styles.descriptionWrapper}>
                    <div className={styles.description}>Description</div>
                  </div>
                  <div className={styles.gigTitle}>{`Gig Title & Keyword`}</div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.parent}>
                  <div className={styles.div}>اضافة خدمة جديدة</div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameParent2}>
                      <div className={styles.frameParent3}>
                        <div className={styles.group}>
                          <div className={styles.div}>قسم الخدمة</div>
                          <div className={styles.frameParent4}>
                            <div className={styles.frameWrapper}>
                              <div className={styles.navlinkDropdownWrapper}>
                                <div className={styles.navlinkDropdown}>
                                  <div className={styles.gigTitle}>
                                    Select Gig Categories
                                  </div>
                                  <img
                                    className={styles.navlinkDropdownChild}
                                    alt=""
                                    src="/vector-1.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.chooseAccordingToGigParent}>
                              <div className={styles.chooseAccordingTo}>
                                Choose According to Gig
                              </div>
                              <div className={styles.chooseAccordingTo}>
                                Required Field !
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.container}>
                          <div className={styles.enterRelatedKeword}>
                            عنوان الخدمة
                          </div>
                          <div className={styles.frameParent5}>
                            <div
                              className={styles.exIWillDesignYourWebsiteWrapper}
                            >
                              <div className={styles.gigTitle}>
                                Ex- I will Design your Website in modern way.
                              </div>
                            </div>
                            <div className={styles.wordsMaxParent}>
                              <div className={styles.chooseAccordingTo}>
                                20/100 words Max
                              </div>
                              <div className={styles.requiredField1}>
                                Required Field !
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent6}>
                        <div className={styles.suggestedCategoriesParent}>
                          <div className={styles.suggestedCategories}>
                            Suggested Categories
                          </div>
                          <div className={styles.graphicsDesignWebsiteUiParent}>
                            <div
                              className={styles.graphicsDesign1}
                            >{`Graphics & Design > Website UI UX Design`}</div>
                            <div
                              className={styles.graphicsDesign1}
                            >{`Graphics & Design > Landing Page Design`}</div>
                            <div
                              className={styles.graphicsDesign1}
                            >{`Graphics & Design >  Custome Website Design`}</div>
                          </div>
                        </div>
                        <div className={styles.group}>
                          <div className={styles.enterRelatedKeword}>
                            Enter Related Keword
                          </div>
                          <div className={styles.frameParent7}>
                            <div
                              className={styles.exWebDesignUiUxDesignWrapper}
                            >
                              <div className={styles.gigTitle}>
                                Ex- Web Design; UI UX Design: Mobile App UI
                              </div>
                            </div>
                            <div className={styles.keywordMaxParent}>
                              <div className={styles.chooseAccordingTo}>
                                10 Keyword Max
                              </div>
                              <div className={styles.requiredField1}>
                                Required Field !
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.saveContinueGigPostWrapper}>
                      <div
                        className={styles.enterRelatedKeword}
                      >{`Save & Continue Gig Post`}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.parent1}>
                  <div className={styles.div}>وصف الخدمة</div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.frameWrapper2}>
                        <div className={styles.group}>
                          <div className={styles.div}>
                            قم بإضافة وصف صريح وصادق لخدمتك
                          </div>
                          <div className={styles.frameParent9}>
                            <div
                              className={
                                styles.exWriteYourGigDescriptionWrapper
                              }
                            >
                              <div className={styles.gigTitle}>
                                EX- Write your Gig Description Here......
                              </div>
                            </div>
                            <div className={styles.keywordMaxParent}>
                              <div className={styles.chooseAccordingTo}>
                                50/1200 words Max
                              </div>
                              <div className={styles.chooseAccordingTo}>
                                Required Field !
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.saveContinueGigPostWrapper}>
                      <div
                        className={styles.enterRelatedKeword}
                      >{`حفظ & متابعة`}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper3}>
                  <div className={styles.frameParent10}>
                    <div className={styles.uploadGigVideoParent}>
                      <div className={styles.div}>رفع صورة الخدمة</div>
                      <div className={styles.frameParent11}>
                        <PhotoUploaderContainer
                          photoUploadButtonText="/72109600716313443204150-1.svg"
                          uploadButtonText={`Drop & Drag to Upload Photo`}
                          photoBrowseButtonText="Browse Photo"
                        />
                        <PhotoUploaderContainer
                          photoUploadButtonText="/72109600716313443204150-1.svg"
                          uploadButtonText={`Drop & Drag to Upload Photo`}
                          photoBrowseButtonText="Browse Photo"
                          propWidth="60px"
                          propHeight="60px"
                        />
                        <PhotoUploaderContainer
                          photoUploadButtonText="/72109600716313443204150-1.svg"
                          uploadButtonText={`Drop & Drag to Upload Photo`}
                          photoBrowseButtonText="Browse Photo"
                          propWidth="60px"
                          propHeight="60px"
                        />
                      </div>
                    </div>
                    <div className={styles.uploadGigVideoParent}>
                      <div className={styles.div}>Upload Gig Video</div>
                      <div className={styles.frameParent12}>
                        <PhotoUploaderContainer
                          photoUploadButtonText="/773839181553239398-1.svg"
                          uploadButtonText={`Drop & Drag to Upload Video`}
                          photoBrowseButtonText="Browse Video"
                          propWidth="80px"
                          propHeight="80px"
                        />
                        <div className={styles.frameParent13}>
                          <div
                            className={styles.multiethnicTeamPeopleMeetinParent}
                          >
                            <img
                              className={styles.multiethnicTeamPeopleMeetinIcon}
                              alt=""
                              src="/multiethnicteampeoplemeetingbroadcastinternetpodcastrecordingvideodiscussioncamerainfluencerguesttalkingonlinelivestreamcreatesocialmediachannelcontent-1@2x.png"
                            />
                            <img
                              className={styles.frameItem}
                              alt=""
                              src="/group-38.svg"
                            />
                          </div>
                          <div className={styles.videoMakingGuide}>
                            Video Making Guide to Follow
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.gigPricingParent}>
                  <div className={styles.div}>Gig Pricing</div>
                  <div className={styles.frameParent14}>
                    <div className={styles.frameParent15}>
                      <div className={styles.basicGigPackageParent}>
                        <div className={styles.enterRelatedKeword}>
                          Basic Gig Package
                        </div>
                        <div className={styles.frameInner} />
                      </div>
                      <div className={styles.enterRelatedKeword}>
                        Standard Gig Package
                      </div>
                      <div className={styles.enterRelatedKeword}>
                        Premium Gig Package
                      </div>
                    </div>
                    <div className={styles.frameParent16}>
                      <div className={styles.frameParent17}>
                        <div className={styles.frameParent18}>
                          <div className={styles.group}>
                            <div className={styles.div}>Enter Pricing Name</div>
                            <div className={styles.frameParent5}>
                              <div className={styles.exGenerelSilverWrapper}>
                                <div
                                  className={styles.exGenerelSilver}
                                >{`Ex-Generel; Silver `}</div>
                              </div>
                              <div
                                className={styles.chooseAccordingToGigParent}
                              >
                                <div className={styles.chooseAccordingTo}>
                                  20/100 words Max
                                </div>
                                <div className={styles.chooseAccordingTo}>
                                  Required Field !
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.group}>
                            <div className={styles.div}>Word Delivery Time</div>
                            <div className={styles.frameParent5}>
                              <div className={styles.exGenerelSilverWrapper}>
                                <div className={styles.exGenerelSilver}>
                                  Ex- 3-5 Days
                                </div>
                              </div>
                              <div
                                className={styles.chooseAccordingToGigParent}
                              >
                                <div className={styles.chooseAccordingTo}>
                                  20/100 words Max
                                </div>
                                <div className={styles.chooseAccordingTo}>
                                  Required Field !
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameParent18}>
                          <div className={styles.group}>
                            <div className={styles.div}>
                              Offer work Quantity
                            </div>
                            <div className={styles.frameParent5}>
                              <div className={styles.exGenerelSilverWrapper}>
                                <div className={styles.exGenerelSilver}>
                                  Ex - 1 Homepage Design
                                </div>
                              </div>
                              <div
                                className={styles.chooseAccordingToGigParent}
                              >
                                <div className={styles.chooseAccordingTo}>
                                  20/100 words Max
                                </div>
                                <div className={styles.chooseAccordingTo}>
                                  Required Field !
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.group}>
                            <div className={styles.div}>Gig Price Amount</div>
                            <div className={styles.frameParent5}>
                              <div className={styles.exGenerelSilverWrapper}>
                                <div className={styles.exGenerelSilver}>
                                  Ex- 3-5 Days
                                </div>
                              </div>
                              <div
                                className={styles.chooseAccordingToGigParent}
                              >
                                <div className={styles.chooseAccordingTo}>
                                  20/100 words Max
                                </div>
                                <div className={styles.chooseAccordingTo}>
                                  Required Field !
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameParent18}>
                          <div className={styles.group}>
                            <div className={styles.div}>
                              Extra Fast Delivery Charge
                            </div>
                            <div className={styles.frameParent5}>
                              <div className={styles.exGenerelSilverWrapper}>
                                <div className={styles.exGenerelSilver}>
                                  Ex- 3-5 Days
                                </div>
                              </div>
                              <div
                                className={styles.chooseAccordingToGigParent}
                              >
                                <div className={styles.chooseAccordingTo}>
                                  20/100 words Max
                                </div>
                                <div className={styles.chooseAccordingTo}>
                                  Optional.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.group}>
                            <div className={styles.div}>What you Offer</div>
                            <div className={styles.frameParent5}>
                              <div className={styles.exGenerelSilverWrapper}>
                                <div
                                  className={styles.exGenerelSilver}
                                >{`Ex - Prototype, Animation, Free Image & vactors`}</div>
                              </div>
                              <div
                                className={styles.chooseAccordingToGigParent}
                              >
                                <div className={styles.chooseAccordingTo}>
                                  20/100 words Max
                                </div>
                                <div className={styles.chooseAccordingTo}>
                                  Optional.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.pricingDescriptionParent}>
                          <div className={styles.div}>Pricing Description</div>
                          <div className={styles.frameParent5}>
                            <div
                              className={styles.exPrototypeAnimationFreParent}
                            >
                              <div
                                className={styles.exPrototype1}
                              >{`Ex - Prototype, Animation, Free Image & vactors`}</div>
                              <div className={styles.ellipseDiv} />
                            </div>
                            <div className={styles.chooseAccordingToGigParent}>
                              <div className={styles.chooseAccordingTo}>
                                20/100 words Max
                              </div>
                              <div className={styles.chooseAccordingTo}>
                                Optional.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.saveContinueGigPostContainer}>
                        <div
                          className={styles.enterRelatedKeword}
                        >{`Save & Continue Gig Post`}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.addFrequentlyAskedQuestionsParent}>
                  <div className={styles.addFrequentlyAsked}>
                    Add Frequently Asked Questions
                  </div>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.frameWrapper5}>
                      <div className={styles.frameParent28}>
                        <div className={styles.exGenerelSilverWrapper}>
                          <div className={styles.whyITake}>
                            Why I take your Services?
                          </div>
                        </div>
                        <div
                          className={styles.weAreSeekingASkilledMusicWrapper}
                        >
                          <div className={styles.exGenerelSilver}>
                            We are seeking a skilled music composer to create
                            original compositions for [Project Name]. The
                            project is a [brief description of the project, such
                            as a short film, video game, advertisement, or
                            podcast]. We require unique and captivating music
                            that enhances the overall experience and complements
                            the .....project's theme and mood.
                          </div>
                        </div>
                        <div className={styles.saveContinueGigPostContainer}>
                          <div className={styles.enterRelatedKeword}>
                            Save question
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameChild1} />
                    <div className={styles.caretdown} />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector15.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ellipseGroup}>
              <div className={styles.frameChild2} />
              <div className={styles.publishGig1}>Publish Gig</div>
              <div className={styles.frameWrapper6}>
                <div className={styles.frameParent29}>
                  <div className={styles.frameParent30}>
                    <div className={styles.parent4}>
                      <img
                        className={styles.icon}
                        alt=""
                        src="/5899562021543238878.svg"
                      />
                      <div className={styles.editGig}>Edit Gig</div>
                    </div>
                    <div className={styles.parent5}>
                      <img
                        className={styles.icon}
                        alt=""
                        src="/6678647681543238940.svg"
                      />
                      <div className={styles.editGig}>{`Publish Gig `}</div>
                    </div>
                  </div>
                  <div className={styles.frameParent31}>
                    <div className={styles.multiethnicTeamPeopleMeetinGroup}>
                      <img
                        className={styles.multiethnicTeamPeopleMeetinIcon1}
                        alt=""
                        src="/multiethnicteampeoplemeetingbroadcastinternetpodcastrecordingvideodiscussioncamerainfluencerguesttalkingonlinelivestreamcreatesocialmediachannelcontent-11@2x.png"
                      />
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group-381.svg"
                      />
                    </div>
                    <div className={styles.frameWrapper7}>
                      <div className={styles.frameParent32}>
                        <div className={styles.frameParent33}>
                          <div className={styles.maskGroupParent}>
                            <img
                              className={styles.maskGroupIcon}
                              alt=""
                              src="/mask-group1@2x.png"
                            />
                            <div className={styles.rahimAlieParent}>
                              <div className={styles.gigTitle}>Rahim Alie</div>
                              <div className={styles.topRatedSeller}>
                                Top Rated Seller
                              </div>
                            </div>
                          </div>
                          <div className={styles.frameParent34}>
                            <div className={styles.parent6}>
                              <img
                                className={styles.icon}
                                alt=""
                                src="/9793425631537356145-1.svg"
                              />
                              <div className={styles.div7}>4.5</div>
                            </div>
                            <div className={styles.div8}>(10)</div>
                          </div>
                        </div>
                        <div className={styles.lineDiv} />
                        <div className={styles.frameParent35}>
                          <div className={styles.navlinkDropdown}>
                            <div className={styles.enterRelatedKeword}>
                              $350
                            </div>
                            <div className={styles.startingPrice}>
                              Starting Price
                            </div>
                          </div>
                          <div
                            className={styles.multiethnicTeamPeopleMeetinParent}
                          >
                            <div className={styles.frameChild3} />
                            <img
                              className={styles.icon3}
                              alt=""
                              src="/169881781558095014-1.svg"
                            />
                          </div>
                        </div>
                        <div
                          className={styles.iWillConvert}
                        >{`I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContainerFooter
            dimensionCode="/9112598-copyright-icon-1.svg"
            imageDimensionCode="/instagram-link.svg"
            imageCode="/facbook-link.svg"
            dimensionCodeImageUrl="/twitter-link.svg"
            imageDimensionCodeText="/linkedin-link.svg"
            dimensionCodeImageUrlText="/youtube-link.svg"
          />
        </div>
      </div>
      <RightHeader
        group46="/group-46.svg"
        vector10="/vector-10.svg"
        frameACursor="unset"
        boldEssentionalUIHome2="/bold--essentional-ui--home-22.svg"
        boldSettingsFineTuningWid="/bold--settings-fine-tuning--widget-23.svg"
        boldUsersUserRounded="/bold--users--user-rounded2.svg"
        boldDuotoneMoneyWallet="/bold-duotone--money--wallet2.svg"
        onFrameLink5Click={onFrameLink4Click}
        boldSettingsFineTuningSet="/bold--settings-fine-tuning--settings2.svg"
        vector="/vector.svg"
        maskGroup={`https://d1xzdqg8s8ggsr.cloudfront.net/64f992e4aa40a9b30a2520d5/8e773e97-c31d-4089-92e6-fbee935fa804_1694079442442753810?Expires=-62135596800&Signature=EOkFJ0OyFREnvhQTt15vPmvmg5lGunl7PDalslbgkwLfS6JNE-bG6bihdrRZTomYT7uNJcfhORBnKcAEUC~JQPrIn18bwMRW1Y6aaDfn60xFNn2moK4gkqROdthfueYYMlEIymmMW0gLUpVTkEdV6MeYmFSgEXzp0tEOZc9g5uk320bDkScKeFHzx5ef2LvflkdW4C-wf1Co~j2IBaxiDOwswWG~Dj7QsiSBfumn6~Ia4bYsrYAVnwo9p-Wx-PvLOcWfF8cc~8VzEDG11i89z30AsPpi3nU5NimnBEPAQ37rBPkn0JczpFPdPNqyBQNId-KgxQ7~--bhENITMaaFBw__&Key-Pair-Id=K1P54FZWCHCL6J`}
      />
    </div>
  );
};

export default GigPostPage;
