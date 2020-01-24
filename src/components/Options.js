import React from 'react'
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title ">Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}>Delete All</button>
      {/* <ol> */}
    </div>
        {props.options.length === 0 && <p className="widget__message">Please add your options here</p>}
        {
          props.options.map((item, index) => (
            <Option
              count={index + 1}
              key={item}
              optionText={item}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      {/* </ol> */}
  </div>
)

export default Options