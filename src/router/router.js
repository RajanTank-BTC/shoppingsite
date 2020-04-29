import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Register from '../screen/register'
import Login from '../screen/login'
import Categories from '../screen/categories'
const Routers = (routerProps) => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Register {...props} {...routerProps}
          />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} {...routerProps} />} />
        <Route
          exact
          path="/categories"
          render={(props) => <Categories {...props} {...routerProps} />}
        />
      </Switch>
    </Router>
  )
}

export default Routers