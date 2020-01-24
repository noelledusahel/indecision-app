import React from 'react';

import AddOptions from './AddOptions';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  // these have been converted from es6 Methods to class properties
  handleDeleteOptions = () => {
    // implicit return with an arrow function
    this.setState(() => ({ options: [] }));
  }

  handlePick = () => {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randNum]
    this.setState(() => ({
      selectedOption: option
    }))
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => (optionToRemove !== option))
    }))
  }

  handleAddOption = (option) => {
    if(!option) {
      return 'enter valid input'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'this item already exists';
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }))
  }

  handleCloseModal = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }

  render() {
    const subtitle = "Put your life in our hands"
    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0 }
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
          <AddOptions
            handleAddOption={this.handleAddOption} />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleCloseModal={this.handleCloseModal}/>
        </div>
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}
