import classNames from "classnames";
import styles from "@styles/atoms/Link.module.scss";

const Link = ({ url, title, underscore, className }, props) => {
  return (
    <a
      href={url}
      target="_blank"
      className={classNames(styles.link, underscore && "underscore", className)}
      {...props}
    >
      {title}
    </a>
  );
};

export default Link;
