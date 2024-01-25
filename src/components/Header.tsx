import React from "react";
import { useTranslation } from "react-i18next";
import "../scss/section/header.scss";

import { Logo } from ".";

import git from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";
import telegram from "../assets/svg/telegram.svg";
import close from "../assets/svg/close.svg";

import { NavLink } from "react-router-dom";

export const Header = () => {
  const [sidebar, setSidebar] = React.useState(false);
  const [lang, setLang] = React.useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="header">
      <div className="media">
        <div className="media__border"></div>
        <div className="media__icon">
          <a
            className="media__icon-link"
            href="https://github.com/AdrianDmitruk"
            target="_blank"
            rel="noreferrer"
          >
            <img src={git} alt="git" />
          </a>
          <a
            className="media__icon-link"
            href="https://www.linkedin.com/in/adriandmitruk/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            className="media__icon-link"
            href="https://t.me/asdmitruk"
            target="_blank"
            rel="noreferrer"
          >
            <img src={telegram} alt="telegram" />
          </a>
        </div>
      </div>
      <div className="container header__wrap">
        <Logo />
        <nav className="header__nav">
          <ul className="header__nav-ul">
            <li className="header__nav-li">
              <NavLink className="header__nav-link" to="/">
                <span className="header__link-icon">#</span>
                {t("home")}
              </NavLink>
            </li>
            <li className="header__nav-li">
              <NavLink className="header__nav-link" to="/works">
                <span className="header__link-icon">#</span>
                {t("works")}
              </NavLink>
            </li>
            <li className="header__nav-li">
              <NavLink className="header__nav-link" to="/about">
                <span className="header__link-icon">#</span>
                {t("about")}
              </NavLink>
            </li>
            <li className="header__nav-li">
              <NavLink className="header__nav-link" to="/contacts">
                <span className="header__link-icon">#</span>
                {t("contacts")}
              </NavLink>
            </li>
            <li className="header__nav-language">
              <div
                onClick={() => changeLanguage("en")}
                className={
                  lang
                    ? "header__language-link"
                    : "header__language-link header__language-link--active"
                }
              >
                <span onClick={() => setLang(false)}>EN</span>
              </div>
              <div className="header__language-border">/</div>
              <div
                onClick={() => changeLanguage("ru")}
                className={
                  lang
                    ? "header__language-link header__language-link--active"
                    : "header__language-link"
                }
              >
                <span onClick={() => setLang(true)}>RU</span>
              </div>
            </li>
            <div className="header__burger">
              <button onClick={showSidebar} className="header__burger-wrpa">
                <span className="header__burger-line"></span>
              </button>
            </div>
            <div
              className={
                sidebar ? "header__menu header__menu--active" : "header__menu"
              }
            >
              <div className="header__menu-mobile">
                <Logo />
                <img
                  onClick={showSidebar}
                  className="header__mobile-close"
                  src={close}
                  alt="close"
                />
              </div>
              <div className="header__menu-main">
                <ul onClick={showSidebar} className="header__main-ul">
                  <li className="header__main-li">
                    <NavLink className="header__main-link" to="/">
                      <span className="header__link-ic">#</span>
                      {t("home")}
                    </NavLink>
                  </li>
                  <li className="header__main-li">
                    <NavLink className="header__main-link" to="/works">
                      <span className="header__link-ic">#</span>
                      {t("works")}
                    </NavLink>
                  </li>
                  <li className="header__main-li">
                    <NavLink className="header__main-link" to="/about">
                      <span className="header__link-ic">#</span>
                      {t("about")}
                    </NavLink>
                  </li>
                  <li className="header__main-li">
                    <NavLink className="header__main-link" to="/contacts">
                      <span className="header__link-ic">#</span>
                      {t("contacts")}
                    </NavLink>
                  </li>
                  <li className="header__main-language">
                    <div
                      onClick={() => changeLanguage("en")}
                      className={
                        lang
                          ? "header__main-en"
                          : "header__main-en header__main-en--active"
                      }
                    >
                      <span onClick={() => setLang(false)}>EN</span>
                    </div>
                    <div className="header__language-border">/</div>
                    <div
                      onClick={() => changeLanguage("ru")}
                      className={
                        lang
                          ? "header__main-en header__main-en--active"
                          : "header__main-en"
                      }
                    >
                      <span onClick={() => setLang(true)}>RU</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="header__mobile-contact">
                <a
                  className="header__contact-icon"
                  href="https://github.com/AdrianDmitruk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="header__contact-img" src={git} alt="git" />
                </a>
                <a
                  className="header__contact-icon"
                  href="https://www.linkedin.com/in/adriandmitruk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="header__contact-img"
                    src={linkedin}
                    alt="linkedin"
                  />
                </a>
                <a
                  className="header__contact-icon"
                  href="https://t.me/asdmitruk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="header__contact-img"
                    src={telegram}
                    alt="telegram"
                  />
                </a>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};
