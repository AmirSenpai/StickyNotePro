import { useState, useEffect } from "react";

const Versions = () => {
  const [latestVersion, setLatestVersion] = useState(null);
  const [currentVersion] = useState("1.0.0"); // Set your current version here

  useEffect(() => {
    // Fetch the latest release from GitHub
    fetch("https://api.github.com/repos/YOUR_GITHUB_USERNAME/YOUR_REPO/releases/latest")
      .then((response) => response.json())
      .then((data) => {
        setLatestVersion(data.tag_name); // GitHub version name
      })
      .catch((error) => console.error("Error fetching version:", error));
  }, []);

  return (
    <div>
      <h3>Version: {currentVersion}</h3>
      {latestVersion && latestVersion !== currentVersion && (
        <div className="update-notification">
          <p>A new version ({latestVersion}) is available! Please update.</p>
        </div>
      )}
    </div>
  );
};

export default Versions;
