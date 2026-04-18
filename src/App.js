import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <div className="hero-section">
        <h1 className="hero-title">
           IT Career Hub
        </h1>

        <p className="hero-sub">
          One Place For Coding • Learning • Jobs • AI • Career Growth
        </p>
      </div>

      <Home />

      <footer className="footer">
        <h3>Built for IT Freshers & Developers 💻</h3>
        <p>© 2026 IT Career Hub | All in One IT Platform</p>
      </footer>

    </div>
  );
}

export default App;
