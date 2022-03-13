import usePageData from "@hooks/usePageData";
import Cropped from "@components/atoms/Cropped";
import ScrollableContainer from "@components/atoms/ScrollableContainer";
import PortfolioCard from "@components/atoms/PortfolioCard";
import portfolio_cards_data from "@data/PortfolioCards";

const Portfolio = () => {
  usePageData(2, false, "vertical");
  return (
    <Cropped isCroppedVerticaly={true}>
      <ScrollableContainer className="portfolio-cards-container">
        {portfolio_cards_data.map((card) => (
          <PortfolioCard
            key={card.uuid}
            siteTitle={card.siteTitle}
            company={card.company}
            frameworks={card.frameworks}
            preview={card.preview}
            technologies={card.technologies}
          />
        ))}
      </ScrollableContainer>
    </Cropped>
  );
};

export default Portfolio;
