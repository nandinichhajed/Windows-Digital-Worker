import React from "react";

import ServiceImage from "../img/servicepage.svg";
import "./css/Service.css";

const options = [
  {
    title: "Start",
    value: "START",
  },
  {
    title: "Stop",
    value: "STOP",
  },
  {
    title: "Pause",
    value: "PAUSE",
  },
  {
    title: "Resume",
    value: "RESUME",
  },
];

const Service = () => {
  return (
    <div>
      <div className="service-page">
        <div className="content">
          <img src={ServiceImage} alt="Monitor" />

          <div className="buttonContainer">
            <input
              type="text"
              name="service"
              id="service"
              placeholder="Enter the name of Service"
            />
            <form>
              <select name="service" id="service">
                {options &&
                  options.map((opt) => (
                    <option key={opt.name} value={opt.value}>
                      {opt.title}
                    </option>
                  ))}
              </select>
            </form>
            <p className="primary">Check</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
