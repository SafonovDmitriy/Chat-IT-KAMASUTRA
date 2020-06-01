import React from 'react';
import s from './inputs.module.css'
import { Field } from 'redux-form';

class TextBox extends React.Component {
  render() {

    return <Field
      className={s.TextBox}
      placeholder={this.props.placeholder}
      name={this.props.name}
      component={"input"}
    />
  }

}
class StyllButton extends React.Component {
  render() {
    return <button
      className={s.StyllButton}
    >
      {this.props.value}
    </button>
  }
}

export { TextBox, StyllButton }