import React from 'react';
import './App.css';
import Headfile from './component/Headfile';
import DieuHuong from './component/DieuHuong';
import Footer from './component/Footer';
import List from './component/List';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
        <Headfile />
        <DieuHuong />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
