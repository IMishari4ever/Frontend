import React from 'react';
import RightHeader from '../components/right-header';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import styles from './accountSetting.module.css';
import SearchIcons from '../components/search-icons';
import ContainerFooter from '../components/container-footer';

function AccountSetting() {
  const router = useRouter();

  const onFrameLink4Click = useCallback(() => {
    router.push('/gigboost');
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

          <section style={{ textAlign: 'end' }}>
            <h1 className={styles.tittle}>إعدادت الحساب</h1>
            <p
              style={{
                color: '#FFFFFF80',
                fontSize: '18px',
                margin: '5px 10px',
              }}
            >
              قم بتغيير ملفك الشخصي وإعدادات الحساب
            </p>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <div className={styles.body}>
                <h6
                  style={{
                    fontWeight: '700',
                    fontSize: '30px',
                    margin: '5px 0px',
                  }}
                >
                  معلومات اساسية
                </h6>
                {/* 2 Part */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'end',
                    alignItems: 'center',
                  }}
                  className={styles.man_history}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: '0px 100px 0px 0px',
                    }}
                  >
                    <div style={{ padding: '0px 20px' }}>
                      <p
                        style={{
                          color: '#FFFFFF80',
                          fontSize: '18px',
                          margin: '5px 10px',
                        }}
                      >
                        تحميل صورة جديدة
                      </p>
                      <p style={{ color: 'red' }}>يزيل</p>
                    </div>
                    <div className={styles.image_area}>
                      <img
                        className={styles.image}
                        src="https://dynl.mktgcdn.com/p/Se-fzo42O3TuKFhmd4ULIWvfgCFlcrWdX4m1ue3CHb4/1121x1452.jpg"
                      />
                      <svg
                        className={styles.image_child}
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        fill="#fff"
                        viewBox="0 0 512 512"
                      >
                        <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <p style={{ fontSize: '18px', color: '#FFFFFF80' }}>
                      الصوره الشخصيه
                    </p>
                  </div>
                </div>
                {/* 3 part */}

                <div>
                  <p
                    style={{
                      color: '#FFFFFF80',
                      fontSize: '18px',
                      margin: '5px 10px',
                    }}
                  >
                    اسم
                  </p>
                  <div className={styles.input_area}>
                    <input
                      className={`${styles.input} ${styles.media_input}`}
                      type="text"
                      placeholder="عبدالله بن عمير"
                    />
                    <svg
                      className={styles.show}
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg>
                  </div>
                  <p
                    style={{
                      color: '#FFFFFF80',
                      fontSize: '18px',
                      margin: '5px 10px',
                    }}
                  >
                    وصف
                  </p>
                  <textarea className={styles.textArea}></textarea>
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'end',
                margin: '60px 0px',
              }}
            >
              <div className={styles.body}>
                <h6
                  style={{
                    fontWeight: '700',
                    fontSize: '30px',
                    margin: '5px 0px',
                    color: '#fff',
                  }}
                >
                  معلومات الحساب
                </h6>
                {/* 2 part */}

                <div>
                  <p
                    style={{
                      color: '#FFFFFF80',
                      fontSize: '18px',
                      margin: '5px 10px',
                    }}
                  >
                    بريد إلكتروني
                  </p>
                  <div className={styles.input_area}>
                    <input
                      className={`${styles.input} ${styles.media_input}`}
                      type="text"
                      placeholder="abc@email.com"
                    />
                    <svg
                      className={styles.show}
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg>
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      justifyContent: 'end',
                      padding: '0px 18px 0px',
                      // alignContent: 'center',
                      gap: '0px 90px',
                    }}
                    className={styles.input_second_area}
                  >
                    <div style={{ display: 'block' }}>
                      <p
                        style={{
                          color: '#FFFFFF80',
                          fontSize: '18px',
                          margin: '5px 10px',
                        }}
                      >
                        كلمة المرور الجديدة
                      </p>
                      <input
                        className={`${styles.input} ${styles.inputSecond}`}
                        type="text"
                        placeholder="*******"
                      />
                    </div>

                    <div style={{ display: 'block' }}>
                      <p
                        style={{
                          color: '#FFFFFF80',
                          fontSize: '18px',
                          margin: '5px 10px',
                        }}
                      >
                        كلمة السر الحالية
                      </p>

                      <input
                        className={`${styles.input} ${styles.inputSecond}`}
                        type="text"
                        placeholder="*******"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'start',
                padding: '0px 0px',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: '40%',
                  display: 'flex',
                  justifyContent: 'end',
                  margin: '10px 30px 20px 30px',
                }}
              >
                <button className={styles.left_down_button_two}>سلم</button>
                <button className={styles.left_down_button_one}>يلغي</button>
              </div>
            </div>
          </section>

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

export default AccountSetting;
