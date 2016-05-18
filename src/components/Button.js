// @flow
import React, { Component } from "react"

export default class Button extends Component {
  props: {
    onClick: (e: Event) => void,
    children?: Array<Component>,
  };

  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}
