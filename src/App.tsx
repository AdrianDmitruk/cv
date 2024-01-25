import "./scss/App.scss";
import React, { FC, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Spinner from "./components/Spinner";

const Works = React.lazy(() => import("./pages/Works"));
const AboutMe = React.lazy(() => import("./pages/AboutMe"));
const Contacts = React.lazy(() => import("./pages/Contacts"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route
          path="/works"
          element={
            <Suspense fallback={<Spinner />}>
              <Works />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Spinner />}>
              <AboutMe />
            </Suspense>
          }
        />
        <Route
          path="/contacts"
          element={
            <Suspense fallback={<Spinner />}>
              <Contacts />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<Spinner />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
