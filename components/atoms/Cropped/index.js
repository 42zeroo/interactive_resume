import React from "react";
import styles from "@styles/atoms/Cropped.module.scss";
import { useSelector } from "react-redux";

const Cropped = ({ isCroppedVerticaly, children }) => {
  return (
    <div className={isCroppedVerticaly ? styles.horizontaly : styles.verticaly}>
      {children}
    </div>
  );
};

export default Cropped;
