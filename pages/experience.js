import usePageData from "@hooks/usePageData";
import Cropped from "@components/atoms/Cropped";

const Experience = () => {
  const headerText = "Places that I worked at.";
  usePageData(
    1,
    { icon_path: "icon_path", text: headerText },
    false,
    "vertical"
  );
  return <Cropped isCroppedVerticaly={true}>EXPERIENCE</Cropped>;
};

export default Experience;
