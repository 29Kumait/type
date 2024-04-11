import React, { useState } from "react";

interface Collapsing {
  title: string;
  children: React.ReactNode;
}

const Collapsing: React.FC<Collapsing> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggle}>{title}</button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Collapsing;
