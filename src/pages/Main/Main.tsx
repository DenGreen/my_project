import React from "react";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import About from "./About/About"
import { ICollectionPortfolio, ICollectionSkills } from "../../models";
import "./Main.scss"

interface Iprops {
  props: [ICollectionPortfolio[], ICollectionSkills[]];
}

function Main({ props }: Iprops) {
  const [collectionPortfolio, collectionSkills] = props;
  return (
    <main className="main">
      <About/>
      <Skills props={collectionSkills} />
      <Portfolio props={collectionPortfolio} />
    </main>
  );
}

export default Main;
