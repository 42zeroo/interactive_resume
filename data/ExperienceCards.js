import { v4 as uuid } from "uuid";

//data generator
const responsibilitiesDataGenerator = (index, length) => {
  const temp = [];
  for (var j of [...Array(length).keys()]) {
    temp.push({
      uuid: uuid(),
      text: `c${index}r${j}`
    });
  }
  return temp;
};
const generator = (length, rLength) => {
  const temp = [];
  for (var i of [...Array(length).keys()]) {
    temp.push({
      uuid: uuid(),
      jobTitle: `Job title ${i + 1}`,
      company: `Company ${i + 1}`,
      from: `200${i + 1}`,
      to: `200${i + 2}`,
      responsibilities: {
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada dignissim condimentum feugiat nisl. Ultrices libero massa enim, tristique turpis.`,
        data: responsibilitiesDataGenerator(i, rLength)
      }
    });
  }
  return temp;
};

// const data = generator(7, 10);

const data = [
  {
    jobTitle: "Web developer",
    company: "reccly.pl",
    from: "Jul, 2022",
    to: "Present",
    responsibilities: {
      description:
        "Under reccly.pl brand we built couple sites. E-commerce, landing pages and specifics apps.",
      data: [
        {
          uuid: uuid(),
          text: "Plan projects"
        },
        {
          uuid: uuid(),
          text: "Develop backend features"
        },
        {
          uuid: uuid(),
          text: "Build REST API"
        },
        {
          uuid: uuid(),
          text: "Moving design to React app"
        }
      ]
    }
  },
  {
    jobTitle: "Junior Web Developer",
    company: "sugo",
    from: "Feb, 2021",
    to: "Jun, 2021",
    responsibilities: {
      description: `After couple months as support of freelancer i become his "left hand". I did one project in Gatsby.JS and I did site for marketing campaign in Drupal for Swiss branch of one biggest insurance company.`,
      data: [
        {
          uuid: uuid(),
          text: "Develop whole process of site creation under mentor support"
        },
        {
          uuid: uuid(),
          text: "Move Figma layouts to code"
        }
      ]
    }
  },
  {
    jobTitle: "Intern Web Developer",
    company: "Agencja Innowacji, Olszyn",
    from: "Apr, 2021",
    to: "Nov, 2021",
    responsibilities: {
      description: `I had to did intern for studies so I join local to help them making decoupled sites with backend in Wordpress or Drupal and with frontend in Gatsby. Secondarily i'm automatize small process like generating documents and marketing images for socials.`,
      data: [
        {
          uuid: uuid(),
          text: "Work with WP and Drupal as headless CMS"
        },
        {
          uuid: uuid(),
          text: "Develop frontend features in Gatsby.js"
        },
        {
          uuid: uuid(),
          text: "Design layout parts in Figma"
        }
      ]
    }
  },
  {
    jobTitle: "Internship as Drupal Developer",
    company: "Adam Okwieka",
    from: "Dec, 2020",
    to: "Feb, 2021",
    responsibilities: {
      description: `I did my best to support freelancer in small tasks in Drupal environment. I'm learning how to work with this CMS in in big projects. I grinded my problem solving skills and exploring Drupal world with mentoring by professional software developer.`,
      data: [
        {
          uuid: uuid(),
          text: "Write custom Drupal modules and create custom views"
        },
        {
          uuid: uuid(),
          text: "Develop frontend in Drupal env with twig templates"
        }
      ]
    }
  },
  {
    jobTitle: "Internship as Raporting System Developer",
    company: "Innomatyka, Olsztyn",
    from: "Sep, 2019",
    to: "Feb, 2020",
    responsibilities: {
      description: `It was my first commercial developing experience. I built system for automation of paper-work in local industrial automation company. Users was able to add daily report by selecting the right day in calendar app. Each working hour could be described in report. `,
      data: [
        {
          uuid: uuid(),
          text: "Administrative routes with CRUD operations"
        },
        {
          uuid: uuid(),
          text: "Build with jQuery, PHP, MySQL, Bootstrap"
        },
        {
          uuid: uuid(),
          text: "Generating monthly summary in .pdf"
        },
        {
          uuid: uuid(),
          text: "Cookie + session login system"
        },
        {
          uuid: uuid(),
          text: "Self build calendar app"
        }
      ]
    }
  }
];
export default data;
