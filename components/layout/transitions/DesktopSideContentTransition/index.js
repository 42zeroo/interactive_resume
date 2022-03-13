import React from "react";
import { useSelector } from "react-redux";
import {
  TransitionGroup,
  Transition as ReactTransition
} from "react-transition-group";
import styles from "@styles/layout/DesktopSideContentTransition.module.scss";
import DesktopSideContent from "./DesktopSideContent";

const DesktopSideContentTransition = () => {
  const {
    pageIndex,
    isSideContentShowed,
    isGlassmorphismBackgroundIsCroppedVerticaly
  } = useSelector((state) => state.layout);
  const { sideContentWay, sideContentTimeout } = useSelector(
    (state) => state.transition
  );

  return (
    <TransitionGroup className={styles.container}>
      <ReactTransition
        key={pageIndex}
        timeout={{
          enter: sideContentTimeout,
          exit: sideContentTimeout
        }}
      >
        {(status) =>
          !isGlassmorphismBackgroundIsCroppedVerticaly &&
          isSideContentShowed && (
            <div
              style={{
                ...sideContentWay[status]
              }}
              className={styles.wrapper}
            >
              <DesktopSideContent pageIndex={pageIndex} />
            </div>
          )
        }
      </ReactTransition>
    </TransitionGroup>
  );
};

export default DesktopSideContentTransition;
