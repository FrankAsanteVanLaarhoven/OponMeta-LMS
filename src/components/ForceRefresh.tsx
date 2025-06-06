import { useEffect } from 'react';

const ForceRefresh = () => {
  useEffect(() => {
    // Force refresh to ensure new colors are applied
    const timestamp = Date.now();
    if (!localStorage.getItem('colorUpdate') || localStorage.getItem('colorUpdate') !== timestamp.toString()) {
      localStorage.setItem('colorUpdate', timestamp.toString());
      window.location.reload();
    }
  }, []);

  return null;
};

export default ForceRefresh;