import classNames from "classnames";
import styles from "@styles/atoms/Link.module.scss";

const Link = ({ url, title, underscore, className }, props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={classNames(
        styles.link,
        underscore && styles.underscore,
        className
      )}
      {...props}
    >
      {title}
    </a>
  );
};

export default Link;
