import "./App.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div className="container w-25 bg-warning my-4">
        <Header />
      </div>
    </div>
  );
}

export default App;
