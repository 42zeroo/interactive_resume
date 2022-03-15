import data from "@data/OverviewPageContent";

import Tag from "@components/atoms/Tag";
import { CircularProgressbar } from "react-circular-progressbar";

import styles from "@styles/molecules/OverviewPageContent.module.scss";
import "react-circular-progressbar/dist/styles.css";

const OverviewPageContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {data.map((column) => (
          <div className={styles.column} key={column.uuid}>
            {column.rows.map((row) => (
              <div className={styles.row} key={column.uuid}>
                <h2>{row.title}</h2>
                {row.type === "row_education" &&
                  row.values.map((v) => (
                    <div className={styles.education} key={v.uuid}>
                      <h1>{v.date}</h1>
                      <h2>{v.course}</h2>
                      <h3>
                        {v.location}, {v.city}
                      </h3>
                      {v.spec && <h4>Spec: {v.spec}</h4>}
                    </div>
                  ))}
                {row.type === "row_courses" &&
                  row.values.map((v) => (
                    <div className={styles.courses} key={v.uuid}>
                      <h1>{v.date}</h1>
                      <h2>{v.course}</h2>
                      <h3>
                        {v.company}, {v.city}
                      </h3>
                    </div>
                  ))}
                {row.type === "row_soft_skills" && (
                  <div className={styles.softSkills} key={row.uuid}>
                    {row.tags.map((t, i) => (
                      <Tag key={`${row.uuid}-tag-${i}`} color={"grey"}>
                        {t}
                      </Tag>
                    ))}
                  </div>
                )}
                {row.type === "row_languages" && (
                  <div className={styles.languages} key={row.uuid}>
                    {row.values.map((l, i) => (
                      <div
                        className={styles.language}
                        key={`${row.uuid}-${i}-language`}
                      >
                        <CircularProgressbar
                          value={l.level}
                          text={`${l.name}`}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewPageContent;
