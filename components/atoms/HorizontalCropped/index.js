import React from "react";
import styles from "@styles/atoms/HorizontalCropped.module.scss";

const HorizontalCropped = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default HorizontalCropped;
