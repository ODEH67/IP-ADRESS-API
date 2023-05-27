import './App.css';
import APIFetch from './components/APIFetch';
import {Routes, Route } from "react-router-dom";
import APIFetchLocal from "./components/APIFetchLocal";
// import {useState } from "react";


function App() {

  return (
    <div className="App">
      <Routes>
            <Route  path="/IP-ADRESS-API" element={<APIFetch />} />
            <Route  path="/Hacking your location" element={<APIFetchLocal /> } />
            <Route  path="*" element={<h1 className="not-found">Error 404 page Not Found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
