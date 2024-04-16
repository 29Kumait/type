import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[]; // items array
}

const Cord: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => toggleItem(index)}>{item.title}</button>
          {openIndex === index && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Cord;

/**
 *  Add collapse/expand functionality :

 import React, { useState } from "react";
 import * as stylex from "@stylexjs/stylex";

 interface AccordionItem {
 title: string;
 content: React.ReactNode;
 }

 interface AccordionProps {
 items: AccordionItem[];
 }

 const Cord: React.FC<AccordionProps> = ({ items }) => {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

 const toggleItem = (index: number) => {
 setOpenIndex(openIndex === index ? null : index);
 };

 return (
 <div>
 {items.map((item, index) => (
 <div key={index}>
 <button onClick={() => toggleItem(index)}>{item.title}</button>
 <div
 {...stylex.props(
 styles.contentContainer,
 openIndex === index
 ? styles.contentExpanded
 : styles.contentCollapsed,
 )}
 >
 {openIndex === index && <div>{item.content}</div>}
 </div>
 </div>
 ))}
 </div>
 );
 };

 const styles = stylex.create({
 contentContainer: {
 overflow: "hidden",
 transition: "max-height 0.3s ease",
 },
 contentExpanded: {
 maxHeight: "2000px",
 },
 contentCollapsed: {
 maxHeight: "0px",
 },
 });

 export default Cord;
 */
