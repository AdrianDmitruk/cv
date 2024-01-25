import "../scss/section/contact.scss";

import { ContactBlock } from ".";
import { useTranslation } from "react-i18next";
import dots from "../assets/svg/dots4.svg";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="contact">
      <img className="contact__dots" src={dots} alt="dots" />
      <div className="container">
        <div className="contact__title">
          <h3 className="contact__title-name">
            <span>#</span>
            {t("contacts")}
          </h3>
          <div className="contact__title-border"></div>
        </div>
        <ContactBlock />
      </div>
    </section>
  );
};
