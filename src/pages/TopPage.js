import React, { Component } from "react"
import { Link } from "react-router"

export default class TopPage extends Component {

  render() {
    return (
      <div>
        <p>Welcome</p>
        <ul>
          <li><Link to="/Hello/World">Greeting</Link></li>
          <li><Link to="/Counter">Conter</Link></li>
        </ul>
      </div>
    )
  }
}
