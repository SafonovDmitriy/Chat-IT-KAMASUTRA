import React from 'react';
import s from './inputs.module.css'

class TextBox extends React.Component {
  render() {
    return <input className={s.TextBox} type="text"
      value={this.props.value}
      placeholder={this.props.placeholder}
      ref={this.props.refs}
      onChange={this.props.onChange}
    />
  }

}
class StyllButton extends React.Component {
  render() {
    return <input className={s.StyllButton} type="button"
      value={this.props.value}
      onClick={this.props.onClick}
    />
  }
}

export { TextBox, StyllButton }