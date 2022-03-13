import React from "react";
import side_content_data from "@data/SideContent";
import styles from "@styles/layout/DesktopSideContent.module.scss";
import Link from "@components/atoms/Link";
import Tag from "@components/atoms/Tag";

const DesktopSideContent = ({ pageIndex }) => {
  const data = side_content_data.find((e) => e.pageIndex === pageIndex);
  return (
    <>
      {typeof data?.header !== "undefined" && (
        <div className={styles.header}>
          <h1>{data?.header?.title}</h1>
          {typeof data?.header?.links !== "undefined" && (
            <div className="links">
              {data?.header?.links.map((link) => (
                <Link
                  key={data.uuid + link.url}
                  url={link.url}
                  title={link.title}
                  underscore={link.underscore}
                />
              ))}
            </div>
          )}
        </div>
      )}
      {typeof data?.content !== "undefined" && (
        <div className={styles.content}>
          {typeof data?.content?.tags !== "undefined" && (
            <div className="tags">
              {data?.content?.tags?.map((tag) => (
                <Tag key={data?.uuid + tag} color="white">
                  {tag}
                </Tag>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DesktopSideContent;
