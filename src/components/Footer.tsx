import { Logo } from ".";
import "../scss/section/footer.scss";

import { useTranslation } from "react-i18next";

import git from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";
import telegram from "../assets/svg/telegram.svg";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <div className="footer__info-left">
            <div className="footer__left-contact">
              <Logo />
              <a
                className="footer__contact-email"
                href="mailto:dmitrukadrian@gmail.com"
              >
                dmitrukadrian@gmail.com
              </a>
            </div>
            <p className="footer__left-descript">{t("descfoot")}</p>
          </div>
          <div className="footer__info-right">
            <div className="footer__right-title">{t("media")}</div>
            <div className="footer__right-media">
              <a
                className="footer__media-link"
                href="https://github.com/AdrianDmitruk"
                target="_blank"
                rel="noreferrer"
              >
                <img className="footer__media-img" src={git} alt="git" />
              </a>
              <a
                className="footer__media-link"
                href="https://www.linkedin.com/in/adriandmitruk/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer__media-img"
                  src={linkedin}
                  alt="linkedin"
                />
              </a>
              <a
                className="footer__media-link"
                href="https://t.me/asdmitruk"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer__media-img"
                  src={telegram}
                  alt="telegram"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__copy">
          © Copyright 2022. Made by Adrian Dmitruk
        </div>
      </div>
    </footer>
  );
};
