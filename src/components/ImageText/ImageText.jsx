import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ImageText.module.css";

// CSS STYLES
const { imageTextDiv, imageLink, imageTitle, imageSubTitle } = styles;

const imageTextContent = ({
  title,
  titleAlign,
  subTitle,
  subTitleAlign,
  allianceImg,
}) => {
  return (
    <>
      <img src={allianceImg} className={imageLink} alt={title} />
      <div className={imageTitle} style={{ textAlign: titleAlign }}>
        {title}
      </div>
      {subTitle != null && (
        <div className={imageSubTitle} style={{ textAlign: subTitleAlign }}>
          {subTitle}
        </div>
      )}
    </>
  );
};

const ImageText = ({
  title,
  titleAlign,
  subTitle,
  subTitleAlign,
  link,
  allianceImg,
  externalLink,
  textColor,
}) => {
  if (externalLink) {
    return (
      <a
        className={imageTextDiv}
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{ color: textColor }}
      >
        {imageTextContent({
          title,
          titleAlign,
          subTitle,
          subTitleAlign,
          allianceImg,
        })}
      </a>
    );
  } else {
    return (
      <Link
        className={imageTextDiv}
        to={link}
        target="_blank"
        rel="noreferrer"
        style={{ color: textColor }}
      >
        {imageTextContent({
          title,
          titleAlign,
          subTitle,
          subTitleAlign,
          allianceImg,
        })}
      </Link>
    );
  }
};

ImageText.propTypes = {
  title: Proptypes.string.isRequired,
  titleAlign: Proptypes.string.isRequired,
  subTitle: Proptypes.string,
  subTitleAlign: Proptypes.string,
  link: Proptypes.string.isRequired,
  allianceImg: Proptypes.string.isRequired,
  externalLink: Proptypes.bool.isRequired,
  textColor: Proptypes.string,
};

export default ImageText;
