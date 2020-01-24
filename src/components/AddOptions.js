import React from 'react';

export default class AddOptions extends React.Component {

  state = {
     error: undefined
  }

  handleAddOption = (e) =>  {
    e.preventDefault();
    const input = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(input)
    this.setState(() => ({ error }));
  }
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option"></input>&nbsp;
          <button className="button">Add Option</button>
        </form>
      </div>
    )
  }
}