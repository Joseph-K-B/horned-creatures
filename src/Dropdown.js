  import React, { Component } from 'react';

  class Dropdown extends Component {
      render() {
          const { stateChange, choices, label} = this.props
          return (
              <div className='dropdown-div'>
                  <label>{label}</label>
                  <select className='dropdown' onChange={stateChange}>
                      {choices.map((option) => (
                          <option value={option}>{option}</option>
                  ))}
                  </select>
              </div>
          );
      }
  }

  export default Dropdown