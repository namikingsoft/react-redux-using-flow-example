// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { actions } from "actions/counter"
import Button from "components/Button"
import type { CounterState } from "types/Counter"
import type { Action } from "types/Action"

class CounterPage extends Component {
  props: {
    counter: CounterState,
    dispatch: (action: Action) => any,
  };

  handlePressIncrement() {
    const { dispatch } = this.props
    const num = parseInt(this.refs.count.value || 1, 10)
    dispatch(actions.executeIncrement({ num }))
  }

  handlePressIncrementDelay() {
    const { dispatch } = this.props
    const num = parseInt(this.refs.count.value || 1, 10)
    dispatch(actions.requestIncrement({ num }))
  }

  handlePressReset() {
    const { dispatch } = this.props
    dispatch(actions.reset())
  }

  render() {
    const { counter: { num } } = this.props
    return (
      <div>
        <p>
          Current count is {num}.
        </p>
        <p>
          <label>Increment Count: </label>
          <input type="text" ref="count" />
        </p>
        <p>
          <Button onClick={e => this.handlePressIncrement(e)}>
            Increment
          </Button>
          <Button onClick={e => this.handlePressIncrementDelay(e)}>
            Increment Delay
          </Button>
          <Button onClick={e => this.handlePressReset(e)}>
            Reset
          </Button>
        </p>
      </div>
    )
  }
}

export default connect(
  ({ counter }) => ({ counter }),
  dispatch => ({ dispatch }),
)(CounterPage)
