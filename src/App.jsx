import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Models from "./components/Models";
import History from "./components/History";
import Split from "./components/Split";
import "./App.css";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Models />
            <History />
            <Split />
        </>
    );
}

export default App;
