import React from "react";
import styles from "@styles/atoms/Cropped.module.scss";
import { useSelector } from "react-redux";

const Cropped = ({ children }) => {
  const igbich = useSelector(
    (state) => state.layout.isGlassmorphismBackgroundIsCroppedVerticaly
  );

  return (
    <div className={igbich ? styles.horizontaly : styles.verticaly}>
      {children}
    </div>
  );
};

export default Cropped;
