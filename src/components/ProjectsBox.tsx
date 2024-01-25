import { FC } from "react";
import "../scss/section/projectsbox.scss";
import { IProjectData } from "../data/type";

interface IProjectBoxProps {
  data: IProjectData;
}

export const ProjectsBox: FC<IProjectBoxProps> = ({ data }) => {
  const { imageUrl, stack, title, description, demo, code } = data;

  return (
    <div className="projects__main">
      <div className="projects__main-box">
        <img className="projects__box-img" src={imageUrl} alt="content" />
        <div className="projects__box-state">{stack}</div>
        <div className="projects__box-info">
          <h4 className="projects__info-name">{title}</h4>
          <p className="projects__info-desc">{description}</p>
          <div className="projects__info-btn">
            <a
              className="projects__btn-first"
              href={demo}
              target="_blank"
              rel="noreferrer"
            >
              Live &lt;~&gt;
            </a>
            <a
              className="projects__btn-second"
              href={code}
              target="_blank"
              rel="noreferrer"
            >
              Github &gt;=
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
