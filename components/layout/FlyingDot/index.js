import useMousePosition from "@hooks/useMousePosition";
import styles from "@styles/layout/FlyingDot.module.scss";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { useEffect } from "react";

const FlyingDot = () => {
  const igbich = useSelector(
    (state) => state.layout.isGlassmorphismBackgroundIsCroppedVerticaly
  );
  const power = {
    x: 50,
    y: 50
  };
  const position = useMousePosition();

  useEffect(() => {
    console.log(position);
  }, [position]);

  return (
    <div className={styles.container}>
      <figure
        style={{
          transform: `translate(${position.x / power.x}px, ${
            position.y / power.y
          }px) rotate(-45deg)`
        }}
        className={classNames(
          styles.dot,
          igbich ? styles.isBackgroundVertical : ""
        )}
      />
    </div>
  );
};

export default FlyingDot;
