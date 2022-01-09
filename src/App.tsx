import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
function App() {
    return (
        <div className="App">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Get Started</Button>
            <Button variant="tertiary">Get Started</Button>
        </div>
    );
}

export default App;
