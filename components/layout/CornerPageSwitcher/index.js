import { useRef, useEffect } from "react";
import styles from "@styles/layout/CornerPageSwitcher.module.scss";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const CornerPageSwitcher = () => {
  const activePageSwitcherRef = useRef();
  const containerRef = useRef();
  const router = useRouter();
  const pageIndex = useSelector((state) => state.layout.pageIndex);
  useEffect(() => {
    console.log(pageIndex);
    if (typeof document !== "undefined") {
      //   console.log(containerRef.current.children[pageIndex]);
      activePageSwitcherRef.current.style.transform = `translateX(${containerRef.current.children[pageIndex].offsetLeft}px)`;
    }
  }, [pageIndex]);
  const handler = (e) =>
    (activePageSwitcherRef.current.style.transform = `translateX(${e.target.offsetLeft}px)`);
  return (
    <div className={styles.container} ref={containerRef}>
      <div
        onClick={(e) => {
          //   handler(e);
          router.push("/");
        }}
        className={styles.pageNumber}
      >
        1
      </div>
      <div
        onClick={(e) => {
          //   handler(e);
          router.push("/experience");
        }}
        className={styles.pageNumber}
      >
        2
      </div>
      <div
        onClick={(e) => {
          //   handler(e);
          router.push("/overview");
        }}
        className={styles.pageNumber}
      >
        3
      </div>
      <span ref={activePageSwitcherRef} className={styles.activePageSwitcher} />
    </div>
  );
};

export default CornerPageSwitcher;
