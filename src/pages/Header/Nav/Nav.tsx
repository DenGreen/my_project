import React, { useRef } from "react";
import { ICollectionPages } from "../../../models";
import "./Nav.scss"

interface Iprops {
  props: ICollectionPages[];
}

function Nav({ props }: Iprops) {
  const collectionPages = props;
  const checkedStatusInput = useRef<HTMLInputElement>(null);
  const onClickGoToElement = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const navLink = event.target as HTMLLinkElement;
    const blockID = navLink.getAttribute("href")!.slice(1);

    document.getElementById(blockID)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const onClickCheckboxChecked = () => {
    checkedStatusInput.current!.checked = false;
  };

  const OnClickListLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClickGoToElement(event);
    onClickCheckboxChecked();
  };

  return (
    <nav className="nav">
      <input className="checkbox" ref={checkedStatusInput} type="checkbox" />
      <div className="hamburger">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <ul className="pagination pagination__transform">
        {collectionPages.map((value) => {
          return (
            <li className="pagination__item" key={value.id}>
              <a
                className="pagination__link"
                href={"#" + value.href}
                onClick={OnClickListLink}
              >
                {value.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
