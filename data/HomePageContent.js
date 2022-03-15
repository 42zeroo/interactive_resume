import { v4 as uuid } from "uuid";

const data = [
  {
    title: "About me",
    description: `<p>From childhood was interested in "computers". From always wanted to work as developer. As now I'm finishing IT studies on "Web Development" profile. Everyday I'm improving my skills in app/web developing mostly in React and Drupal. As person I'm communicative guy who's like traveling.</p>`,
    uuid: uuid()
  },
  {
    title: "My goals",
    description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada dignissim condimentum feugiat nisl. Ultrices libero massa enim, tristique turpis.</p>`,
    uuid: uuid()
  }
];
export default data;
