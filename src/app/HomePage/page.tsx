import { Navbar } from '@/components/component/navbar'
import React from 'react'
import { db } from '../config/db'

const HomePage = async () => {

    const [disasters] = await (await db()).query("SELECT * FROM DisasterAlerts;");
    const [inicdents] = await (await db()).query("SELECT * FROM IncidentReports;");

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="container mx-auto p-4 my-10">
        <div className="border-2 border-gray-400 flex flex-wrap -mx-4">
          <div className="border-2 w-full p-4 border-gray-400 md:w-1/2 px-4 mb-8">
            <div> 
              <h2 className="text-2xl font-bold mb-4 text-center">Disaster Alerts</h2>
              <div className="alert-box grid grid-cols-1 gap-4 h-96 overflow-y-auto">
                {(disasters as any).map((i: any) => <div key={i.id} className="alert bg-red-500 text-white p-4 rounded">{i.Type} Warning in {i.Location}</div>)}
                
              </div>
            </div>
          </div>
          <div className="border-2 w-full p-4 border-gray-400 md:w-1/2 px-4 mb-8">
            <div className="incident-reports">
              <h2 className="text-2xl font-bold mb-4 text-center">Incident Reports</h2>
              <div className="report-box grid grid-cols-1 gap-4 h-96 overflow-y-auto">
                {(inicdents as any).map((i: any) => <div key={i.id} className="report bg-blue-500 text-white p-4 rounded">Report: {i.Type} in {i.Location}</div>)}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-72">
      </div>
        <div className="about-us bg-gray-800 text-white p-4 text-center"> 
        <h2 className="text-2xl font-bold mb-2">About Us</h2>
        <p>NDRS - Trying To Make Our Country Safer !</p>
      </div>
    </div>
  )
}

export default HomePage