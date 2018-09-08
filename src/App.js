import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading-bar';

import * as actions from './actions';
import { Header, Footer } from './components/common';
import Home from './pages/Home';

class App extends React.Component {
  componentDidMount() {
    /*---------------------------------------/
      when there is token stored in browser,
      get the user by calling redux action
    /---------------------------------------*/
    if (localStorage.auth) {
      this.props.getUserData();
    }
  }

  render() {
    return (
        <Router>
          <React.Fragment>
            <LoadingBar />
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
          </React.Fragment>
        </Router>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
