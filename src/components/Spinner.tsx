import { FC } from "react";
import "../scss/section/spinner.scss";

const Spinner: FC = () => {
  return (
    <div className="spinner">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
