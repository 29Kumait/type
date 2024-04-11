import React from "react";
import Collapsing from "../Components/UI/Collapsing";
import ItemsCord from "../Components/UI/ItemsCord";
import ModalDefault from "../Components/UI/ModalDefault.tsx";
import solo from "../assets/solo.svg";

const NewPage: React.FC = () => {
  return (
    <div>
      <ModalDefault />
      <ItemsCord />
      <Collapsing title="">
        <img src={solo} />
      </Collapsing>
    </div>
  );
};

export default NewPage;
