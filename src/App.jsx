import "./App.css";
import { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Content />
      </div>
    );
  }
}

export default App;
