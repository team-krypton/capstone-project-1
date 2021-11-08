import React, { useState, useEffect} from 'react';
import './App.css';

import Header from '../src/components/Header';
// import SideHustle from './components/SideHustle';
import Google from './components/Google';
import SearchBar from './components/SearchBar';

function App() {

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="App">
      <Header/>
      <main>
        <div class="hero-container">
          {searchTerm ? <p className="text-result">{searchTerm}</p> : <Google/>}
        </div>
        <SearchBar query={searchTerm} setQuery={setSearchTerm}/>
      </main>
    </div>
  );
}

export default App;
