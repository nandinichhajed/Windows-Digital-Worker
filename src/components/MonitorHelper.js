import React from "react";
import "./MonitorHelper.css";

const MonitorHelper = ({ title, options, name }) => {
  return (
    <div className="monitorHelper">
      <div className="below">
        <h1>{title}</h1>
        <form>
          <select name={name} id={name}>
            {options &&
              options.map((opt) => (
                <option key={opt.name} value={opt.value}>
                  {opt.title}
                </option>
              ))}
          </select>
        </form>
      </div>
    </div>
  );
};

export default MonitorHelper;
