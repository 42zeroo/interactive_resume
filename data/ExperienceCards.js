import { v4 as uuid } from "uuid";
// const data = [
//   {
//     jobTitle: "jt1",
//     company: "c1",
//     from: "f1",
//     to: "t1",
//     responsibilities: {
//       description: "Lorem ipsum",
//       data: [
//         {
//           uuid: uuid(),
//           text: "c1r1"
//         },
//         {
//           uuid: uuid(),
//           text: "c1r2"
//         },
//         {
//           uuid: uuid(),
//           text: "c1r3"
//         }
//       ]
//     }
//   },
// ];

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

const data = generator(7, 10);

export default data;
