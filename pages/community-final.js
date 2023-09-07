import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderNoLogin from "../components/header-no-login";
import CTA from "../components/c-t-a";
import FormContainer from "../components/form-container";
import ContainerFooter from "../components/container-footer";
import RightHeader from "../components/right-header";
import styles from "./community-final.module.css";
const CommunityFinal = () => {
  const router = useRouter();

  const onFrameLink4Click = useCallback(() => {
    router.push("/gigboost");
  }, [router]);

  const onFrameButtonClick = useCallback(() => {
    router.push("/chat");
  }, [router]);

  return (
    <div className={styles.communityFinal}>
      <img className={styles.vGIcon} alt="" src="/vg1.svg" />
      <img className={styles.communityFinalChild} alt="" src="/group-392.svg" />
      <div className={styles.communityFinalInner}>
        <div className={styles.frameParent}>
          <HeaderNoLogin />
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameGroup}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                  <div className={styles.ellipseDiv} />
                  <img
                    className={styles.cheerfulWomanBeautifulGirlIcon}
                    alt=""
                    src="/cheerfulwomanbeautifulgirlwithdarkcurlyhairbunwearingearringspastelpinkshirthasmakeupholdsarmscrossedremovebgpreview-1@2x.png"
                  />
                  <div className={styles.aPlaceWhere}>
                    A place where genuine connections thrive, peer support
                    flourishes, and professional growth is fostered.
                  </div>
                </div>
                <div className={styles.ctaParent}>
                  <CTA
                    dimensionCode="/outline--messages-conversation----letter7.svg"
                    button="موضوع جديد"
                    placeholder
                    right={false}
                    cTABackground="linear-gradient(88.16deg, #bf43d3, #7000ff)"
                    cTAPadding="16px 20px"
                    cTAWidth="138px"
                  />
                  <div className={styles.gigRequestParent}>
                    <div className={styles.gigRequest}>Gig Request</div>
                    <div className={styles.gigRequest}>General Topics</div>
                    <div className={styles.gigRequest}>Admin Notifications</div>
                    <div className={styles.gigRequest}>User Stories</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <FormContainer
                  imageDimensions="/ellipse-219@2x.png"
                  imageIdentifier="/vector5.svg"
                  imageCode="/vector5.svg"
                  imageCode2="/ellipse-2191@2x.png"
                />
                <img className={styles.lineIcon} alt="" src="/line-23.svg" />
                <div className={styles.frameParent1}>
                  <div className={styles.frameParent2}>
                    <div className={styles.ellipseGroup}>
                      <img
                        className={styles.ellipseIcon}
                        alt=""
                        src="/ellipse-2192@2x.png"
                      />
                      <div className={styles.frameParent3}>
                        <div className={styles.abdullahWrapper}>
                          <div className={styles.abdullah}>Abdullah</div>
                        </div>
                        <div className={styles.frameWrapper1}>
                          <div className={styles.vectorParent}>
                            <img
                              className={styles.vectorIcon}
                              alt=""
                              src="/vector6.svg"
                            />
                            <div className={styles.lastInteractin5}>
                              Last interactin 5 Hours ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.frameParent5}>
                        <div className={styles.adamDavisWrapper}>
                          <div className={styles.adamDavis}>Adam Davis</div>
                        </div>
                        <div className={styles.frameWrapper2}>
                          <div className={styles.vectorParent}>
                            <div className={styles.hoursAgo}>5 Hours ago</div>
                            <img
                              className={styles.vectorIcon}
                              alt=""
                              src="/vector6.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.ellipseIcon}
                        alt=""
                        src="/ellipse-2193@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.softUiDesign}>
                    Soft UI Design Sustem - Free Resources and Starters
                  </div>
                </div>
                <img className={styles.lineIcon} alt="" src="/line-24.svg" />
                <FormContainer
                  imageDimensions="/ellipse-2194@2x.png"
                  imageIdentifier="/vector7.svg"
                  imageCode="/vector7.svg"
                  imageCode2="/ellipse-2195@2x.png"
                />
                <img className={styles.lineIcon} alt="" src="/line-25.svg" />
                <FormContainer
                  imageDimensions="/ellipse-2196@2x.png"
                  imageIdentifier="/vector8.svg"
                  imageCode="/vector8.svg"
                  imageCode2="/ellipse-2197@2x.png"
                />
                <img className={styles.lineIcon} alt="" src="/line-26.svg" />
                <FormContainer
                  imageDimensions="/ellipse-2198@2x.png"
                  imageIdentifier="/vector9.svg"
                  imageCode="/vector9.svg"
                  imageCode2="/ellipse-2199@2x.png"
                />
                <img className={styles.lineIcon} alt="" src="/line-27.svg" />
                <FormContainer
                  imageDimensions="/ellipse-21910@2x.png"
                  imageIdentifier="/vector10.svg"
                  imageCode="/vector10.svg"
                  imageCode2="/ellipse-21911@2x.png"
                />
              </div>
            </div>
          </div>
          <ContainerFooter
            dimensionCode="/9112598-copyright-icon-13.svg"
            imageDimensionCode="/instagram-link3.svg"
            imageCode="/facbook-link3.svg"
            dimensionCodeImageUrl="/twitter-link3.svg"
            imageDimensionCodeText="/linkedin-link3.svg"
            dimensionCodeImageUrlText="/youtube-link3.svg"
          />
        </div>
      </div>
      <RightHeader
        group46="/group-46.svg"
        vector10="/vector-10.svg"
        frameACursor="unset"
        boldEssentionalUIHome2="/bold--essentional-ui--home-241.svg"
        boldSettingsFineTuningWid="/bold--settings-fine-tuning--widget-251.svg"
        boldUsersUserRounded="/bold--users--user-rounded4.svg"
        boldDuotoneMoneyWallet="/bold-duotone--money--wallet41.svg"
        onFrameLink5Click={onFrameLink4Click}
        boldSettingsFineTuningSet="/bold--settings-fine-tuning--settings2.svg"
        vector="/vector.svg"
        maskGroup={`https://d1xzdqg8s8ggsr.cloudfront.net/64f992e4aa40a9b30a2520d5/a5211ed8-6c09-47df-a2f2-cba7301dc34c_1694079047033399452?Expires=-62135596800&Signature=wl-Msk8yhpwTH1vOo4y0uzqdRc9toEiSSCb4LoL13rXB3~Vo0mhv3d03O-fjHxGOxOJTVekOuJK9~p3uRt9z4wUVQoWw33q2SP-gAR9z8m5XUURiQ7bfHIoMQKcBvmu2Tns-OEJucUFvSXzjlJ1-lgw-YDMG1fLBP-PBhpC3JvDr~djwGAR~mBo8wHosExlU623dkFpTz0W8o3J1serVQYLUJHJr5gsUynY2I4kz67aKhuktVAuXPK59y3aUWufNAH0wHffcJpG-L9opt-4mCOdp25Vl2sHFoTMrpj3z9UhtEiHRI8TxIRSYrzcX1lntBKmwe~Rh4Gc0P2EXRNZUVw__&Key-Pair-Id=K1P54FZWCHCL6J`}
      />
    </div>
  );
};

export default CommunityFinal;
