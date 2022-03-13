import usePageData from "@hooks/usePageData";

import HomePageContent from "@components/molecules/HomePageContent";
import Cropped from "@components/atoms/Cropped";

const PAGE_INDEX = 0;
const IS_SIDE_CONTENT_SHOWED = true;
const GLASSMORPHISM_SIDE = "horizontal";

const Home = () => {
  usePageData(PAGE_INDEX, IS_SIDE_CONTENT_SHOWED, GLASSMORPHISM_SIDE);
  return (
    <Cropped isCroppedVerticaly={GLASSMORPHISM_SIDE === "horizontal"}>
      <HomePageContent />
    </Cropped>
  );
};

export default Home;
