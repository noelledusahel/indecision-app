class Counter extends React.Component {
  constructor(props) {
    // override the super method to set up method binding
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleRemoveOne = this.handleRemoveOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    // Default State Object
    this.state = {
      count: props.count
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }

  handleRemoveOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Count: { this.state.count }</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleRemoveOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0
}


ReactDOM.render(<Counter count={41}/>, document.getElementById('app') );
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCount();
// }

// const minusOne = () => {
//   count--;
//   renderCount();
// }
// const reset = () => {
//   count = 0;
//   renderCount();
// }


// const renderCount = () => {
//   const templateTwo = (
//     <div>
//       <h1> Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
//   ReactDOM.render(templateTwo, appRoot);
// }

// renderCount();