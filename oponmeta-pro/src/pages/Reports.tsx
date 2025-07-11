import React, { useState } from 'react';

const Reports = () => {
  const [reportType, setReportType] = useState('My Courses');
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <div className="flex gap-4 mb-4">
        <select value={reportType} onChange={e => setReportType(e.target.value)} className="border rounded px-4 py-2">
          <option>My Courses</option>
          <option>My Learners</option>
          <option>My Certificates</option>
          <option>My Groups</option>
          <option>My Resources</option>
          <option>My Newsfeed</option>
        </select>
        <input type="date" className="border rounded px-4 py-2" />
        <input type="date" className="border rounded px-4 py-2" />
        <button className="bg-indigo-700 text-white px-4 py-2 rounded shadow hover:bg-indigo-800 transition">Apply filters</button>
        <button className="bg-gray-200 px-4 py-2 rounded shadow hover:bg-gray-300 transition">Reset</button>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Learn the Basics of Golf</td>
              <td>Course</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Financial Freedom Fridays</td>
              <td>Mini-Course</td>
              <td>Draft</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports; 