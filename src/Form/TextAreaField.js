
import React from 'react'

import withBaseField from './withBaseField'

class TextAreaField extends React.Component {
  static get defaultProps() {
    return {
      rows: 6
    }
  }

  render() {
    return (
      <textarea
        rows={this.props.rows}
        className={`form-control${this.props.error ? ' is-invalid' : ''}${this.props.isSmall ? ' form-control-sm ' : ''}${this.props.className ? ' '+this.props.className : ''}`}
        onChange={(e) => this.props.onChange(this.props.name, e.target.value)}
        placeholder={this.props.placeholder}
        value={this.props.value}
        {...(!this.props.enabled ? {disabled:true} : {})}
      />
    )
  }
}

export default withBaseField(TextAreaField)
