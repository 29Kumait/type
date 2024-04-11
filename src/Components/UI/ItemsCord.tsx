import React from "react";
import Cord from "./Cord.tsx";
import twin from "../../assets/twin.svg";

const titles = ["", ""];

const Items = titles.map((title) => ({
  title,
  content: (
    <>
      <img src={twin} alt="Logo" /> ⚛
    </>
  ),
}));
const ItemsCord: React.FC = () => {
  return (
    <div>
      <h1>⚛︎</h1>
      <Cord items={Items} />
    </div>
  );
};

export default ItemsCord;

// const Items = [
//     {
//         title: "",
//         content: (
//             <>
//                 <img src={twin} alt="Logo" /> ⚛
//             </>
//         ),
//     },
//     {
//         title: "",
//         content: (
//             <>
//                 <img src={twin} alt="Logo" /> ⚛
//             </>
//         ),
//     },
// ];
