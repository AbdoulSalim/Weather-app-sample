import React from 'react';

// Importing components
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Hey React!</h1>
      <SearchBar />
    </div>
  );
}

export default App;
