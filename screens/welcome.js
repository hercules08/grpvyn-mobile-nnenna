import React, {Fragment} from 'react';
import {StyleSheet, Image, View} from 'react-native';

import Button from './button';

const Welcome = ({onSignUpBtnClick}) => {
  return (
    <Fragment>
      <View style={styles.content}>
        <Image style={styles.logo} source={require('../img/main_logo.png')} />
      </View>
      <View style={styles.buttons}>
        <Button label="Sign up" onPress={onSignUpBtnClick} stretch />
        <Button color="black" label="Log in" stretch />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
});

export default Welcome;
