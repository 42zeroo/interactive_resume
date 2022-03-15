import React from "react";
import FlyingDot from "./FlyingDot";
import MovingGlassmorphismBackground from "./MovingGlassmorphismBackground";
import CornerPageSwitcher from "./CornerPageSwitcher";
import classNames from "classnames";
import { useSelector } from "react-redux";
import styles from "@styles/layout/Main.module.scss";
import useLoader from "@hooks/useLoader";
// import DesktopSideContent from "./DesktopSideContentTransition";

const Layout = ({ children }) => {
  const igbich = useSelector(
    (state) => state.layout.isGlassmorphismBackgroundIsCroppedVerticaly
  );

  const isFront = useSelector((state) => state.layout.isFront);
  useLoader();
  React.useEffect(() => {
    console.log({ igbich });
  }, [igbich]);
  return (
    <div
      className={classNames([
        styles.appContainer,
        isFront && styles.isFrontPage
      ])}
    >
      <FlyingDot />
      <MovingGlassmorphismBackground />
      {children}
      <CornerPageSwitcher />
    </div>
  );
};

export default Layout;
