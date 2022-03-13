import parse from "html-react-parser";
import data from "@data/HomePageContent";
import styles from "@styles/molecules/HomePageContent.module.scss";

const HomePageContent = () => {
  return (
    <div className={styles.container}>
      {data.map((column) => (
        <div className={styles.column} key={column.uuid}>
          <h2>{column.title}</h2>
          {parse(column.description)}
        </div>
      ))}
    </div>
  );
};

export default HomePageContent;
