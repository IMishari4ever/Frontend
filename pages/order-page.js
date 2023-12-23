import { useCallback  , useState , useEffect} from "react";
import { useRouter } from "next/router";
import SearchIcons from "../components/search-icons";
import BuyerContainer from "../components/buyer-container";
import LIST from "../components/l-i-s-t";
import RightHeader from "../components/right-header";
import styles from "./order-page.module.css";
const OrderPage = () => {
  const [order, setOrder] = useState([]);
  console.log("Order" , order)
  useEffect(() => {
    fetch('http://134.255.234.247:8800/api/orders')
    .then(response => response.json())
    .then(res => {setOrder(res)
    })
  }, [])
  
  const router = useRouter();

  const onFrameLink4Click = useCallback(() => {
    router.push("/gigboost");
  }, [router]);

  const onFrameButtonClick = useCallback(() => {
    router.push("/chat");
  }, [router]);

  return (
    <div className={styles.orderPage}>
      <img className={styles.vGIcon} alt="" src="/vg3.svg" />
      <img className={styles.orderPageChild} alt="" src="/group-392.svg" />
      <div className={styles.headerParent}>
        <div className={styles.header}>
          <SearchIcons
            ellipse1="/ellipse-1@2x.png"
            outlineNotificationsBell="/outline--notifications--bell2.svg"
            line1="/line-1.svg"
            outlineMessagesConversati="/outline--messages-conversation----letter8.svg"
            line2="/line-1.svg"
            outlineLikeHeart="/outline--like--heart3.svg"
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
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <BuyerContainer
                  userRole="Buyer"
                  dimensionCode="/vector-stroke.svg"
                />
                <div className={styles.frameParent2}>
                  <BuyerContainer
                    userRole="Priority"
                    dimensionCode="/vector-stroke1.svg"
                  />
                  <LIST
                    iconImageUrl="/outline--search--magnifer3.svg"
                    pLACEHOLDER="Search"
                    customIconId="/outline--arrows--alt-arrow-down2.svg"
                    lEFTICON2
                    lEFT={false}
                    lISTBorder="unset"
                    lISTPadding="16px 20px"
                    lISTJustifyContent="flex-start"
                    lISTFlex="unset"
                    lISTBackgroundColor="unset"
                    lISTMinWidth="unset"
                    lISTWidth="135px"
                    technologyCodingLineHeight="152%"
                    technologyCodingColor="#fff"
                    technologyCodingDisplay="inline-block"
                    technologyCodingBorder="unset"
                    technologyCodingBackgroundColor="unset"
                    technologyCodingFlex="unset"
                  />
                </div>
              </div>
              <div className={styles.manageYourOrders}>Manage Your Orders</div>
            </div>
            <div className={styles.priorityOrdersFor}>
              Priority Orders for Buyer
            </div>
          </div>
          <div className={styles.table}>
            <div className={styles.table1}>
              <div className={styles.statusParent}>
                <div className={styles.status}>Status</div>
                <div className={styles.total}>Total</div>
                <div className={styles.note}>Note</div>
                <div className={styles.dueOn}>Due on</div>
                <div className={styles.deliver}>Deliver</div>
                <div className={styles.gig}>GIG</div>
              </div>
              <div className={styles.frameParent3}>
                {/* <div className={styles.completeParent}>
                  <div className={styles.complete}>Complete</div>
                  <div className={styles.div}>$20</div>
                  <div className={styles.div}>Jan 02</div>
                  <div className={styles.no}>No</div>
                  <div className={styles.jan12}>Jan 12</div>
                  <div
                    className={styles.buildAgencyClinic}
                  >{`Build agency, clinic, dental, health,dfedf  `}</div>
                </div> */}
                
                {
                  order.map((o) => (
                    <>
                      <div className={styles.completeParent}>
                        <div className={styles.complete}>{o.isCompleted?"Completed":"Pending"}</div>
                        <div className={styles.div}>${o.price}</div>
                        <div className={styles.div}>Jan 02</div>
                        <div className={styles.no}>{o.isCompleted?"Yes":"No"}</div>
                        <div className={styles.jan12}>Jan 12</div>
                        <div
                          className={styles.buildAgencyClinic}
                        >{o.title}</div>
                      </div>
                    </>
                  ))
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightHeader
        group46="/group-46.svg"
        vector10="/vector-10.svg"
        frameACursor="unset"
        boldEssentionalUIHome2="/bold--essentional-ui--home-23.svg"
        boldSettingsFineTuningWid="/bold--settings-fine-tuning--widget-24.svg"
        boldUsersUserRounded="/bold--users--user-rounded3.svg"
        boldDuotoneMoneyWallet="/bold-duotone--money--wallet3.svg"
        onFrameLink5Click={onFrameLink4Click}
        boldSettingsFineTuningSet="/bold--settings-fine-tuning--settings3.svg"
        vector="/vector1.svg"
        maskGroup={`https://d1xzdqg8s8ggsr.cloudfront.net/64f992e4aa40a9b30a2520d5/740f2e03-4025-4512-8005-400c95a6e3d6_1694079013810399615?Expires=-62135596800&Signature=t8Rxk3sI4aars6RYqNvSTjphTAJwrBrjO5uHwfuAyJRLTuDZxACOSNjJVdjJhxHFd-wpiin5CaSxYq8MKhA09Wc-J8K7RgtYnh-uQsurrQR5OZH1bYaLZgX9b6L6YG~laJQj4aebzWD~l5o9FU2kZrp0N2A1qEcnMvoL4UwG6Iz-6ArcnMXdHLG5Qvc68XwVzGArrpbJoMBiqmqECaQG6WyPt8bTnaAia21rvccBd8Vdpk7liosnQ~sNNO6dBYBZGp8sG3EKvEFTYpv8~17CCT1SS6W4ft4ofuo6w~XeZveDqDnqQh-sJqsr1ZA1MZLtbCczB39mYSN6ORUp8EKfdw__&Key-Pair-Id=K1P54FZWCHCL6J`}
      />
    </div>
  );
};

export default OrderPage;
