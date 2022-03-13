import React from "react";
import styles from "@styles/atoms/ExperienceCard.module.scss";

const ExperienceCard = ({ jobTitle, company, from, to, responsibilities }) => {
  return (
    <div className={styles.container}>
      <h1>{jobTitle}</h1>
      <h2>@{company}</h2>
      <div className={styles.date}>
        <span>{from}</span>
        {` - `}
        <span>{to}</span>
      </div>
      <p>{responsibilities.description}</p>
      <ul>
        {responsibilities.data.map((r) => (
          <li key={r.uuid}>{r.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
