import { v4 as uuid } from "uuid";
const data = [
  {
    uuid: uuid(),
    pageIndex: 0,
    title: "Here should be super slogan for this site.",
    image: {
      url: "/icons/person.svg",
      alt: "person",
      width: 56,
      height: 56
    }
  },
  {
    uuid: uuid(),
    pageIndex: 1,
    title: "Revelant places that I worked at",
    image: {
      url: "/icons/work.svg",
      alt: "work",
      width: 56,
      height: 56
    }
  },
  {
    uuid: uuid(),
    pageIndex: 2,
    title: "Sites that I have made",
    image: {
      url: "/icons/portfolio.svg",
      alt: "portfolio",
      width: 56,
      height: 56
    }
  },
  {
    uuid: uuid(),
    pageIndex: 3,
    title: "Other relevant facts you may like to know",
    image: {
      url: "/icons/misc.svg",
      alt: "misc",
      width: 56,
      height: 56
    }
  }
];

export default data;
