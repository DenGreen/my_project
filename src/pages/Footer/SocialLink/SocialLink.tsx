import React from "react";
import { ICollectionSocialLink } from "../../../models";
import "./SocialLink.scss"

interface Iprops {
  props: ICollectionSocialLink[];
}

function SocialLink({ props }: Iprops) {
  const collectionSocialLink = props;

  return (
    <div className="social-link__box">
      {collectionSocialLink.map((value) => {
        return (
          <a
            href={`${value.link}`}
            className="social-link__linck"
            target="_blank"
            rel="noreferrer noopener"
            key={value.id}
          >
            <img
              src={`../img/social_img/${value.img}`}
              className="social-link__ico"
              alt=""
              title={value.title}
            />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLink;
