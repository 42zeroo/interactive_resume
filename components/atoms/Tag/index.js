import React from "react";
import classNames from "classnames";
import styles from "@styles/atoms/Tag.module.scss";

const classNameBackgroundColorSwitch = (color) => {
  switch (color) {
    case "white":
      return styles.tagColorWhite;
    case "grey":
      return styles.tagColorGrey;
    default:
      return styles.tagColorWhite;
  }
};

const Tag = ({ children, color }) => {
  return (
    <div
      className={classNames(styles.tag, classNameBackgroundColorSwitch(color))}
    >
      {children}
    </div>
  );
};

export default Tag;
