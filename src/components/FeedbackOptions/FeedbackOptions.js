import PropTypes from "prop-types";
import style from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((buttonList) => (
        <button
          type="button"
          onClick={onLeaveFeedback}
          key={buttonList}
          name={buttonList}
          className={style.button}
        >
          {buttonList}{" "}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propeTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
