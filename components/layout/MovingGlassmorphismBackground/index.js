import React from "react";
import styles from "@styles/layout/MovingGlassmorphismBackground.module.scss";
import { useSelector } from "react-redux";

const MovingGlassmorphismBackground = () => {
  const igbich = useSelector(
    (state) => state.layout.isGlassmorphismBackgroundIsCroppedVerticaly
  );

  return <div className={igbich ? styles.horizontaly : styles.verticaly} />;
};

export default MovingGlassmorphismBackground;
