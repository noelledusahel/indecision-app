import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const Layout = (props) => {
  return (
    <div>
      <p>Header</p>
      {props.children}
      <p>Footer</p>
    </div>
  )
}

const template = (
   <div>

   </div>
)

// ReactDOM.render((
//   <Layout>
//     <h1>Page Title</h1>
//     <p>This is my site</p>
// </Layout>), document.getElementById('app'));

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));