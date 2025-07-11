import React from 'react';

const Settings = () => (
  <div className="p-8 max-w-2xl">
    <h1 className="text-3xl font-bold mb-6">Settings</h1>
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Account</h2>
      <div className="bg-white rounded-lg shadow p-4 mb-2">Change email, password, and profile info here.</div>
    </div>
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Appearance</h2>
      <div className="bg-white rounded-lg shadow p-4 mb-2">Theme, font, and color settings.</div>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-2">Platform</h2>
      <div className="bg-white rounded-lg shadow p-4 mb-2">Platform-wide settings and integrations.</div>
    </div>
  </div>
);

export default Settings; 