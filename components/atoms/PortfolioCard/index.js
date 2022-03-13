import React from "react";
import styles from "@styles/atoms/PortfolioCard.module.scss";
import Image from "@components/atoms/Image";

const PortfolioCard = ({
  siteTitle,
  company,
  frameworks,
  preview,
  technologies
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <h1>{siteTitle}</h1>
          <h2>@{company}</h2>
        </div>
        <div className={styles.headerFrameworks}>
          {frameworks.map((f) => (
            <Image
              key={f.uuid}
              width={f.width}
              height={f.height}
              alt={f.alt}
              src={f.url}
            />
          ))}
        </div>
      </div>
      <div className={styles.preview}>
        <Image
          width={preview.width}
          height={preview.height}
          alt={preview.alt}
          src={preview.url}
        />
      </div>
      <div className={styles.technologies}>
        {technologies.map((t) => (
          <Image
            key={t.uuid}
            width={t.width}
            height={t.height}
            alt={t.alt}
            src={t.url}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
