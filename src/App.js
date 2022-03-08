import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MiniDrawer from './components/sidebar';
import Home from './pages/Home'
import ListInstructure from './pages/ListInstructure'
import ListKelas from './pages/ListKelas'
import DetailInstructure from "./pages/DetailInstructure";
import DetailClass from "./pages/DetailClass";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"

const App = ({children}) => {

  return (
    <div>
      <Router>
      <MiniDrawer>
      <Routes >
        <Route path="/" exact element={<Home />} />
        <Route path="/list-class" element={<ListKelas />} />
        <Route path="/list-instructure" element={<ListInstructure />} />
        <Route path="/detail-instructure/:id" element={<DetailInstructure />} />
        <Route path="/detail-class/:id" element={<DetailClass />} />
      </Routes >
      </MiniDrawer>
    </Router>
  </div>
    )
}
export default App;