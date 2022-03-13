import { v4 as uuid } from "uuid";

const data = [
  {
    uuid: uuid(),
    pageIndex: 0,
    page: "index",
    header: {
      title: "Norbert Kulus",
      links: [
        {
          url: "https://dev.reccly.pl",
          title: "dev.reccly.pl",
          underscore: false
        },
        {
          url: "mailto:norbert.kuluss@gmail.com",
          title: "norbert.kuluss@gmail.com",
          underscore: false
        }
      ]
    },
    content: {
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "redux",
        "Next.js",
        "Node.js",
        "express",
        "PHP",
        "Drupal",
        "docker",
        "python",
        "Figma",
        "Photoshop",
        "Agile"
      ]
    }
  },
  {
    uuid: uuid(),
    pageIndex: 2,
    page: "overview",
    header: {
      title: "My spaces",
      links: [
        {
          url: "https://github.com/42zeroo",
          title: "Github",
          underscore: true
        },
        {
          url: "https://linked.in/42zeroo",
          title: "LinkedIn",
          underscore: true
        }
      ]
    }
  }
];

export default data;
