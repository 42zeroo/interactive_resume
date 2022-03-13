import { v4 as uuid } from "uuid";

const generator = (length) => {
  const temp = [];
  for (var i of [...Array(length).keys()]) {
    temp.push({
      uuid: uuid(),
      siteTitle: `site.${i + 1}.org`,
      company: `Company ${i + 1}`,
      frameworks: [
        {
          uuid: uuid(),
          url: "/custom/blank.png",
          alt: "nextjs",
          width: 40,
          height: 41
        }
      ],
      preview: {
        url: "/custom/blank.png",
        alt: "preview",
        width: 381,
        height: 195
      },
      technologies: [
        {
          uuid: uuid(),
          url: "/custom/blank.png",
          alt: "nextjs",
          width: 40,
          height: 41
        },
        {
          url: "/custom/blank.png",
          alt: "nextjs",
          width: 40,
          height: 41
        }
      ]
    });
  }
  return temp;
};

const data = generator(7);

export default data;
