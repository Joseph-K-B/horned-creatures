import React, { Component } from "react";
import './App.css'
import './styles.css'
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
    <section className="App">
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
        <div className='image-div'>
        <ImageList images={filterHorns} />
        </div>
        </section>
        );
      }
    }
    
    export default App;