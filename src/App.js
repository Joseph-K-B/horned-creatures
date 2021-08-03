import React, { Component } from "react";
import './App.css'
import images from "./data.js";
import ImageList from './ImageList.js'


// import logo from './logo.svg';
// import './App.css';

class App extends Component{
  state = {
    keyword: 'All',
  };
  stateChange = (e) => {
    this.setState({ keyword: e.target.value });
  };
render() {
  const filterHorns = images.filter(
    (images) => this.state.keyword === 'All' || images.title === this.state.keyword
  );
  
  return (
    <div className="App">
      <h1>Horned Beasts</h1>
      <select selection={this.stateChange}>
        <option value='All'>All</option>
        <option value='narwhal'>narwhal</option>
        <option value='rhino'>rhino</option>
        <option value='unicorn'>unicorn</option>
        <option value='unilego'>unilego</option>
        <option value='triceratops'>triceratops</option>
        <option value='markhor'>markhor</option>
        <option value='mouflon'>mouflon</option>
        <option value='addax'>addax</option>
        <option value='chameleon'>chameleon</option>
        <option value='lizard'>lizard</option>
        <option value='dragon'></option>
        
      </select>

      < ImageList horns={filterHorns} />
    </div>
    );
  }
}

export default App;
