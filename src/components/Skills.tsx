import "../scss/section/skills.scss";
import { useTranslation } from "react-i18next";
import { SkillsBlock } from ".";

import skills from "../assets/skills.png";

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className="skills">
      <div className="container">
        <div className="skills__title">
          <h3 className="skills__title-name">
            <span>#</span>
            {t("skills")}
          </h3>
          <div className="skills__title-border"></div>
        </div>
        <div className="skills__wrap">
          <img className="skills__wrap-img" src={skills} alt="skills" />
          <div className="skills__wrap-box">
            <SkillsBlock />
          </div>
        </div>
      </div>
    </section>
  );
};
