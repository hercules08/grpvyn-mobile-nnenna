import React, {Fragment} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';

import Button from './button';
import GVTextInput from './gv-text-input';

const views = {
  START: 'START',
  PHONE: 'PHONE',
  CONFIRMATION: 'CONFIRMATION',
};

const {START, PHONE, CONFIRMATION} = views;

const blackColor = {color: 'black'};

const Link = ({label}) => {
  return <Text style={blackColor}>{label}</Text>;
};

const accented = {color: 'black', fontStyle: 'italic'};

class SignUpStart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
    };
  }

  handleSignUpwithEmail = () => {
    this.setState({page: 1});
  };

  render() {
    const intro = (
      <Fragment>
        <View style={styles.logoDisplay}>
          <Image style={styles.logo} source={require('../img/main_logo.png')} />
          <Text style={styles.motto}>
            Leave your <Text style={accented}>beauty</Text> mark.
          </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.buttonRow}>
            <Button
              color="black"
              label="Sign up with email"
              onPress={this.handleSignUpwithEmail}
              stretch
            />
          </View>
          <View style={styles.divider}>
            <View style={styles.aboveDivider} />
            <View style={styles.belowDivider} />
            <View style={styles.dividerOverlay}>
              <Text style={styles.dividerText}>or</Text>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <Button color="gray" stretch>
              <Image source={require('../img/fb_icon.png')} />
            </Button>
            <Button color="gray" stretch>
              <Image source={require('../img/ig_icon.png')} />
            </Button>
          </View>
        </View>
      </Fragment>
    );

    const form = (
      <Fragment>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Sign up with email</Text>
        </View>
        <View style={styles.inputs}>
          <GVTextInput
            placeholder="Email"
            onChange={this.handleTextChange}
            name="email"
            state={this.state}
            textContentType="emailAddress"
          />
          <GVTextInput
            placeholder="Password (at least 6 characters)"
            onChange={this.handleTextChange}
            name="password"
            state={this.state}
            password
            textContentType="password"
          />
          <GVTextInput
            placeholder="Confirm password"
            onChange={this.handleTextChange}
            name="password_confirm"
            state={this.state}
            password
          />
        </View>
        <View style={styles.buttonHolder}>
          <Button
            label="Sign up"
            color="black"
            onPress={this.props.onNav}
            stretch
          />
        </View>
      </Fragment>
    );

    let currPage = intro;
    if (this.state.page === 1) {
      currPage = form;
    }

    return (
      <Fragment>
        <View style={styles.main}>{currPage}</View>
        <View style={styles.footer}>
          <Text style={styles.finePrint}>
            By signing up, you agree to our <Link label="Terms of Use " />
            and <Link label="Privacy Policy" />.
          </Text>
          <Text style={styles.bottomText}>
            Already have an account?
            <Link label=" Log in" />
          </Text>
        </View>
      </Fragment>
    );
  }
}

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: START,
    };
  }

  handleTextChange = (name, text) => {
    this.setState({[name]: text});
  };

  handleSignupFormSubmit = () => {
    this.setState({view: PHONE});
  };

  handlePhoneSubmit = () => {
    this.setState({view: CONFIRMATION});
  };

  handleCodeSubmit = () => {
    this.props.onSignUpComplete();
  };

  render() {
    const phoneInput = (
      <View style={styles.container}>
        <Text style={styles.heading}>What's your number?</Text>
        <Text style={styles.bottomText}>
          Verify your mobile number so we know you're a real person
        </Text>
        <GVTextInput
          onChange={this.handleTextChange}
          name="phone"
          state={this.state}
          textContentType="telephoneNumber"
        />
        <Button
          label="Send code"
          color="black"
          onPress={this.handlePhoneSubmit}
        />
      </View>
    );

    const confirmation = (
      <View style={styles.container}>
        <Text style={styles.heading}>Enter the confirmation code</Text>
        <Text style={styles.bottomText}>Enter the code we sent to</Text>
        <View style={styles.codeInput}>
          <GVTextInput
            onChange={this.handleTextChange}
            name="digit1"
            state={this.state}
          />
          <GVTextInput
            onChange={this.handleTextChange}
            name="digit2"
            state={this.state}
          />
          <GVTextInput
            onChange={this.handleTextChange}
            name="digit3"
            state={this.state}
          />
          <GVTextInput
            onChange={this.handleTextChange}
            name="digit4"
            state={this.state}
          />
        </View>
        <Button
          label="Send code"
          color="black"
          onPress={this.handleCodeSubmit}
        />
      </View>
    );

    let display = null;
    switch (this.state.view) {
      case START:
        display = <SignUpStart onNav={this.handleSignupFormSubmit} />;
        break;
      case PHONE:
        display = phoneInput;
        break;
      case CONFIRMATION:
        display = confirmation;
        break;
      default:
        break;
    }

    return display;
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 3,
    margin: 20,
  },
  footer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoDisplay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
  },
  buttons: {
    alignItems: 'stretch',
    // margin: 20,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  finePrint: {
    // marginTop: 20,
    color: 'gray',
    fontSize: 12,
    textAlign: 'center',
  },
  headingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonHolder: {
    flexDirection: 'row',
    paddingTop: 50,
  },

  divider: {
    height: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  aboveDivider: {
    flex: 1,
    borderBottomColor: '#D8D8D8',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  belowDivider: {
    flex: 1,
  },
  dividerOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

    // backgroundColor: 'green',
    // opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dividerText: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 20,
    color: 'gray',
    fontSize: 16,
  },

  motto: {
    marginTop: 20,
    fontSize: 24,
    color: 'gray',
  },

  bottomText: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
  },

  container: {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  codeInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputs: {
    alignItems: 'stretch',
  },
});

export default SignUp;
