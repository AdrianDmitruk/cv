import { FC } from "react";
import { IProjectData } from "../data/type";
import "../scss/section/smallprojects.scss";

interface ISmallProjectsProps {
  data: IProjectData;
}

export const SmallProjects: FC<ISmallProjectsProps> = ({ data }) => {
  const { stack, title, description, demo, code } = data;

  return (
    <div className="works__small-box">
      <div className="works__box-stack">{stack}</div>
      <div className="works__box-main">
        <h4 className="works__main-title">{title}</h4>
        <p className="works__main-subtitle">{description}</p>
        <div className="works__main-btn">
          <a
            className="works__btn-first"
            href={demo}
            target="_blank"
            rel="noreferrer"
          >
            Live &lt;~&gt;
          </a>
          <a
            className="works__btn-second"
            href={code}
            target="_blank"
            rel="noreferrer"
          >
            Github &gt;=
          </a>
        </div>
      </div>
    </div>
  );
};
