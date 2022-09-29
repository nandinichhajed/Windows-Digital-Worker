import React from "react";
import MonitorHelper from "../../components/MonitorHelper";

const options = [
  {
    title: "443",
    value: "443",
  },
  {
    title: "80",
    value: "80",
  },
];

const Ports = () => {
  return (
    <div>
      <MonitorHelper title="Select Port" options={options} name="port" />
    </div>
  );
};

export default Ports;
