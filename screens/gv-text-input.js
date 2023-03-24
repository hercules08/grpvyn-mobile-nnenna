import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const GVTextInput = ({
  onChange,
  name,
  placeholder,
  state,
  password,
  textContentType,
  label,
}) => {
  let labelDisplay = null;
  if (label) {
    labelDisplay = <Text style={styles.label}>{label}</Text>;
  }

  return (
    <View style={styles.container}>
      {labelDisplay}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={text => {
          onChange(name, text);
        }}
        value={state[name]}
        secureTextEntry={password}
        textContentType={textContentType}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  textInput: {
    // height: 60,
    fontSize: 18,
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderColor: 'black',
    paddingBottom: 5,
    paddingTop: 40,
    textAlignVertical: 'bottom',
  },
  label: {
    color: 'gray',
    marginBottom: 20,
  },
});

export default GVTextInput;
