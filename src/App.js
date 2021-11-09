import React, { useState} from 'react';
import './App.css';

import Header from '../src/components/Header';
// import SideHustle from './components/SideHustle';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="App">
      <Header/>
      <Main searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Footer />
    </div>
  );
}

export default App;
