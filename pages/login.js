import { Container, Row, Col } from 'react-bootstrap';
import styles from './Login&Register.module.css';
import { useState } from 'react';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import SearchIcons from '../components/search-icons';
import WalletIcon from '../components/wallet-icon';
import AmountForm from '../components/amount-form';
import SectionCardForm from '../components/section-card-form';
import ContainerFooter from '../components/container-footer';
import RightHeader from '../components/right-header';

export default function Login() {
  const [show, setShow] = useState(false);

  const router = useRouter();

  const onFrameLink4Click = useCallback(() => {
    router.push('/gigboost');
  }, [router]);


  const authenticateLogin = () =>{
    //alert("hi from authenticateLogin")
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    var data = {
      username : username,
      password : password 
    }
    fetch('http://134.255.234.247:8800/api/auth/login' ,{
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(data)

    })
    .then(response => response.json())
    .then(res =>{
      console.log("res", res);
      localStorage.setItem("id" , res?._id
      )
    })    
  }

  return (
    //  others Area

    <div className={styles.walletPage}>
      <img className={styles.vGIcon} alt="" src="/vg2.svg" />
      <img className={styles.walletPageChild} alt="" src="/group-39.svg" />

      <div className={styles.walletPageInner}>
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
              outlineArrowsAltArrowD
              lEFTICON2
              lEFT
            />
            <div className={styles.frameParent}>
              <button className={styles.technologyGamingWrapper}>
                <div
                  className={styles.technologyGaming}
                >{`Technology & Gaming`}</div>
              </button>
              <button className={styles.technologyGamingWrapper}>
                <div className={styles.technologyGaming}>Graphics Design</div>
              </button>
              <button className={styles.technologyGamingWrapper}>
                <div className={styles.technologyGaming}>Digital Marketing</div>
              </button>
              <button className={styles.technologyGamingWrapper}>
                <div
                  className={styles.technologyGaming}
                >{`Writing & Translation`}</div>
              </button>
              <button className={styles.technologyGamingWrapper}>
                <div className={styles.technologyGaming}>{`Music & Audio`}</div>
              </button>
              <button className={styles.technologyGamingWrapper}>
                <div className={styles.technologyGaming}>{`Video & Photo`}</div>
              </button>
              <button className={styles.technologyGamingWrapper}>
                <div className={styles.technologyGaming}>AI Services</div>
              </button>
              <button className={styles.technologyGamingWrapper}>
                <div className={styles.technologyGaming}>Business</div>
              </button>
            </div>
          </div>

          <div
            style={{
              padding: '20px 0px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className={styles.card}>
              <div className={styles.flex}>
                <button className={styles.button}>التسجيل بالموقع</button>
                <button className={styles.button}>تسجيل الدخول</button>
              </div>

              <div className={styles.card_body}>
                <div className={styles.header}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-user"
                    style={{
                      display: 'block',
                      margin: 'auto',
                      border: '2px solid #fff',
                      borderRadius: '50%',
                    }}
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <h6 className={styles.title}>سجل الدخول من خلال</h6>
                  <div
                    className=""
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 488 512"
                        fill="#fff"
                        style={{ padding: '0px 10px' }}
                      >
                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        fill="#fff"
                        viewBox="0 0 384 512"
                        style={{ padding: '0px 10px' }}
                      >
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        fill="#fff"
                        viewBox="0 0 512 512"
                        style={{ padding: '0px 10px' }}
                      >
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.animation}>او</div>
                  <div className={styles.input_area}>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="اسم المستخدم"
                      id='username'
                    />
                  </div>
                  <div className={styles.input_area}>
                    <input
                      className={styles.input}
                      type="email"
                      required
                      placeholder="بريد إلكتروني"
                      id='email'
                    />
                  </div>
                  <div className={`${styles.input_area}  ${styles.password}`}>
                    <input
                      className={`${styles.input} ${styles.password_input}`}
                      type={show ? 'text' : 'password'}
                      required
                      placeholder="اكلمه المرو"
                      id='password'
                    />
                    <svg
                      className={styles.show}
                      xmlns="http://www.w3.org/2000/svg"
                      height="0.8em"
                      fill="#fff"
                      viewBox="0 0 576 512"
                      style={{ display: show ? 'block' : 'none' }}
                      onClick={() => setShow(prew => !prew)}
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                    <svg
                      fill="#fff"
                      style={{ display: show ? 'none' : 'block' }}
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.show}
                      height="0.8em"
                      viewBox="0 0 640 512"
                      onClick={() => setShow(prew => !prew)}
                    >
                      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                    </svg>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      color: '#fff',
                      padding: '0px 10px',
                      fontSize: '12px',
                    }}
                  >
                    <p>نسيت كلمة السر</p>
                    <p>تذكرني</p>
                  </div>
                  <div className={styles.input_area}>
                    <button className={styles.submit}
                    onClick={authenticateLogin}>الدخول</button>
                  </div>
                  <div className={styles.input_area}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <input type="checkbox" className={styles.checkbox} />
                      <p className={styles.checkbox_text}>تسجيل دخول دائمًا</p>
                    </div>
                  </div>
                  <div>
                    <p className={styles.footer}>
                      لا تملك حساب؟ التسجيل بالموقع
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
        maskGroup={`https://d1xzdqg8s8ggsr.cloudfront.net/64f992e4aa40a9b30a2520d5/747e8cda-75f0-48da-8df3-05bd6930c485_1694079261776801424?Expires=-62135596800&Signature=CjLmr2IgeBnDVZ04IWs12PDkhndCrf~IyUIx2mQ-wHg3MdiCxjd9x~AR5xrI47Ldm4PWw47R5ET21JWcI9rmZ1-oitq-gWJkuguixlxwKoCpb3YTvKHtV7TRLJFl2rmbfE2aatQvfndzu-mLnZeQoIU5kgBxTQF2VVMJfdnLROfsP~QeYNxrgSVYWsHh5usbTcqtvhpTvgMI644dHsPPaFkyJQYCFhxwSPVh53AkSS828u8zS-emSwqzdcy6ObEtoU3z-IPrfl2MoG9Fk2GUVA7VPgsGQ1xmIDoZeiwodgbrLpYAQYdc58AQF35ONNYx8GifKwtkIRzSL7JFPp43ZA__&Key-Pair-Id=K1P54FZWCHCL6J`}
      />
    </div>
  );
}
