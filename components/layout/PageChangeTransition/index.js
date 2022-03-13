import styles from "@styles/layout/MobilePageChangeTransition.module.scss";
import {
  TransitionGroup,
  Transition as ReactTransition
} from "react-transition-group";
import { useSelector } from "react-redux";

const Transition = ({ children, location }) => {
  const transitionWay = useSelector((state) => state.transition.way);
  const timeout = useSelector((state) => state.transition.timeout);

  return (
    <TransitionGroup className={styles.container}>
      <ReactTransition
        key={location}
        timeout={{
          enter: timeout,
          exit: timeout
        }}
      >
        {(status) => (
          <div
            style={{
              ...transitionWay[status]
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};
export default Transition;
