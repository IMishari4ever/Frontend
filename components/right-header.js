import { useMemo, useCallback, useState } from "react";
import { useRouter } from "next/router";
import styles from "../pages/index.module.css";
const RightHeader = ({
  group46,
  vector10,
  onFrameLinkClick,
  frameACursor,
  boldEssentionalUIHome2,
  boldSettingsFineTuningWid,
  boldUsersUserRounded,
  boldDuotoneMoneyWallet,
  onFrameLink5Click,
  boldSettingsFineTuningSet,
  vector,
  maskGroup,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      cursor: frameACursor,
    };
  }, [frameACursor]);

  
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);

  const onFrameContainer11Click = useCallback(() => {
    router.push("/");
  }, [router]);
  
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
    <>
      <div className={styles.containerWrapper}>
        <div className={`${styles.container1} ${openMenu ? styles.showContainer1 : ""}`}>
          <div className={styles.logo}>
            <div className={styles.logoHere}>LOGO HERE</div>
          </div>
          <div className={styles.navbar}>
            <img className={styles.navbarChild} alt="" src="/group-46.svg" />
            <img className={styles.navbarItem} alt="" src="/vector-10.svg" />
            <div className={styles.navbarInner}>
              <div className={styles.instanceParent}>
                <a className={styles.frameA} onClick={onFrameContainer11Click}>
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
      <div className={styles.openHeader} style={{display: openMenu ? "none" : "flex"}} onClick={() => setOpenMenu((prev) => !prev)}>
        {"<"}
      </div>
      <div className={styles.closeHeader} style={{display: openMenu ? "flex" : "none"}} onClick={() => setOpenMenu((prev) => !prev)}>
        {"x"}
      </div>
    </>
  );
};

export default RightHeader;
