import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import "./menu-item.style.scss";

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  return (
    <div className={`${size === "large" ? "large " : ""}menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtile">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);

MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string
};
MenuItem.defaultProps = {
  title: "",
  imageUrl: "",
  size: ""
};
