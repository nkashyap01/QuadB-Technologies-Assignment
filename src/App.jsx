import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./screens/Home";
import Summary from "./screens/Summary";
import Header from "./screens/Header";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summary/:id" element={<Summary />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
