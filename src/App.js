import React from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <h1>Hello From React</h1>
      <Header></Header>
    </div>
  );
}

//when rendering from a calss intead of funtion in a component
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>;
//   }
// }

export default App;
