import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Register from '../screen/register'
import Login from '../screen/login'
import Categories from '../screen/categories'
import DashBoard from '../screen/dashBoard'
import ItemScreen from '../screen/item'

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

        <Router
          exact
          path="/dashboard"
          render={(props) => <DashBoard {...props} {...routerProps} />}
        />
        <Route
          exact
          path="/categories"
          render={(props) => <ItemScreen  {...props} {...routerProps} />}
        />
        <Router
          exact
          path="/item"
          render={(props) => <ItemScreen {...props} {...routerProps} />}
        />
      </Switch>
    </Router>
  )
}

export default Routers