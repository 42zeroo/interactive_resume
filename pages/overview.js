import usePageData from "@hooks/usePageData";
import Cropped from "@components/atoms/Cropped";

const Overview = () => {
  const headerText = "Overview";
  usePageData(
    2,
    { icon_path: "icon_path", text: headerText },
    true,
    "horizontal"
  );
  return <Cropped isCroppedVerticaly={false}>OVERVIEW</Cropped>;
};

export default Overview;
