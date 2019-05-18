import React from "react";
import PropTypes from "prop-types";

function Content(props) {
  const { openModal } = props;

  return (
    <div className="content">
      <div className="content__center">
        <h1 className="content__title">
          <span className="content__title__text">A better way</span>
          <span className="content__title__text">to enjoy every day.</span>
        </h1>
        <h2 className="content__subtitle">Be the first to know when we launch.</h2>
        <div role="button" tabIndex={0} className="content__btn" onClick={openModal} onKeyDown={() => {}}>Request an invite</div>
      </div>
    </div>
  );
}

Content.defaultProps = {
  openModal: () => {},
};

Content.propTypes = {
  openModal: PropTypes.func,
};

export default Content;
