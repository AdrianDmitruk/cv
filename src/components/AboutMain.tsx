import { Link } from "react-router-dom";

import "../scss/section/about.scss";

import dots from "../assets/svg/dots3.svg";
import cub from "../assets/svg/cub3.svg";

import { useTranslation } from "react-i18next";
import { FC } from "react";

export const AboutMain: FC = () => {
  const { t } = useTranslation();
  return (
    <section className="about">
      <img className="about__dots" src={dots} alt="dots" />
      <img className="about__cub" src={cub} alt="cub" />
      <div className="container">
        <div className="about__wrap">
          <div className="about__left">
            <div className="about__left-title">
              <h3 className="about__title-name">
                <span>#</span>
                {t("about")}
              </h3>
              <div className="about__title-border"></div>
            </div>
            <div className="about__left-info">
              <p className="about__info-text">{t("abouttext")}</p>
              <p className="about__info-text">{t("abouttextsec")}</p>
              {/* <p className="about__info-text">
                Transforming my creativity and knowledge into a websites has
                been my passion for over a year. I have been helping various
                clients to establish their presence online. I always strive to
                learn about the newest technologies and frameworks.
              </p> */}
            </div>
            <Link className="about__left-link" to="/about">
              {t("aboutlink")} -&gt;
            </Link>
          </div>
          {/* <img className="about__right" src={about} alt="about" /> */}
        </div>
      </div>
    </section>
  );
};
