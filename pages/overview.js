import usePageData from "@hooks/usePageData";
import Cropped from "@components/atoms/Cropped";

const Overview = () => {
  const headerText = "Overview";
  usePageData(3, true, "horizontal");
  return <Cropped isCroppedVerticaly={false}>OVERVIEW</Cropped>;
};

export default Overview;
