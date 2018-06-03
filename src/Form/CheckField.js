
import React from 'react'

import withBaseField from './withBaseField'

class CheckField extends React.Component {
  render() {
    return (
      <input
        id={`check-${this.props.name}`}
        type="checkbox"
        className={`form-check-input${this.props.error ? ' is-invalid' : ''}${this.props.className ? ' '+this.props.className : ''}`}
        checked={this.props.value}
        onChange={(e) => this.props.onChange(this.props.name, e.target.checked)}
        {...(!this.props.enabled ? {disabled:true} : {})}
      />
    )
  }
}

export default withBaseField(CheckField)
