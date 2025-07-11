import React from 'react';

const MiniCourses = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-6">Mini-Courses</h1>
    <div className="flex justify-between mb-4">
      <input type="text" placeholder="Search mini-courses..." className="border rounded px-4 py-2 w-1/3" />
      <a href="/mini-courses/create" className="bg-indigo-500 text-white px-4 py-2 rounded shadow hover:bg-indigo-600 transition">Create Mini-Course</a>
    </div>
    <div className="bg-white rounded-lg shadow p-6">
      <ul className="divide-y">
        <li className="py-4 flex justify-between items-center">
          <span>Financial Freedom Fridays</span>
          <a href="/mini-courses/1/edit" className="text-indigo-500 hover:underline">Edit</a>
        </li>
        <li className="py-4 flex justify-between items-center">
          <span>Quick Start to Project Management</span>
          <a href="/mini-courses/2/edit" className="text-indigo-500 hover:underline">Edit</a>
        </li>
      </ul>
    </div>
  </div>
);

export default MiniCourses; 