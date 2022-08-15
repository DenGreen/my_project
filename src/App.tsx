import "./App.scss";
import BtnUp from "./Components/BtnUp/BtnUp";
import HeaderPage from "./pages/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import {collectionPages, collectionPortfolio, collectionSkills, collectionSocialLink} from "./data/data";
import Main from "./pages/Main/Main"
import Footer from "./pages/Footer/Footer"

AOS.init();

function App() {
  return (
    <>
      <BtnUp />
      <HeaderPage props={collectionPages} />
      <Main props={[collectionPortfolio, collectionSkills]}/>
      <Footer props={collectionSocialLink}/>
    </>
  );
}

export default App;
