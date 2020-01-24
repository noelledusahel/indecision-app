class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this )
    this.handleAddOption = this.handleAddOption.bind(this)

    this.state = {
      options: props.options
    }
  }

  handleDeleteOptions() {
    // implicit return with an arrow function
    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randNum]
    alert(option)
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => (optionToRemove !== option))
    }))
  }

  handleAddOption(option) {
    if(!option) {
      return 'enter valid input'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'this item already exists';
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }))
  }

  render() {
    const subtitle = "Put your life in our hands"
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0 }
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOptions
          handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
     {props.subtitle && <h3>{props.subtitle}</h3>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision App'
}

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick}
        disabled={!props.hasOptions}>What should I do?
      </button>
    </div>
    );
}

const Option = (props) => {
  return (
    <div>
      <li>{props.optionText}
        <button
          onClick={(e) => {
            props.handleDeleteOption(props.optionText)
          }}>
          remove
        </button>
      </li>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Delete All</button>
      <ol>
        {
          props.options.map((item) => (
            <Option
              key={item}
              optionText={item}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </ol>
    </div>
  )
}

class AddOptions extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }


  handleAddOption(e) {
    e.preventDefault();
    const input = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(input)

    this.setState(() => ({ error }));

  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>&nbsp;
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
