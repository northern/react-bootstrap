
import React from 'react'

import withBaseField from './withBaseField'

class TextField extends React.Component {
  static get defaultProps() {
    return {
      type: 'text',
    }
  }

  render() {
    return (
      <input
        type={this.props.type}
        className={`form-control${this.props.error ? ' is-invalid' : ''}${this.props.isSmall ? ' form-control-sm' : ''}${this.props.className ? ' '+this.props.className : ''}`}
        value={this.props.value}
        onChange={(e) => this.props.onChange(this.props.name, e.target.value)}
        placeholder={this.props.placeholder}
        {...(!this.props.enabled ? {disabled:true} : {})}
      />
    )
  }
}

export default withBaseField(TextField)
