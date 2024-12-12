import { useState, useEffect } from 'react';
import versionData from './version.json';

const Versions = () => {
  const [version, setVersion] = useState('');

  useEffect(() => {
    setVersion(versionData.version);
  }, []);

  return (
    <div>
      <h1>Version: {version}</h1>
    </div>
  );
};

export default Versions;
