import { v4 as uuid } from "uuid";
const data = [
  {
    uuid: uuid(),
    pageIndex: 0,
    title: "Go to experience",
    href: "/",
    nextHref: "/experience"
  },
  {
    uuid: uuid(),
    pageIndex: 1,
    title: "Go to portfolio",
    href: "/experience",
    nextHref: "/portfolio"
  },
  {
    uuid: uuid(),
    pageIndex: 2,
    title: "Go to overview",
    href: "/portfolio",
    nextHref: "/overview"
  },
  {
    uuid: uuid(),
    pageIndex: 3,
    href: "/overview",
    title: "Go to start",
    nextHref: "/"
  }
];

export default data;
