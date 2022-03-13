import { v4 as uuid } from "uuid";
const data = [
  {
    uuid: uuid(),
    pageIndex: 0,
    title: "Go to experience",
    href: "/experience"
  },
  {
    uuid: uuid(),
    pageIndex: 1,
    title: "Go to overview",
    href: "/overview"
  },
  {
    uuid: uuid(),
    pageIndex: 2,
    title: "Go to portfolio",
    href: "/"
  }
];

export default data;
