import { v4 as uuid } from "uuid";

const data = [
  {
    title: "About me",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada dignissim condimentum feugiat nisl. Ultrices libero massa enim, tristique turpis egestas cras. Ut quis duis consequat augue commodo. Eget arcu, condimentum aliquet fusce mauris aliquet massa. Purus dolor euismod porta eget eu. Sodales tellus sit quisque nullam nisi sed massa. Turpis ege.</br></br>Lacus, bibendum arcu ornare fames interdum risus. Non bibendum cursus enim, venenatis. Nunc egestas in ut massa praesent enim, egestas. Platea pellentesque nam odio.</p>`,
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
