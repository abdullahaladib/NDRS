import React from "react";
import { Navbar } from "@/components/component/navbar";
import { UserNavbar } from "@/components/component/UserNavbar";
import { db } from "../config/db";
import { GetNavbar } from "../(service)/get-navbar";

const IncidentReport = async () => {
  const [inicdents] = await (
    await db()
  ).query("SELECT * FROM IncidentReports;");

  return (
    <div>
      <GetNavbar />
      <div className="bg-white p-5 font-sans">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-black border-4 m-4 border-blue-300 rounded p-3 text-center">
            Incident Reports
          </h1>

          {(inicdents as any).map((i: any) => (
            <div key={i.id} className="bg-gray-200 rounded-lg p-5 mb-5 shadow">
              <h2 className="text-gray-800 text-2xl font-semibold mb-2">
                Type: {i.Type}
              </h2>
              <p>
                <strong>Location:</strong> {i.Location}
              </p>
              <p>
                <strong>Details:</strong> {i.Details}
              </p>
              <p>
                <strong>Resource Type:</strong> {i.Resource_Type}
              </p>
              <p>
                <strong>Status:</strong> {i.Status ? i.Status : "Not Defined"}
              </p>
              <p>
                <strong>Time/Date:</strong> {new Date(i.Time).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncidentReport;
