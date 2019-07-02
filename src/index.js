import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";



const App = () => {
  return (
    <div style={{ width: 100 + "%" }}>
      <Header />
    </div>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));