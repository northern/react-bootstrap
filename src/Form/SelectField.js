
import React from 'react'

import withBaseField from './withBaseField'

class SelectField extends React.Component {
  static get defaultProps() {
    return {
      hasSelectOption: true
    }
  }

  render() {
    const options = []

    if (this.props.hasSelectOption) {
      options.push(<option key={0} value={''}>Select..</option>)
    }

    this.props.options.forEach((option, index) => {
      options.push(
        <option key={index+1} value={option.value}>{option.name}</option>
      )
    })

    return (
      <select
        className={`form-control${this.props.error ? ' is-invalid' : ''}${this.props.isSmall ? ' form-control-sm ' : ''} custom-select${this.props.className ? ' '+this.props.className : ''}`}
        value={this.props.value}
        onChange={(e) => this.props.onChange(this.props.name, e.target.value)}
        {...(!this.props.enabled ? {disabled:true} : {})}
      >
        {options}
      </select>
    )
  }
}

export default withBaseField(SelectField)
