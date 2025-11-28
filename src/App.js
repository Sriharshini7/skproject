import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import EMI from './pages/emi';
import './App.css';

function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        Navbar / >
        <
        main className = "main-content" >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/properties"
        element = { < Properties / > }
        /> <
        Route path = "/property/:id"
        element = { < PropertyDetail / > }
        /> <
        Route path = "/property/:id/emi"
        element = { < EMI / > }
        /> <
        /Routes> <
        /main> <
        /div> <
        /Router>
    );
}

export default App;