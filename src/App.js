import React, { useState } from 'react';
import Map from './Map';
import SearchBar from './searchbar';



return (
  <div style={{ height: "100vh", width: "100%" }}>
    <SearchBar onSearch={handleSearch} />
    <Map onSourceSelect={handleSourceSelect} onDestinationSelect={handleDestinationSelect} />
  </div>
);

function App() {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);

  const handleSourceSelect = (location) => {
    setSource(location);
    console.log("Source selected:", location);
  };

  const handleDestinationSelect = (location) => {
    setDestination(location);
    console.log("Destination selected:", location);
  };

  const handleSearch = (query) => {
  // Implement your search logic
  };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Map onSourceSelect={handleSourceSelect} onDestinationSelect={handleDestinationSelect} />
      <div>
        <h3>Selected Source: {source ? source.name : "None"}</h3>
        <h3>Selected Destination: {destination ? destination.name : "None"}</h3>
      </div>
    </div>
  );
}

export default App;
