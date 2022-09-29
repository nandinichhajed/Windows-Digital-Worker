import React from "react";
import MonitorHelper from "../../components/MonitorHelper";

const options = [
  {
    title: "Dummy File 1",
    value: "dummy-file-1",
  },
  {
    title: "Dummy File 2",
    value: "dummy-file-2",
  },
];

const FileSize = () => {
  return (
    <div>
      <MonitorHelper title="Select File" options={options} name="file" />
    </div>
  );
};

export default FileSize;
