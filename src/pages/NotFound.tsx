import { Link } from "react-router-dom";
import "../scss/section/error.scss";
import { FC } from "react";

const NotFound: FC = () => {
  return (
    <section className="error">
      <div className="error__title">404</div>
      <Link className="error__link" to="/">
        home page
      </Link>
    </section>
  );
};

export default NotFound;
