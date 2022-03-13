import { v4 as uuid } from "uuid";
const data = [
  {
    uuid: uuid(),
    pageIndex: 0,
    title: "Feel free to inject any fun copies here.",
    image: {
      url: "/custom/blank.png",
      alt: "card_image_alt",
      width: 56,
      height: 56
    }
  },
  {
    uuid: uuid(),
    pageIndex: 1,
    title: "Places that I worked at",
    image: {
      url: "/custom/blank.png",
      alt: "card_image_alt",
      width: 56,
      height: 56
    }
  },
  {
    uuid: uuid(),
    pageIndex: 2,
    title: "Sites that I have made",
    image: {
      url: "/custom/blank.png",
      alt: "card_image_alt",
      width: 56,
      height: 56
    }
  },
  {
    uuid: uuid(),
    pageIndex: 3,
    title: "Can be Miscellaneous",
    image: {
      url: "/custom/blank.png",
      alt: "card_image_alt",
      width: 56,
      height: 56
    }
  }
];

export default data;
