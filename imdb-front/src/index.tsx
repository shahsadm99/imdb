import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ResponsiveAppBar from "./Header/ResponsiveAppBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Producers from "./Producers/Producers";
import Actors from "./Actors/Actors";
import Movies from "./Movies/Movies";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
   
   
    <BrowserRouter>
      <Routes>
        <React.Fragment>
        
        <Route path="/appbar" element={<ResponsiveAppBar />} />

          <Route path="/" element={<App />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/producers" element={<Producers />} />
          <Route path="/actors" element={<Actors />} />
        </React.Fragment>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
