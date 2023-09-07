import { useMemo } from "react";
import styles from "./photo-uploader-container.module.css";
const PhotoUploaderContainer = ({
  photoUploadButtonText,
  uploadButtonText,
  photoBrowseButtonText,
  propWidth,
  propHeight,
}) => {
  const iconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.parent}>
        <img
          className={styles.icon}
          alt=""
          src={photoUploadButtonText}
          style={iconStyle}
        />
        <div className={styles.frameParent}>
          <div className={styles.group}>
            <img
              className={styles.icon1}
              alt=""
              src="/5644269351553239397-1.svg"
            />
            <div className={styles.dropDrag}>{uploadButtonText}</div>
          </div>
          <div className={styles.browsePhoto}>{photoBrowseButtonText}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoUploaderContainer;
