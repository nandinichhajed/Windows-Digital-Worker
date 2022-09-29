import React from "react";
import MonitorHelper from "../../components/MonitorHelper";

const options = [
  {
    title: "Dummy Service 1",
    value: "dummy-service-1",
  },
  {
    title: "Dummy Service 2",
    value: "dummy-service-2",
  },
];

const Services = () => {
  return (
    <div>
      <MonitorHelper title="Select Service" options={options} name="service" />
    </div>
  );
};

export default Services;
