import React, { useEffect } from "react";
import './BtnUp.scss'

export default function BtnUp() {
 
  useEffect(() => {
    const btnUp = document.querySelector('.btn-up');
    
    window.addEventListener("scroll", function () {
      btnUp.hidden = window.pageYOffset < 100;
    });
  },[])
  

  const onClickBtnUp = () => {
    document.querySelector(".row-box").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <span className="btn-up" onClick={onClickBtnUp} hidden>
    </span>
  );
}
