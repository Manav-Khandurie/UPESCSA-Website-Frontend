import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ImageText.module.css";

// CSS STYLES
const { imageTextDiv, imageLink, allianceTitle, allianceSubTitle } = styles;

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
      <div className={allianceTitle} style={{ textAlign: titleAlign }}>
        {title}
      </div>
      {subTitle && (
        <div className={allianceSubTitle} style={{ textAlign: subTitleAlign }}>
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
}) => {
  if (externalLink) {
    return (
      <a className={imageTextDiv} href={link} target="_blank" rel="noreferrer">
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
      <Link className={imageTextDiv} to={link} target="_blank" rel="noreferrer">
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
};

export default ImageText;
