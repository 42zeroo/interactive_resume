import React from "react";
import styles from "@styles/layout/NextPageButton.module.scss";
import { useRouter } from "next/router";
import next_page_data from "@data/NextPageButtons";

const NextPageButton = ({ pageIndex }) => {
  const { title, href } = next_page_data.find((e) => e.pageIndex === pageIndex);

  const router = useRouter();
  return (
    <button className={styles.nextPageButton} onClick={() => router.push(href)}>
      {title}
    </button>
  );
};

export default NextPageButton;
