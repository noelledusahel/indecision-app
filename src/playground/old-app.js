console.log("app.js is running!!")
//
const app = {
  title: 'First Reach App',
  subtitle: 'Go Head Girl!',
  options: []
}

const removeAll = () => {
  app.options = [];
  renderIndecisionApp();
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = '';
    renderIndecisionApp();
  }
}
// JSX - Javascript XML

const appRoot = document.getElementById('app');
const numbers = [44, 55, 66]

const onMakeDecision = () => {
   const randNum = Math.floor(Math.random() * app.options.length);
   const option = app.options[randNum]
   alert(option)
}

const renderIndecisionApp = () => {
  const template = (
    <div>
    <h1>{app.title} </h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? 'Here Are your options' : 'Nothing to see here'}
       <button disabled={ app.options.length === 0 } onClick={onMakeDecision}>What should we do</button><br />
      <button disabled={app.options.length === 0} onClick={removeAll}>Erase</button><br />
      <ol>
      {
        app.options.map((item) => <li key={item}> {item}</li>)
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Options</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot)

}

renderIndecisionApp();