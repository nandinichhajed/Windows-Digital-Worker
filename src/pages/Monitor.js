import React from "react";
import MonitorImage from "../img/monitor.png";
import { Link } from "react-router-dom";
import "./css/Monitor.css";

const Monitor = () => {
  return (
    <div className="monitor">
      <div className="content">
        <img src={MonitorImage} alt="Monitor" />
        <div className="buttonContainer">
          <Link to="/monitor/url" className="primary">
            URL
          </Link>
          <Link to="/monitor/ports" className="primary">
            Ports
          </Link>
          <Link className="primary">CPU & Memory Utilization</Link>
          <Link to="/monitor/services" className="primary">
            Services
          </Link>
          <Link to="/monitor/file-size" className="primary">
            File Size
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
