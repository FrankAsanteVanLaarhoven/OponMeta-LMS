import React from 'react';

const Users = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-6">Users</h1>
    <div className="flex justify-between mb-4">
      <input type="text" placeholder="Search users..." className="border rounded px-4 py-2 w-1/3" />
      <button className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition">Invite User</button>
    </div>
    <div className="bg-white rounded-lg shadow p-6">
      <ul className="divide-y">
        <li className="py-4 flex justify-between items-center">
          <span>David Crawford (Instructor)</span>
          <button className="text-green-600 hover:underline">Edit</button>
        </li>
        <li className="py-4 flex justify-between items-center">
          <span>Luisa (Learner)</span>
          <button className="text-green-600 hover:underline">Edit</button>
        </li>
      </ul>
    </div>
  </div>
);

export default Users; 