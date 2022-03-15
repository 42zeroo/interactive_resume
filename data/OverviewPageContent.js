import { v4 as uuid } from "uuid";

const data = [
  {
    type: "column",
    rows: [
      {
        type: "row_education",
        title: "Education",
        values: [
          {
            uuid: uuid(),
            date: "2019 - Present",
            course: "Bachelor of Information Technology",
            spec: "Website programming",
            location: "Wyższa Szkoła Informatyki i Zarządzania",
            city: "Olsztyn"
          },
          {
            uuid: uuid(),
            date: "2013 - 2017",
            course: "Information Technology Technican",
            location: "Zespół Szkół Ekonomiczno-Handlowych",
            city: "Olsztyn"
          }
        ],

        uuid: uuid()
      },
      {
        type: "row_courses",
        title: "My courses",
        values: [
          {
            uuid: uuid(),
            date: "2020.04 - 2020.06",
            course: "Tester IT",
            company: "Humaneo",
            city: "Olsztyn"
          }
        ],
        uuid: uuid()
      }
    ]
  },
  {
    type: "column",
    rows: [
      {
        type: "row_soft_skills",
        title: "Soft skills",
        tags: [
          `Creativity`,
          `Ability to convert wireframes into HTML pages`,
          `Reading documentation from varius places`,
          `Adaptability`,
          `Open`,
          `Effective communication`,
          `Teamwork`,
          `Creating and keeping deadlines`,
          `Self work organization`
        ],
        uuid: uuid()
      },
      {
        type: "row_languages",
        title: "Languages",
        values: [
          {
            name: "Polish",
            level: 100
          },
          {
            name: "English",
            level: 65
          },
          {
            name: "German",
            level: 15
          }
        ],
        uuid: uuid()
      }
    ]
  }
];
export default data;
