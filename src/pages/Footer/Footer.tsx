import React from "react";
import SocialLink from "./SocialLink/SocialLink";
import { ICollectionSocialLink } from "../../models";
import ContactUs from "../../Components/FormForSendingMessages/ContactUs";
import "./Footer.scss"

interface Iprops {
  props: ICollectionSocialLink[];
}

function Footer({ props }: Iprops) {
  const collectionSocialLink = props;

  return (
    <footer id="contacts" className="footer row-box">
      <div className="footer__wrap">
        <h3 className="footer__title">Контакты</h3>
        <p className="footer__text">
          Буду рад расмотреть вашы предложения и ответить на вопросы.
          <br /> Связаться со мной можно через форму обратной связи, в
          месенджерах и по e-mail.
        </p>
        <ContactUs />
        <SocialLink props={collectionSocialLink} />
      </div>
    </footer>
  );
}

export default Footer;
