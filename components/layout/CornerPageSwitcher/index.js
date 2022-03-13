import { useRef, useEffect } from "react";
import styles from "@styles/layout/CornerPageSwitcher.module.scss";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import next_page_buttons_data from "@data/NextPageButtons";
const CornerPageSwitcher = () => {
  const activePageSwitcherRef = useRef();
  const containerRef = useRef();
  const router = useRouter();
  const pageIndex = useSelector((state) => state.layout.pageIndex);
  useEffect(() => {
    if (typeof document !== "undefined") {
      activePageSwitcherRef.current.style.transform = `translateX(${containerRef.current.children[pageIndex].offsetLeft}px)`;
    }
  }, [pageIndex]);

  return (
    <div className={styles.container} ref={containerRef}>
      {next_page_buttons_data.map((data, index) => (
        <div
          key={data.uuid}
          onClick={() => {
            router.push(data?.href);
          }}
          className={styles.pageNumber}
        >
          {index + 1}
        </div>
      ))}

      <span ref={activePageSwitcherRef} className={styles.activePageSwitcher} />
    </div>
  );
};

export default CornerPageSwitcher;
