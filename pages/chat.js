import { useCallback } from "react";
import { useRouter } from "next/router";
import SearchIcons from "../components/search-icons";
import ChatUser from "../components/chat-user";
import RightHeader from "../components/right-header";
import styles from "./chat.module.css";
const Chat = () => {
  const router = useRouter();

  const onFrameLinkClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameLink4Click = useCallback(() => {
    router.push("/gigboost");
  }, [router]);

  const onFrameButtonClick = useCallback(() => {
    router.push("/chat");
  }, [router]);

  return (
    <div className={styles.chat}>
      <img className={styles.vGIcon} alt="" src="/vg1.svg" />
      <img className={styles.chatChild} alt="" src="/group-392.svg" />
      <div className={styles.chatInner}>
        <div className={styles.headerParent}>
          <div className={styles.header}>
            <SearchIcons
              ellipse1="/ellipse-1@2x.png"
              outlineNotificationsBell="/outline--notifications--bell2.svg"
              line1="/line-1.svg"
              outlineMessagesConversati="/outline--messages-conversation----letter3.svg"
              line2="/line-1.svg"
              outlineLikeHeart="/outline--like--heart1.svg"
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
          <div className={styles.container}>
            <div className={styles.chatusers}>
              <div className={styles.title}>
                <div className={styles.div}>
                  <span className={styles.span}>{`جميع المحادثات `}</span>
                  <span className={styles.span1}>{`(25) `}</span>
                </div>
                <img
                  className={styles.arrowsAltArrowDown}
                  alt=""
                  src="/-arrows--alt-arrow-down.svg"
                />
              </div>
              <div className={styles.componentParent}>
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
              </div>
            </div>
            <div className={styles.rightbar}>
              <div className={styles.topbar}>
                <div className={styles.muhammadJabedParent}>
                  <div className={styles.muhammadJabed}>muhammad_jabed_</div>
                  <div className={styles.parent}>
                    <div className={styles.localTimeSep}>
                      اخر ظهور قبل 30 دقيقة
                    </div>
                    <div className={styles.frameChild} />
                    <div className={styles.localTimeSep}>
                      Local time sep 15, 4:04 Am
                    </div>
                  </div>
                </div>
                <img
                  className={styles.dotsthreeverticalIcon}
                  alt=""
                  src="/dotsthreevertical.svg"
                />
              </div>
              <div className={styles.chat1}>
                <div className={styles.left}>
                  <div className={styles.bottom}>
                    <div className={styles.smileyParent}>
                      <img
                        className={styles.arrowsAltArrowDown}
                        alt=""
                        src="/smiley.svg"
                      />
                      <div className={styles.frameItem} />
                      <img
                        className={styles.arrowsAltArrowDown}
                        alt=""
                        src="/linksimple.svg"
                      />
                    </div>
                    <input className={styles.bottomChild} type="text" />
                    <img
                      className={styles.arrowsAltArrowDown}
                      alt=""
                      src="/paperplanetilt.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightHeader
        group46="/group-46.svg"
        vector10="/vector-10.svg"
        onFrameLinkClick={onFrameLinkClick}
        frameACursor="pointer"
        boldEssentionalUIHome2="/bold--essentional-ui--home-23.svg"
        boldSettingsFineTuningWid="/bold--settings-fine-tuning--widget-241.svg"
        boldUsersUserRounded="/bold--users--user-rounded3.svg"
        boldDuotoneMoneyWallet="/bold-duotone--money--wallet3.svg"
        onFrameLink5Click={onFrameLink4Click}
        boldSettingsFineTuningSet="/bold--settings-fine-tuning--settings2.svg"
        vector="/vector.svg"
        maskGroup={`https://d1xzdqg8s8ggsr.cloudfront.net/64f992e4aa40a9b30a2520d5/939c982b-37bb-464d-bd9a-dd6bcac32fcb_1694079343622045414?Expires=-62135596800&Signature=JPtalzyceq5uAmfmdSy4sOSJJnBaDPVAYXidBOiYBM75~Yyr8QldgHh3mPOiOdvusJqZeJSap1pskE8v-VnsWWwI7IK1Je8tYXqE7xQ7YuHlj8XFAMwqsspwjH5B10yOJjR189txPKCT~3GBwb9ThpAaL5nanjt00uZIKAlwBBsYZNBt0Q7WEwykPZCMtJHb4R6skmnQaXqHXU0xQAnnAXAqkHfpZtBxbcx~zOqrDtnhZbhlWdqzJDzxAM0DBhT6mW5w3R9TibIdsAXQFP8uK29w2HO979rI2OLqwgyyTDHFsv1u1vs5OBJBs8laOUj4vwclpMeurpzkiOF~xR~BSQ__&Key-Pair-Id=K1P54FZWCHCL6J`}
      />
    </div>
  );
};

export default Chat;
