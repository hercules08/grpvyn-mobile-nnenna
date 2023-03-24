import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const Button = ({children, color, label, onPress, stretch}) => {
  let styleColor = null;
  let textColor = null;

  switch (color) {
    case 'black':
      styleColor = styles.blackButton;
      textColor = styles.whiteText;
      break;
    case 'gray':
      styleColor = styles.grayButton;
      textColor = styles.whiteText;
      break;
    default:
      break;
  }

  let content = <Text style={[styles.buttonText, textColor]}>{label}</Text>;
  if (children) {
    content = children;
  }

  let stretchStyle = null;
  if (stretch) {
    stretchStyle = {flex: 1};
  }

  return (
    <TouchableOpacity
      style={[styles.button, styleColor, stretchStyle]}
      onPress={onPress}>
      {content}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    // flex: 1,
    margin: 10,
    height: 50,
    // padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  blackButton: {
    backgroundColor: 'black',
    color: 'white',
  },
  grayButton: {
    backgroundColor: 'gray',
    borderWidth: 0,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  whiteText: {
    color: 'white',
  },
});

export default Button;
