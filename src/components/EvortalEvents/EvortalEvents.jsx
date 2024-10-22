import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./EvortalEvents.module.css";

// CSS STYLES
const {
  evortalEventsContainer,
  evortalEventImage,
  evortalEventDescripton,
  evortalEventHeading,
  evortalEventText,
  evortalEventDetails,
  evortalEventDetailsDiv,
  evortalEventDetail,
  evortalEventRegisterButton,
} = styles;

const EvortalEvents = ({
  eventImageURL,
  eventHeading,
  eventText,
  eventMode,
  eventTeamSize,
  eventDate,
  eventFormURL,
  activeEvent,
}) => {
  return (
    <div className={evortalEventsContainer}>
      <div className={evortalEventImage}>
        <img src={eventImageURL} alt="eventPoster" />
      </div>
      <div className={evortalEventDescripton}>
        <h4 className={evortalEventHeading}>{eventHeading}</h4>
        <p className={evortalEventText}>{eventText}</p>
        <div className={evortalEventDetails}>
          <div className={evortalEventDetailsDiv}>
            <div className={evortalEventDetail}>{eventMode}</div>
            <div className={evortalEventDetail}>
              <img
                src="/icons/teamSize.png"
                alt=""
                style={{ marginTop: "-0.25rem" }}
              />
              <p>{eventTeamSize}</p>
            </div>
            <div className={evortalEventDetail}>
              <img src="/icons/date.png" alt="" />
              <p>{eventDate}</p>
            </div>
          </div>
          {activeEvent ? (
            <Link
              to={eventFormURL}
              className={evortalEventRegisterButton}
              style={{
                backgroundColor: "var(--buttonLink)",
              }}
            >
              REGISTER NOW
            </Link>
          ) : (
            <Link
              to={""}
              className={evortalEventRegisterButton}
              style={{
                backgroundColor: "var(--buttonDisabled)",
              }}
            >
              COMING SOON
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

EvortalEvents.propTypes = {
  eventImageURL: Proptypes.string.isRequired,
  eventHeading: Proptypes.string.isRequired,
  eventText: Proptypes.string.isRequired,
  eventFormURL: Proptypes.string.isRequired,
  eventMode: Proptypes.string.isRequired,
  eventTeamSize: Proptypes.string.isRequired,
  eventDate: Proptypes.string.isRequired,
  activeEvent: Proptypes.bool.isRequired,
};

export default EvortalEvents;
