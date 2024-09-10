import React from "react";
import { reportsList } from "../../lib/lists";
import Report from "../../components/cards/Report";

const Reports = () => {
  return (
    <div className="reports_container">
      {reportsList.map((report) => (
        <Report
          key={report.id}
          image={report.icon}
          text={report.text}
          file={report.file}
        />
      ))}
    </div>
  );
};

export default Reports;
