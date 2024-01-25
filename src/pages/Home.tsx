import { FC } from "react";
import { First, Projects, Skills, AboutMain, Contact } from "../components";

const Home: FC = () => {
  return (
    <>
      <First />
      <Projects />
      <Skills />
      <AboutMain />
      <Contact />
    </>
  );
};

export default Home;
