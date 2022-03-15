import usePageData from "@hooks/usePageData";
import Cropped from "@components/atoms/Cropped";
import OverviewPageContent from "@components/molecules/OverviewPageContent";

const PAGE_INDEX = 3;
const IS_SIDE_CONTENT_SHOWED = true;
const GLASSMORPHISM_SIDE = "horizontal";

const Overview = () => {
  usePageData(PAGE_INDEX, IS_SIDE_CONTENT_SHOWED, GLASSMORPHISM_SIDE);

  return (
    <Cropped isCroppedVerticaly={false}>
      <OverviewPageContent />
    </Cropped>
  );
};

export default Overview;
