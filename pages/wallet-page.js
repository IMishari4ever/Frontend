import { useCallback } from "react";
import { useRouter } from "next/router";
import SearchIcons from "../components/search-icons";
import WalletIcon from "../components/wallet-icon";
import AmountForm from "../components/amount-form";
import SectionCardForm from "../components/section-card-form";
import ContainerFooter from "../components/container-footer";
import RightHeader from "../components/right-header";
import styles from "./wallet-page.module.css";
const WalletPage = () => {
  const router = useRouter();

  const onFrameLink4Click = useCallback(() => {
    router.push("/gigboost");
  }, [router]);

  const onFrameButton8Click = useCallback(() => {
    router.push("/chat");
  }, [router]);

  const onFrameButton9Click = useCallback(() => {
    router.push("/chat");
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
                <div className={styles.ellipseParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.frameItem} />
                  <div className={styles.availableBalanceParent}>
                    <div className={styles.availableBalance}>
                      Available Balance
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>$56,489.00</div>
                    </div>
                    <div className={styles.frameParent1}>
                      <div className={styles.frameParent2}>
                        <div className={styles.container}>
                          <img
                            className={styles.icon}
                            alt=""
                            src="/7402466011543238856.svg"
                          />
                        </div>
                        <div className={styles.bankAccountNumber}>
                          +5,265.00
                        </div>
                      </div>
                      <div className={styles.frameParent3}>
                        <div className={styles.frame}>
                          <img
                            className={styles.icon}
                            alt=""
                            src="/3291639221543238860.svg"
                          />
                        </div>
                        <div className={styles.bankAccountNumber}>
                          -1,546.00
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameInner} />
                  </div>
                </div>
                <div className={styles.frameParent4}>
                  <WalletIcon
                    imageIcon="/21035137391594941300.svg"
                    transactionTypeIcon="Withdraw"
                  />
                  <WalletIcon
                    imageIcon="/pluscircle.svg"
                    transactionTypeIcon="Add Money"
                  />
                  <WalletIcon
                    imageIcon="/8449695291634472875.svg"
                    transactionTypeIcon="Pay Now"
                  />
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.frameParent6}>
                  <div className={styles.plusWrapper}>
                    <img className={styles.plusIcon} alt="" src="/plus.svg" />
                  </div>
                  <div className={styles.quickBalanceTransferParent}>
                    <div className={styles.quickBalanceTransfer}>
                      Quick Balance Transfer
                    </div>
                    <div className={styles.connectWithAll}>
                      Connect With all your Card
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent7}>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.ellipseDiv} />
                    <img
                      className={styles.caretrightIcon}
                      alt=""
                      src="/caretright.svg"
                    />
                  </div>
                  <div className={styles.maskGroupParent}>
                    <img
                      className={styles.maskGroupIcon}
                      alt=""
                      src="/mask-group2@2x.png"
                    />
                    <img
                      className={styles.maskGroupIcon1}
                      alt=""
                      src="/mask-group3@2x.png"
                    />
                    <img
                      className={styles.maskGroupIcon}
                      alt=""
                      src="/mask-group4@2x.png"
                    />
                    <img
                      className={styles.maskGroupIcon}
                      alt=""
                      src="/mask-group5@2x.png"
                    />
                    <div className={styles.userWrapper}>
                      <img className={styles.plusIcon} alt="" src="/user.svg" />
                    </div>
                    <div className={styles.userWrapper}>
                      <img className={styles.plusIcon} alt="" src="/user.svg" />
                    </div>
                    <div className={styles.userWrapper}>
                      <img className={styles.plusIcon} alt="" src="/user.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.bankAccountNumberParent}>
                  <div className={styles.bankAccountNumber}>
                    Bank Account Number
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.parent}>
                      <img
                        className={styles.plusIcon}
                        alt=""
                        src="/14095787331600002636-1.svg"
                      />
                      <div className={styles.div3}>009 12345 6789 56</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent8}>
              <div className={styles.frameParent9}>
                <div className={styles.frameDiv}>
                  <div className={styles.headerParent}>
                    <div className={styles.frameParent12}>
                      <div className={styles.withdrawWrapper}>
                        <div className={styles.withdraw}>Withdraw</div>
                      </div>
                      <div className={styles.addMoneyWrapper}>
                        <div className={styles.withdraw}>Add Money</div>
                      </div>
                      <div className={styles.payNowWrapper}>
                        <div className={styles.withdraw}>Pay Now</div>
                      </div>
                    </div>
                    <div className={styles.frameParent13}>
                      <div className={styles.withdrawToParent}>
                        <div className={styles.withdrawTo}>Withdraw to</div>
                        <div className={styles.frameWrapper1}>
                          <div className={styles.wrapper1}>
                            <div className={styles.div3}>009 12345 6789 56</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.connectWithAll}>
                        Please enter Bank account number
                      </div>
                    </div>
                  </div>
                  <div className={styles.lineParent}>
                    <div className={styles.lineDiv} />
                    <div className={styles.or}>Or</div>
                    <div className={styles.lineDiv} />
                  </div>
                </div>
                <div className={styles.stripeCompanyLogowineParent}>
                  <img
                    className={styles.stripeCompanyLogowineIcon}
                    alt=""
                    src="/stripe-companylogowine.svg"
                  />
                  <img
                    className={styles.stripeCompanyLogowineIcon}
                    alt=""
                    src="/bitcoinlogowine.svg"
                  />
                  <img
                    className={styles.stripeCompanyLogowineIcon}
                    alt=""
                    src="/visa-inclogowine.svg"
                  />
                  <img
                    className={styles.stripeCompanyLogowineIcon}
                    alt=""
                    src="/discovery-inclogowine.svg"
                  />
                  <img
                    className={styles.stripeCompanyLogowineIcon}
                    alt=""
                    src="/paypallogowine-1.svg"
                  />
                  <img
                    className={styles.stripeCompanyLogowineIcon}
                    alt=""
                    src="/payoneerlogowine-1.svg"
                  />
                </div>
              </div>
              <div className={styles.stripeCompanyLogowineGroup}>
                <img
                  className={styles.stripeCompanyLogowineIcon}
                  alt=""
                  src="/stripe-companylogowine1.svg"
                />
                <img
                  className={styles.stripeCompanyLogowineIcon}
                  alt=""
                  src="/visa-inclogowine1.svg"
                />
                <div className={styles.visaIncLogowine}>
                  <i className={styles.payWithAccountContainer}>
                    <p className={styles.payWith}>Pay with</p>
                    <p className={styles.payWith}>Account fund</p>
                  </i>
                </div>
                <div className={styles.visaIncLogowine}>
                  <i className={styles.payWithCriptoContainer}>
                    <p className={styles.payWith}>Pay with</p>
                    <p className={styles.payWith}>Cripto</p>
                  </i>
                </div>
              </div>
              <div className={styles.frameParent14}>
                <div className={styles.frameParent15}>
                  <div className={styles.frameParent16}>
                    <AmountForm
                      inputLabel="Enter Amount"
                      amountInputLabel="$500"
                    />
                    <div className={styles.minimum50Required}>
                      Minimum $50 Required
                    </div>
                  </div>
                  <div className={styles.frameParent16}>
                    <AmountForm
                      inputLabel="Subject"
                      amountInputLabel="Web Design Income"
                      propBorder="unset"
                    />
                    <div className={styles.minimum50Required}>Optional</div>
                  </div>
                </div>
                <div className={styles.subtotalAmount550Parent}>
                  <div className={styles.subtotalAmountContainer}>
                    <span className={styles.subtotalAmount}>
                      <span>Subtotal Amount -</span>
                      <span className={styles.span}>{` `}</span>
                    </span>
                    <span className={styles.span}>
                      <span className={styles.span2}>$550</span>
                    </span>
                  </div>
                  <div className={styles.commission50}>
                    <span className={styles.subtotalAmount}>
                      <span>Commission</span>
                      <span className={styles.span}>{` `}</span>
                    </span>
                    <span className={styles.span}>
                      <span className={styles.span2}>$50</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.withdrawContainer}>
                <div className={styles.withdraw1}>Withdraw</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent18}>
            <div className={styles.withdrawToParent}>
              <div className={styles.div}>Transactions History</div>
              <div className={styles.currentTransfers}>Current Transfers</div>
            </div>
            <div className={styles.fill}>
              <div className={styles.frameParent19}>
                <SectionCardForm
                  timestampText="/group-341.svg"
                  actionButtonText="Complete"
                  timeAgoText="02 Minutes Ago"
                />
                <SectionCardForm
                  timestampText="/group-342.svg"
                  actionButtonText="Cancel"
                  timeAgoText="12 Minutes Ago"
                  propAlignSelf="stretch"
                  propFlex="1"
                  propWidth="175px"
                  propFlexShrink="0"
                />
                <SectionCardForm
                  timestampText="/group-341.svg"
                  actionButtonText="Complete"
                  timeAgoText="02 Minutes Ago"
                  propAlignSelf="unset"
                  propFlex="unset"
                  propWidth="unset"
                  propFlexShrink="unset"
                />
                <SectionCardForm
                  timestampText="/group-342.svg"
                  actionButtonText="Cancel"
                  timeAgoText="12 Minutes Ago"
                  propAlignSelf="stretch"
                  propFlex="1"
                  propWidth="175px"
                  propFlexShrink="0"
                />
                <SectionCardForm
                  timestampText="/group-341.svg"
                  actionButtonText="Complete"
                  timeAgoText="02 Minutes Ago"
                  propAlignSelf="unset"
                  propFlex="unset"
                  propWidth="unset"
                  propFlexShrink="unset"
                />
                <SectionCardForm
                  timestampText="/group-341.svg"
                  actionButtonText="Complete"
                  timeAgoText="02 Minutes Ago"
                  propAlignSelf="unset"
                  propFlex="unset"
                  propWidth="unset"
                  propFlexShrink="unset"
                />
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
};

export default WalletPage;
