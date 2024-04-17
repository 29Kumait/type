import React from "react";
import Collapsing from "../Components/UI/Collapsing.tsx";
import ModalDefault from "../Components/UI/ModalDefault.tsx";
import ItemsCord from "../Components/UI/ItemsCord";
import LanguageProficiency from "../Components/Data/LanguageProficiency.tsx";

const NewPage: React.FC = () => {
  return (
    <div>
      <Collapsing showTitle="Show" hideTitle="Hide" children />
      <ModalDefault />
      <ItemsCord />
      <LanguageProficiency />
    </div>
  );
};

export default NewPage;

/**
 *
 *

**
 * // using handleToggle in the NewPage:
 *
 import React, { useState } from "react";
 import ItemsCord from "../Components/UI/ItemsCord";
 import ModalDefault from "../Components/UI/ModalDefault.tsx";
 import Collapsing from "../Components/UI/Collapsing.tsx";

 const NewPage: React.FC = () => {
 const [title, setTitle] = useState("Show");

 const handleToggle = (isOpen: boolean) => {
 setTitle(isOpen ? "Hide" : "Show");
 };

 return (
 <div>
 <ModalDefault />
 <ItemsCord />
 <Collapsing title={title} onToggle={handleToggle} children />
 </div>
 );
 };

 export default NewPage;

 *
 *
 **
 // String is set by Collapsing:
 import React from "react";
 import ItemsCord from "../Components/UI/ItemsCord";
 import ModalDefault from "../Components/UI/ModalDefault.tsx";
 import Collapsing from "../Components/UI/Collapsing.tsx";

 const NewPage: React.FC = () => {
 return (
 <div>
 <ModalDefault />
 <ItemsCord />
 <Collapsing children />
 </div>
 );
 };

 export default NewPage;

 */
