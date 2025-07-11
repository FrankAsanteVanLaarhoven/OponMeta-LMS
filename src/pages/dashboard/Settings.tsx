import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [provider, setProvider] = useState('openai');
  const [apiKey, setApiKey] = useState('');
  const [endpoint, setEndpoint] = useState('http://localhost:11434');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const s = localStorage.getItem('ai-settings');
    if (s) {
      const parsed = JSON.parse(s);
      setProvider(parsed.provider || 'openai');
      setApiKey(parsed.apiKey || '');
      setEndpoint(parsed.endpoint || 'http://localhost:11434');
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('ai-settings', JSON.stringify({ provider, apiKey, endpoint }));
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <div className="max-w-lg mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="mb-4">
        <label className="block font-medium mb-1">AI Provider</label>
        <select value={provider} onChange={e => setProvider(e.target.value)} className="border rounded p-1 w-full">
          <option value="openai">OpenAI</option>
          <option value="ollama">Ollama</option>
        </select>
      </div>
      {provider === 'openai' && (
        <div className="mb-4">
          <label className="block font-medium mb-1">OpenAI API Key</label>
          <input type="password" value={apiKey} onChange={e => setApiKey(e.target.value)} className="border rounded p-1 w-full" />
        </div>
      )}
      {provider === 'ollama' && (
        <div className="mb-4">
          <label className="block font-medium mb-1">Ollama Endpoint</label>
          <input type="text" value={endpoint} onChange={e => setEndpoint(e.target.value)} className="border rounded p-1 w-full" />
        </div>
      )}
      <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">
        Save
      </button>
      {saved && <span className="ml-3 text-green-600">Saved!</span>}
    </div>
  );
};

export default Settings; 