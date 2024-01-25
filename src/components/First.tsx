import { FC } from "react";

import { Link } from "react-router-dom";

import "../scss/section/first.scss";

import { useTranslation } from "react-i18next";

import logoBg from "../assets/svg/logo-bg.svg";
import dots from "../assets/svg/dots.svg";
import dmitruk from "../assets/dmitruk-2.png";

export const First: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="first">
      <div className="container first__container">
        <div className="first__left">
          <h2 className="first__left-title">
            {t("firsttitle")} junior{" "}
            <span className="first__left-index">front-end</span>{" "}
            {t("firsttitlesecond")}
          </h2>
          <p className="first__left-subtitle">
            {t("subtitle")}
            <a href="https://innodom.by/" target="_blank" rel="noreferrer">
              InnoDom
            </a>
            {t("subtitlesecond")}
            <a
              href="https://www.udemy.com/ru/"
              target="_blank"
              rel="noreferrer"
            >
              Udemy{" "}
            </a>{" "}
            {t("subtitleand")}
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              YouTube
            </a>
            {t("subtitleclev")}
            {t("subtitleend")}
          </p>
          <a
            className="first__left-btn"
            href="https://t.me/asdmitruk"
            target="_blank"
            rel="noreferrer"
          >
            {t("contactme")}
          </a>
        </div>
        <div className="first__right">
          <img className="first__right-bg" src={logoBg} alt="logoBg" />
          <img className="first__right-dots" src={dots} alt="dots" />
          <img className="first__right-img" src={dmitruk} alt="dmitruk" />
          <div className="first__right-footer">
            <h4 className="first__footer-title">
              {t("port")}
              <Link className="first__title-link" to="/works">
                {t("portf")}
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
