import React from "react";

// We use Route in order to define the different routes of our application
//import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import PrinterList from "./components/printerList";

const App = () => {
  return (
    <div>
      <Navbar />
        <PrinterList />
    </div>
  );
};

export default App;