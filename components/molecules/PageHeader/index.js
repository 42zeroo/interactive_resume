import Image from "@components/atoms/Image";
import styles from "@styles/molecules/PageHeader.module.scss";
import page_header_data from "@data/PageHeader";

const PageHeader = ({ pageIndex }) => {
  const { title, image } = page_header_data.find(
    (e) => e.pageIndex === pageIndex
  );
  const { width, height, url, alt } = image;
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image width={width} height={height} src={url} alt={alt} />
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default PageHeader;
