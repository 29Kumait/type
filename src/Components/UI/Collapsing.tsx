/**
 Customize the Collapsing component to manage the states between two strings without using handleToggle in the NewPage component
 */
import React, { useState } from "react";
import david from "../../assets/david.svg";

interface CollapsingProps {
  showTitle: string;
  hideTitle: string;
  children: React.ReactNode;
}

const Collapsing: React.FC<CollapsingProps> = ({
  showTitle,
  hideTitle,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const title = isOpen ? hideTitle : showTitle;

  return (
    <div>
      <button onClick={toggle}>{title}</button>
      {isOpen && <div>{children}</div>}
      {isOpen && <img src={david} alt="Logo" />}
    </div>
  );
};

export default Collapsing;

/**

 *
 ** // using handleToggle in the NewPage:
 *
 import React, { useState } from "react";
 import solo from "../../assets/solo.svg";

 interface CollapsingProps {
 title: string;
 children: React.ReactNode;
 onToggle: (isOpen: boolean) => void;
 }

 const Collapsing: React.FC<CollapsingProps> = ({
 title,
 children,
 onToggle,
 }) => {
 const [isOpen, setIsOpen] = useState(false);

 const toggle = () => {
 const newIsOpen = !isOpen;
 setIsOpen(newIsOpen);
 onToggle(newIsOpen);
 };

 return (
 <div>
 <button onClick={toggle}>{title}</button>
 {isOpen && <div>{children}</div>}
 {isOpen && <img src={solo} alt="Logo" />}
 </div>
 );
 };

 export default Collapsing;



 *

 **
 *
 * // String is set by Collapsing:

 import React, { useState } from "react";
 import solo from "../../assets/solo.svg";

 interface CollapsingProps {
 children: React.ReactNode;
 }

 const Collapsing: React.FC<CollapsingProps> = ({ children }) => {
 const [isOpen, setIsOpen] = useState(false);

 const toggle = () => setIsOpen(!isOpen);

 const title = isOpen ? "Hide" : "Show";

 return (
 <div>
 <button onClick={toggle}>{title}</button>
 {isOpen && <div>{children}</div>}
 {isOpen && <img src={solo} alt="Logo" />}
 </div>
 );
 };

 export default Collapsing;
 */
