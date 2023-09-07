import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent from "./frame-component1";
import styles from "./right-header.module.css";
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

  const onFrameButton10Click = useCallback(() => {
    router.push("/chat");
  }, [router]);

  const onFrameButton11Click = useCallback(() => {
    router.push("/chat");
  }, [router]);

  return (
    <div className={styles.indexInner}>
      <FrameComponent
        imageDimensions="/bold--essentional-ui--home-22.svg"
        imageDimensionsText="/bold--settings-fine-tuning--widget-23.svg"
        imageDimensionsId="/bold--users--user-rounded2.svg"
        imageId="/bold-duotone--money--wallet2.svg"
        imageDimensionsTextId="/bold--settings-fine-tuning--settings2.svg"
        profilePictureUrl="Nadia Alie"
        frameDivFlex="1"
        frameDivMinWidth="100px"
        frameDivMaxWidth="352px"
        frameACursor="unset"
        frameACursor1="pointer"
        frameButtonBoxSizing="unset"
        nadiaAlie09Display="unset"
        frameButtonBoxSizing1="border-box"
        nadiaAlie09Display1="inline-block"
        frameButtonBoxSizing2="border-box"
        nadiaAlie09Display2="inline-block"
        frameButtonBoxSizing3="border-box"
        nadiaAlie09Display3="inline-block"
        onFrameLink4Click={onFrameLink5Click}
        onFrameButton8Click={onFrameButton10Click}
        onFrameButton9Click={onFrameButton11Click}
      />
    </div>
  );
};

export default RightHeader;
