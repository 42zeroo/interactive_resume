import styles from "@styles/layout/NextPageTransition.module.scss";
import {
  TransitionGroup,
  Transition as ReactTransition
} from "react-transition-group";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import NextPageButton from "./NextPageButton";

const NextPageTransition = () => {
  const nextButtonTransitionWay = useSelector(
    (state) => state.transition.nextButtonTransitionWay
  );
  const timeout = useSelector((state) => state.transition.timeout);
  const router = useRouter();
  const { pageIndex } = useSelector((state) => state.layout);
  const location = router.pathname;
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
              ...nextButtonTransitionWay[status]
            }}
            className={styles.wrapper}
          >
            <NextPageButton pageIndex={pageIndex} />
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};
export default NextPageTransition;
