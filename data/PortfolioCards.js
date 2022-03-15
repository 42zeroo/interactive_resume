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
        },
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

// const data = generator(7);

const data = [
  {
    uuid: uuid(),
    siteTitle: `webrand.pl`,
    siteUrl: "https://webrand.pl",
    company: `reccly`,
    frameworks: [
      {
        uuid: uuid(),
        url: "/portfolio/frameworks/next.png",
        alt: "nextjs",
        width: 85,
        height: 51
      }
    ],
    preview: {
      url: "/portfolio/webrand.png",
      alt: "webrand",
      width: 381,
      height: 195
    },
    technologies: [
      {
        uuid: uuid(),
        url: "/portfolio/technologies/styled.png",
        alt: "<styled></styled>",
        width: 65,
        height: 75
      }
    ]
  },
  {
    uuid: uuid(),
    siteTitle: `dream4cars.pl`,
    siteUrl: "https://dream4cars.pl",
    company: `reccly`,
    frameworks: [
      {
        uuid: uuid(),
        url: "/portfolio/frameworks/next.png",
        alt: "nextjs",
        width: 85,
        height: 51
      },
      {
        uuid: uuid(),
        url: "/portfolio/frameworks/drupal.png",
        alt: "nextjs",
        width: 46,
        height: 53
      }
    ],
    preview: {
      url: "/portfolio/dream4cars.png",
      alt: "drem4cars",
      width: 381,
      height: 195
    },
    technologies: [
      {
        uuid: uuid(),
        url: "/portfolio/technologies/styled.png",
        alt: "<styled></styled>",
        width: 65,
        height: 75
      },
      {
        uuid: uuid(),
        url: "/portfolio/technologies/redux.png",
        alt: "<styled></styled>",
        width: 65,
        height: 75
      }
    ]
  },
  {
    uuid: uuid(),
    siteTitle: `uwolnijpiekno.pl`,
    siteUrl: "https://uwolnijpiekno.pl",
    company: `reccly`,
    frameworks: [
      {
        uuid: uuid(),
        url: "/portfolio/frameworks/next.png",
        alt: "nextjs",
        width: 85,
        height: 51
      }
    ],
    preview: {
      url: "/portfolio/uwolnijpiekno.png",
      alt: "drem4cars",
      width: 381,
      height: 195
    },
    technologies: [
      {
        uuid: uuid(),
        url: "/portfolio/technologies/styled.png",
        alt: "<styled></styled>",
        width: 65,
        height: 75
      }
    ]
  },
  {
    uuid: uuid(),
    siteTitle: `shareyourfire.ch`,
    siteUrl: "https://shareyourfire.ch",
    company: `sugo`,
    frameworks: [
      {
        uuid: uuid(),
        url: "/portfolio/frameworks/drupal.png",
        alt: "nextjs",
        width: 46,
        height: 53
      }
    ],
    preview: {
      url: "/portfolio/shareyourfire.png",
      alt: "syf",
      width: 381,
      height: 195
    },
    technologies: [
      {
        uuid: uuid(),
        url: "/portfolio/technologies/htmlcss.png",
        alt: "htmlcss",
        width: 102,
        height: 66
      }
    ]
  },
  {
    uuid: uuid(),
    siteTitle: `tipply.pl - kreator nowego konta`,
    siteUrl: "https://tipply.pl",
    company: `sugo`,
    frameworks: [
      {
        uuid: uuid(),
        url: "/portfolio/frameworks/react.png",
        alt: "nextjs",
        width: 58,
        height: 50
      }
    ],
    preview: {
      url: "/portfolio/tipply.png",
      alt: "syf",
      width: 381,
      height: 195
    },
    technologies: [
      {
        uuid: uuid(),
        url: "/portfolio/technologies/styled.png",
        alt: "htmlcss",
        width: 65,
        height: 75
      },
      {
        uuid: uuid(),
        url: "/portfolio/technologies/babylon.png",
        alt: "htmlcss",
        width: 65,
        height: 66
      }
    ]
  }
];

export default data;
