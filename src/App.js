import React, { Component } from "react";
import './App.css'
import images from "./data.js";
import Dropdown from "./Dropdown";
import ImageList from './ImageList.js'
// import Dropdown from './Dropdown.js'

class App extends Component{
  state = {
    keyword: 'All',
    horns: 'All'
  };
  keywordChange = (e) => {
    this.setState({ keyword: e.target.value });
  };
  hornChange = (e) => {
    const numHorns = e.target.value
    this.setState({horns: numHorns});
  }
  
  
  render() {
  const choices = ['All', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon']
  const  hornChoices = ['All' , 1, 2, 3, 100];
  
  const filterKeys = images.filter(
    (image) => this.state.keyword === 'All' || image.keyword === this.state.keyword
  );
  const filterHorns = filterKeys.filter(
    (image) => this.state.horns === 'All' || image.horns === Number(this.state.horns)
  )
  
  return (
    <div className="App">
      <h1>Horned Beasts</h1>
      <Dropdown
        label='keyword'
        choices={choices}
        changeEvent={this.keywordChange}
        />
        <Dropdown
        label='horns'
        choices={hornChoices}
        changeEvent={this.hornChange}
        />
        <ImageList images={filterHorns} />
        </div>
        );
      }
    }
    
    export default App;
    
    /* <select onChange={this.keywordChange}>
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

    < ImageList horns={filterKeys} /> */