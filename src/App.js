import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Menu from './components/home/Menu'
import MainPage from './components/home/MainPage'
import Video from './components/videos/Video'
import Account from './components/account/Account'
import { Container } from 'react-bootstrap'
import Home from './components/home/Home'
import Post from './components/home/Posts'
import Login, { fakeAuth } from './components/Auth/Login'
import PrivateRoute from './components/Auth/PrivateRoute'
import Welcome from './components/Auth/Welcome'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        <Container>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/home" component={Home} />
            <Route path="/posts/:id" component={Post} />
            <Route path="/video" component={Video} />
            <Route path="/account" component={Account} />
            <Route path="/auth" component={Login} />
            <PrivateRoute path="/welcome">
              <Welcome />
            </PrivateRoute>
          </Switch>
        </Container>
      </Router >
    )
  }
}
