import React from "react";
import Cord from "./Cord.tsx";
import api from "../../assets/api.svg";

const titles = ["", "", ""];

const Items = titles.map((title) => ({
  title,
  content: (
    <>
      {/*<h1>more content </h1>*/}
      {/*<p> more content</p>*/}
      <img src={api} alt="Logo" />
    </>
  ),
}));

const ItemsCord: React.FC = () => {
  return (
    <div>
      <h1> </h1>
      <Cord items={Items} />
    </div>
  );
};

export default ItemsCord;

/**
 * // : 2 replace the static titles array with fetched data
 * *
 import React, { useEffect, useState } from 'react';
import Cord from "./Cord.tsx";
import twin from "../../assets/twin.svg";

const ItemsCord: React.FC = () => {
  const [titles, setTitles] = useState<string[]>([]);

  useEffect(() => {
    // 2 Replace:   fetch data
    fetchTitles().then(fetchedTitles => {
      setTitles(fetchedTitles);
    });
  }, []);

  const Items = titles.map((title) => ({
    title,
    content: (
      <>
        <h1>more content </h1>
        <p> more content</p>
        <img src={twin} alt="Logo" />
      </>
    ),
  }));

  return (
    <div>
      <h1> </h1>
      <Cord items={Items} />
    </div>
  );
};

export default ItemsCord;

async function fetchTitles() {
  return ["Title 1", "Title 2"];
}
 */
