import HomePageContent from "@components/molecules/HomePageContent";
import Cropped from "@components/atoms/Cropped";
import usePageData from "@hooks/usePageData";

export default function Home() {
  const headerText = "Feel free to inject any fun copies here.";
  usePageData(
    0,
    { icon_path: "icon_path", text: headerText },
    true,
    "horizontal"
  );
  return (
    <Cropped isCroppedVerticaly={false}>
      <HomePageContent />
    </Cropped>
  );
}
