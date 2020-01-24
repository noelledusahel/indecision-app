class VisibilityToggle extends React.Component {
  constructor(props) {
    // override the constructor
    super(props)
    // bind method so that we dont loose reference to 'this'
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    // Initiate with this state
    this.state = {
      details: 'Here Are Some Details',
      visibility: false
    }

  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        // this method returns an object with the states visilibilty key toggled
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>{ this.state.details }</p>
          </div>
        )}
      </div>
    )
  }
}
// Render your React Component in the DOM, whether 'app' is located in index.html
ReactDOM.render(<VisibilityToggle />, document.getElementById('app') );

// const app = {
//   title: 'Visibility Toggle',
//   details: 'Here are some details',
//   visible: false
// }

// const toggleDetails = () => {
//   app.visible = !app.visible;
//   render()
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleDetails}>{
//         app.visible ? 'Hide Details' : 'Show Details'}
//       </button>
//       { app.visible && (
//         <div>
//           <p>{app.details}</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, document.getElementById('app'))
// }

// render();