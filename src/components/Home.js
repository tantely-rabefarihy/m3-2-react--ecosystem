import React from "react";
import ListingGrid from "./ListingGrid";
import data, { items } from "../data";

// const fruitsArr = (props) => {
//   return Object.values(items);
// };
// console.log(fruitsArr());

const Home = () => {
  const fruitsArr = Object.values(items);
  console.log(fruitsArr);
  return (
    <div>
      <p>
        Fruit emporium sells the finest fruits from this world and beyond.
        <br></br>
        Browse items:
      </p>

      <ListingGrid itemList={fruitsArr} />
    </div>
  );
};

export default Home;
