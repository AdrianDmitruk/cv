import { FC } from "react";
import { useTranslation } from "react-i18next";
import "../scss/section/works.scss";

import {
  ProjectsBox,
  SmallProjects,
  htmlProjectData,
  mainProjectData,
  smallProjectData,
} from "../components";

const Works: FC = () => {
  const { t } = useTranslation();
  return (
    <section className="works">
      <div className="container">
        <h3 className="works__title page-title">
          <span>/</span>
          {t("projects")}
        </h3>
        <h4 className="works__subtitle">
          <span>#</span>
          {t("apps")}
        </h4>
        <div className="projects__main">
          {mainProjectData.map((item, index) => (
            <ProjectsBox key={index} data={item} />
          ))}
        </div>
        <h4 className="works__subtitle works__subtitlewrap">
          <span>#</span>
          {t("html")}
        </h4>
        <div className="projects__main">
          {htmlProjectData.map((item, index) => (
            <ProjectsBox key={index} data={item} />
          ))}
        </div>
        <div className="works__small">
          <h3 className="works__title page-title">
            <span>/</span>
            {t("small")}
          </h3>
          <div className="works__small-wrapper">
            {smallProjectData.map((item, index) => (
              <SmallProjects key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
