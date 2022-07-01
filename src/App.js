import "./App.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="main">
      <div className="container d-flex justify-content-center ">
        <div className="App  mt-2">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
