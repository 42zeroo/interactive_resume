import React from "react";
import styles from "@styles/atoms/ScrollableContainer.module.scss";
import ScrollContainer from "react-indiana-drag-scroll";
import classNames from "classnames";

const ScrollableContainer = ({ children, className }) => {
  return (
    <ScrollContainer className={classNames(styles.container, className)}>
      <div className={styles.wrapper}>{children}</div>
    </ScrollContainer>
  );
};

export default ScrollableContainer;
