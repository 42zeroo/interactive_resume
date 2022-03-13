import usePageData from "@hooks/usePageData";
import Cropped from "@components/atoms/Cropped";
import ScrollableContainer from "@components/atoms/ScrollableContainer";
import ExperienceCard from "@components/atoms/ExperienceCard";
import experience_cards_data from "@data/ExperienceCards";

const Experience = () => {
  usePageData(1, false, "vertical");
  return (
    <Cropped isCroppedVerticaly={true}>
      <ScrollableContainer>
        {experience_cards_data.map((card) => (
          <ExperienceCard
            key={card.uuid}
            jobTitle={card.jobTitle}
            company={card.company}
            from={card.from}
            to={card.to}
            responsibilities={card.responsibilities}
          />
        ))}
      </ScrollableContainer>
    </Cropped>
  );
};

export default Experience;
