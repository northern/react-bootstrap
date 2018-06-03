
import React from 'react'

import CheckField from './CheckField'

export default function withBaseField(WrappedComponent) {
  return class extends React.Component {
    static get defaultProps() {
      return {
        name: null,
        enabled: true,
        onChange: (name, value) => {console.info(`Implement onChange for '${name}'`)}
      }
    }

    render() {
      let error

      if (this.props.error) {
        error = (
          <div className="invalid-feedback" style={{marginBottom: 10}}>
            {Array.isArray(this.props.error) ? (
              this.props.error.map((error, index) => (<span key={index} style={{display: 'block'}}>{error}</span>))
            ) : (
              <span>{error}</span>
            )}
          </div>
        )
      }

      let help

      if (this.props.children) {
        help = (
          <small className="form-text">
            {this.props.children}
          </small>
        )
      }

      if (this instanceof CheckField) {
        let label

        if (this.props.label) {
          label = (
            <label className="form-check-label" htmlFor={`check-${this.props.name}`}>
              {this.props.label}
            </label>
          )
        }

        return (
          <div className="form-check">
            <WrappedComponent {...this.props}/>
            {label}
            {error}
            {help}
          </div>
        )
      }

      let label

      if (this.props.label) {
        label = <label>{this.props.label}</label>
      }

      return (
        <React.Fragment>
          {label}
          <WrappedComponent {...this.props}/>
          {error}
          {help}
        </React.Fragment>
      )
    }
  }
}
