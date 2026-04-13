"use client";
import React from 'react';
import { Navbar } from '@/components/component/navbar'
import { UserNavbar } from '@/components/component/UserNavbar';
import { getUser } from '../(service)/get-user';
import { GetNavbar } from '../(service)/get-navbar';
import { incidentSubmit } from '../(service)/incident-submit';

const ReportForm = () => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as unknown as any;
    const data = {
      incident_type: target.incident_type.value,
      incident_details: target.incident_details.value,
      location: target.incident_location.value,
      resource_type: target.resource_type.value,
      contact: target.contact_number.value,
    };
    
    await incidentSubmit(data);
    alert("Incident Reported")
  }
  return (
    
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-1/2 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-gray-700 text-2xl mb-6">Incident Report Form</h2>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="incident-type" className="mb-2 text-gray-600">Incident Type:</label>
          <select id="incident-type" name="incident_type" className="p-3 mb-4 border border-gray-300 rounded" required>
            <option value="">--Select Incident Type--</option>
            <option value="Flood">Flood</option>
            <option value="Earthquake">Earthquake</option>
            <option value="Drought">Drought</option>
            <option value="Cyclone">Cyclone</option>
            <option value="Tsunami">Tsunami</option>
            <option value="Landslide">Landslide</option>
            <option value="Fire Breakout">Fire Breakout</option>
          </select>

          <label htmlFor="incident-details" className="mb-2 text-gray-600">Incident Details:</label>
          <textarea id="incident-details" name="incident_details" rows={4} placeholder="Provide detailed description" className="p-3 mb-4 border border-gray-300 rounded resize-y" required></textarea>

          <label htmlFor="incident-location" className="mb-2 text-gray-600">Incident Location:</label>
          <input type="text" id="incident-location" name="incident_location" placeholder="Enter the location" className="p-3 mb-4 border border-gray-300 rounded" required />

          <label htmlFor="resource-type" className="mb-2 text-gray-600">Resource Type Needed (Optional):</label>
          <input type="text" id="resource-type" name="resource_type" placeholder="Specify resources if needed (e.g., Water, Food, Medicine)" className="p-3 mb-4 border border-gray-300 rounded" />

          <label htmlFor="contact-number" className="mb-2 text-gray-600">Contact Number:</label>
          <input type="number" id="contact-number" name="contact_number" placeholder="Enter your contact number" className="p-3 mb-4 border border-gray-300 rounded" required />

          <input type="submit" value="Submit Report" className="mt-4 p-3 bg-teal-600 text-white rounded cursor-pointer hover:bg-slateblue transition-all" />
        </form>
      </div>
    </div>
  );
};

export { ReportForm };
