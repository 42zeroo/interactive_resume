import styles from "@styles/layout/PageHeaderTransition.module.scss";
import {
  TransitionGroup,
  Transition as ReactTransition
} from "react-transition-group";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import PageHeader from "@components/molecules/PageHeader";

const PageHeaderTransition = () => {
  const pageHeaderTransitionWay = useSelector(
    (state) => state.transition.pageHeaderTransitionWay
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
              ...pageHeaderTransitionWay[status]
            }}
            className={styles.wrapper}
          >
            <PageHeader pageIndex={pageIndex} />
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};
export default PageHeaderTransition;
