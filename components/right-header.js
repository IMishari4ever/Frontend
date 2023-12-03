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

  const orderClickHandeler = useCallback(() => {
    router.push("/order-page");
  }, [router]);
  const walletClickHandeler = useCallback(() => {
    router.push("/wallet-page");
  }, [router]);
  const supportClickHandeler = useCallback(() => {
    router.push("/community-final");
  }, [router]);
  const LogIn = useCallback(() => {
    router.push('/login');
  }, [router]);
  const orderChat = useCallback(() => {
    router.push('/order-chat');
  }, [router]);
  const acountSetting = useCallback(() => {
    router.push('/account-setting');
  }, [router]);

  return (
    <>
      <div className={styles.containerWrapper}>
        <div
          className={`${styles.container1} ${
            openMenu ? styles.showContainer1 : ''
          }`}
        >
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
                <a className={styles.frameParent3} onClick={orderClickHandeler}>
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
                <a
                  className={styles.frameParent3}
                  onClick={onFrameContainer10Click}
                >
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
                <a
                  className={styles.frameParent3}
                  onClick={walletClickHandeler}
                >
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
                <a
                  className={styles.frameParent3}
                  onClick={supportClickHandeler}
                >
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
                <a className={styles.frameParent3} onClick={LogIn}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.frameChild7} />
                    <svg
                      className={styles.boldEssentionalUiHome}
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      fill="#fff"
                      viewBox="0 0 512 512"
                    >
                      <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                    </svg>
                  </div>
                  <div className={styles.category}>Login</div>
                </a>
                <a className={styles.frameParent3} onClick={orderChat}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.frameChild7} />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.boldEssentionalUiHome}
                      height="1em"
                      fill="#fff"
                      viewBox="0 0 576 512"
                    >
                      <path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z" />
                    </svg>
                  </div>
                  <div className={styles.category}>Chat</div>
                </a>
                <a className={styles.frameParent3} onClick={acountSetting}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.frameChild7} />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.boldEssentionalUiHome}
                      height="1em"
                      fill="#fff"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                  </div>
                  <div className={styles.category}>Account</div>
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
      <div
        className={styles.openHeader}
        style={{ display: openMenu ? 'none' : 'flex' }}
        onClick={() => setOpenMenu(prev => !prev)}
      >
        {'<'}
      </div>
      <div
        className={styles.closeHeader}
        style={{ display: openMenu ? 'flex' : 'none' }}
        onClick={() => setOpenMenu(prev => !prev)}
      >
        {'x'}
      </div>
    </>
  );
};

export default RightHeader;
