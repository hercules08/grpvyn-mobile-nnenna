/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import Welcome from './screens/welcome';
import SignUp from './screens/sign-up';
import Setup from './screens/setup';

const views = {
  WELCOME: 'WELCOME',
  SIGNUP: 'SIGNUP',
  SETUP: 'SETUP',
};

const {WELCOME, SIGNUP, SETUP} = views;

const flow = [WELCOME, SIGNUP, SETUP];
// const flow = [SETUP];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }

  nav = () => {
    this.setState(({page}) => {
      return {page: page + 1};
    });
  };

  render() {
    const view = flow[this.state.page];

    let currPage = null;
    switch (view) {
      case WELCOME:
        currPage = <Welcome onSignUpBtnClick={this.nav} />;
        break;
      case SIGNUP:
        currPage = <SignUp onSignUpComplete={this.nav} />;
        break;
      case SETUP:
        currPage = <Setup onSetupComplete={this.nav} />;
        break;
      default:
        currPage = null;
    }

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>{currPage}</SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
  },
  buttons: {
    flexDirection: 'row',
    margin: 20,
    // justifyContent: 'space-evenly',
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    flex: 1,
    margin: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  blackButton: {
    backgroundColor: 'black',
    color: 'white',
  },
  buttonText: {
    fontSize: 16,
  },
  whiteText: {
    color: 'white',
  },
});

export default App;
