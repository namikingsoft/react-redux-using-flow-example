// @flow
import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import createSagaMiddleware from "redux-saga"
import reducer from "reducers"
import saga from "sagas"
import LayoutContainer from "containers/LayoutContainer"
import TopPage from "pages/TopPage"
import HelloPage from "pages/HelloPage"
import CounterPage from "pages/CounterPage"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={LayoutContainer}>
        <IndexRoute component={TopPage} />
        <Route path="Hello/:name" component={HelloPage} />
        <Route path="Counter" component={CounterPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app"),
)
