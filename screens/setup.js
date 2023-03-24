import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './button';

class Setup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
    };
  }

  render() {
    let progressBar = null;
    let content = null;
    let buttonLabel = 'Next';
    return (
      <View style={styles.container}>
        <View style={styles.main}>{content}</View>
        <View style={styles.bottomNav}>
          {progressBar}
          <View style={styles.buttonContainer}>
            <Button
              label={buttonLabel}
              color="black"
              onPress={this.props.onNav}
              stretch
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
  bottomNav: {
    height: 125,
    backgroundColor: '#EEEEEE',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default Setup;
