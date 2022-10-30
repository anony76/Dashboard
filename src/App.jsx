/* Packages import */
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Pages import */
import { Dashboard } from "./pages";

/* Components import */
import { Loader } from "./components";

/* Utils import */
import { Pathname } from "./utils";

/* Style import */
import "./App.scss";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path={Pathname.DASHBOARD} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
