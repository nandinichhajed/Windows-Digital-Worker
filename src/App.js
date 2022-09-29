import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import {
  Home,
  Monitor,
  Service,
  Services,
  Ports,
  Url,
  FileSize,
} from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/service" element={<Service />} />
        <Route path="/monitor/services" element={<Services />} />
        <Route path="/monitor/ports" element={<Ports />} />
        <Route path="/monitor/url" element={<Url />} />
        <Route path="/monitor/file-size" element={<FileSize />} />
      </Routes>
    </div>
  );
};

export default App;
