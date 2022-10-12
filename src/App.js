import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Navbar/>
        </div>
        <div>
          <h2>Bienvenido a mi WEB</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
