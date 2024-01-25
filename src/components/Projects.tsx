import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ProjectsBox, mainProjectData } from ".";

import "../scss/section/projects.scss";

import dots from "../assets/svg/dots2.svg";
import cub from "../assets/svg/cub2.svg";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className="projects">
      <img className="projects__dots" src={dots} alt="dots" />
      <img className="projects__cub" src={cub} alt="cub" />
      <div className="container">
        <div className="projects__header">
          <div className="projects__header-left">
            <div className="projects__left-name">
              <span>#</span>
              {t("projects")}
            </div>
            <div className="projects__left-border"></div>
          </div>
          <Link className="projects__header-right" to="/works">
            {t("view")} ~~&gt;
          </Link>
        </div>
        <div className="projects__main">
          {mainProjectData.slice(0, 3).map((item, index) => (
            <ProjectsBox key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
