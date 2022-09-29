import React from "react";
import MonitorHelper from "../../components/MonitorHelper";

const options = [
  {
    title: "Github",
    value: "https://github.com",
  },
  {
    title: "Fusion",
    value: "https://www.fusiongbs.com/",
  },
];

const Url = () => {
  return (
    <div>
      <MonitorHelper title="Select URL" options={options} name="url" />
    </div>
  );
};

export default Url;
