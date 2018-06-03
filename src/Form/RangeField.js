
import React from 'react'

import withBaseField from './withBaseField'

class RangeField extends React.Component {
  static get defaultProps() {
    return {
      min: 0,
      max: 100,
      step: 10,
    }
  }

  render() {
    return (
      <input
        type="range"
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        value={this.props.value}
        className={`form-control-range${this.props.error ? ' is-invalid' : ''}${this.props.className ? ' '+this.props.className : ''}`}
        onChange={(e) => this.props.onChange(this.props.name, e.target.value)}
      />
    )
  }
}

export default withBaseField(RangeField)
