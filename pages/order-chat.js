import styles from './orderChat.module.css';

import { Container, Row, Col } from 'react-bootstrap';
// import styles from './Login&Register.module.css';
import { useState } from 'react';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import SearchIcons from '../components/search-icons';
import WalletIcon from '../components/wallet-icon';
import AmountForm from '../components/amount-form';
import SectionCardForm from '../components/section-card-form';
import ContainerFooter from '../components/container-footer';
import RightHeader from '../components/right-header';



function orderChat() {
  
  const dispute = useCallback((e )  => {
    fetch('134.255.234.247:8800/api/disputes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: "You really",
        //user: localStorage.getItem("id"),
        description: "hehe",
        title: "title-one",
        // seller: localStorage.getItem("id"),
        // buyer: localStorage.getItem("id"),
      }),
    })
      
      .then(res => {
        console.log("res", res);
      })
      .catch(error => {
        console.error('Error during fetch:', error);
      });
  }, []);

  const disputeHandler = useCallback((event) => {
    event.stopPropagation(); // Stop event propagation
    dispute();
  }, [dispute]);

  const router = useRouter();

  const onFrameLink4Click = useCallback(() => {
    router.push('/gigboost');
  }, [router]);

  const onFrameButtonClick = useCallback(() => {
    router.push('/chat');
  }, [router]);
  return (
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

          {/* hello */}
          <div className={styles.row}>
            <div className={`${styles.column} ${styles.left}`}>
              <div className={styles.left_body_one}>
                <div style={{ padding: '0px 5px' }}>
                  <p className={styles.left_title}>
                    إضافة خدمة الدردشة المباشرة لموقعك عن طريق برنامج زيتون
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      color: '#FFFFFF80',
                    }}
                  >
                    <p>$999</p>
                    <p>سعر</p>
                  </div>
                  <button className={styles.left_button}>مكتمل</button>
                </div>
                <div>
                  <img
                    src="https://dynl.mktgcdn.com/p/Se-fzo42O3TuKFhmd4ULIWvfgCFlcrWdX4m1ue3CHb4/1121x1452.jpg"
                    className={styles.left_image}
                  />
                </div>
              </div>
              <div className={styles.left_body_two}>
                <div className={styles.left_top}>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 320 512"
                      fill="#fff"
                    >
                      <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ color: '#fff', fontWeight: '700' }}>ملخص</p>
                  </div>
                </div>
                <div>
                  <div className={styles.left_down}>
                    <div style={{ color: '#FFFFFF80' }}>55412658</div>
                    <div>
                      <p style={{ color: '#fff', fontWeight: '600' }}>
                        رقم الطلب
                      </p>
                    </div>
                  </div>
                  <div className={styles.left_down}>
                    <div style={{ color: '#FFFFFF80' }}>عبد الله</div>
                    <div>
                      <p style={{ color: '#fff', fontWeight: '600' }}>تاجر</p>
                    </div>
                  </div>
                  <div className={styles.left_down}>
                    <div style={{ color: '#FFFFFF80' }}>$999</div>
                    <div>
                      <p style={{ color: '#fff', fontWeight: '600' }}>سعر</p>
                    </div>
                  </div>
                  <div className={styles.left_down}>
                    <div style={{ color: '#FFFFFF80' }}>1</div>
                    <div>
                      <p style={{ color: '#fff', fontWeight: '600' }}>كمية</p>
                    </div>
                  </div>
                  <div className={styles.left_down}>
                    <div style={{ color: '#FFFFFF80' }}>مكتمل</div>
                    <div>
                      <p style={{ color: '#fff', fontWeight: '600' }}>حالة</p>
                    </div>
                  </div>
                  <div className={styles.left_down}>
                    <div style={{ color: '#FFFFFF80' }}>24-08-2023</div>
                    <div>
                      <p style={{ color: '#fff', fontWeight: '600' }}>
                        تاريخ الطلب
                      </p>
                    </div>
                  </div>
                  <div className={styles.left_down}>
                    <div style={{ color: '#FFFFFF80' }}>28-08-2023</div>
                    <div>
                      <p style={{ color: '#fff', fontWeight: '600' }}>
                        {' '}
                        تاريخ التسليم او الوصول
                      </p>
                    </div>
                  </div>
                </div>
                {/* Button */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '10px 0px',
                  }}
                >
                  <button className={styles.left_down_button_one} onClick={disputeHandler}>يلغي</button>
                  <button className={styles.left_down_button_two}>سلم</button>
                </div>
                <button
                  style={{ width: '96%' }}
                  className={styles.left_down_button_two}
                >
                  قيم الطلب
                </button>
              </div>
            </div>
            <div className={`${styles.column} ${styles.right}`}>
              <p
                style={{
                  textAlign: 'end',
                  fontWeight: '600',
                  padding: '0px',
                  fontSize: '20px',
                }}
              >
                محادثة
              </p>
              <div className={styles.chat_area}>
                <div className={styles.chat_body}>
                  {/* Chat area */}
                  <div style={{ display: 'block' }}>
                    <div style={{ display: 'block' }}>
                      <p className={styles.date}>
                        28 أغسطس 2023 الساعة 01:00 صباحًا
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'start',
                          justifyContent: 'end',
                          padding: '0px 10px 0px 0px',
                        }}
                      >
                        <div className={styles.right_title}>
                          العميل مهم جدًا، العميل سيتبعه العميل. Duis tortor
                          lorem، السياسة في العنصر أو، لوضع ولا إيليت.
                        </div>
                        <div>
                          <img
                            src="https://dynl.mktgcdn.com/p/Se-fzo42O3TuKFhmd4ULIWvfgCFlcrWdX4m1ue3CHb4/1121x1452.jpg"
                            className={styles.man}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.chat_body}>
                  <div style={{ display: 'block' }}>
                    {/* Chat one */}
                    <div style={{ display: 'block' }}>
                      <p className={styles.date}>
                        28 أغسطس 2023 الساعة 01:00 صباحًا
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div>
                          <img
                            src="https://dynl.mktgcdn.com/p/Se-fzo42O3TuKFhmd4ULIWvfgCFlcrWdX4m1ue3CHb4/1121x1452.jpg"
                            className={styles.man}
                          />
                        </div>
                        <div className={styles.left_tittle}>
                          العميل مهم جدًا، العميل سيتبعه العميل. Duis tortor
                          lorem، السياسة في العنصر أو، لوضع ولا إيليت.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.chat_body}>
                  {/* Chat area */}
                  <div style={{ display: 'block' }}>
                    <div style={{ display: 'block' }}>
                      <p className={styles.date}>
                        28 أغسطس 2023 الساعة 01:00 صباحًا
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'start',
                          justifyContent: 'end',
                          padding: '0px 10px 0px 0px',
                        }}
                      >
                        <div className={styles.right_title}>
                          العميل مهم جدًا، العميل سيتبعه العميل. Duis tortor
                          lorem، السياسة في العنصر أو، لوضع ولا إيليت.
                        </div>
                        <div>
                          <img
                            src="https://dynl.mktgcdn.com/p/Se-fzo42O3TuKFhmd4ULIWvfgCFlcrWdX4m1ue3CHb4/1121x1452.jpg"
                            className={styles.man}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.chat_body}>
                  <div style={{ display: 'block' }}>
                    {/* Chat one */}
                    <div style={{ display: 'block' }}>
                      <p className={styles.date}>
                        28 أغسطس 2023 الساعة 01:00 صباحًا
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div>
                          <img
                            src="https://dynl.mktgcdn.com/p/Se-fzo42O3TuKFhmd4ULIWvfgCFlcrWdX4m1ue3CHb4/1121x1452.jpg"
                            className={styles.man}
                          />
                        </div>
                        <div className={styles.left_tittle_call}>
                          <p style={{ fontsize: '20px', fontWeight: '800' }}>
                            العميل مهم جدًا، العميل سيتبعه العميل.{' '}
                          </p>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                            }}
                          >
                            <button className={styles.reject_call}>
                              ليس بعد
                            </button>
                            <button className={styles.recive_call}>
                              تسليم الطلب
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '40px 0px',
                }}
                className={styles.chat_input}
              >
                <div className={styles.emoji}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    fill="#fff"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                  </svg>
                </div>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="اكتب رسالة هنا...."
                />
                <div className={styles.emoji}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    fill="#fff"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
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

export default orderChat;

// export default function Login() {
//   const [show, setShow] = useState(false);

//   //

//   const router = useRouter();

//   const onFrameLink4Click = useCallback(() => {
//     router.push('/gigboost');
//   }, [router]);

//   const onFrameButtonClick = useCallback(() => {
//     router.push('/chat');
//   }, [router]);
//   return (
//     //  others Area

//   );
// }
