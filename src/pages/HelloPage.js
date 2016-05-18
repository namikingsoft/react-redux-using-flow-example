// @flow
import React, { Component } from "react"

export default class HelloPage extends Component {
  props: {
    params: {
      name: string,
    },
  };

  render() {
    const { params: { name } } = this.props
    return (
      <div>
          Hello, {name}!
      </div>
    )
  }
}
