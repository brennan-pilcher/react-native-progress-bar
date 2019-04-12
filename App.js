/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';

import LoadingBar from './app/components/loading_bar';

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      loadingValue: 30,
    }
  }

  decrease = () => {
    if (this.state.loadingValue >= 5) {
      this.setState({loadingValue: this.state.loadingValue - 5})
    }
  }

  increase = () => {
    if (this.state.loadingValue <= 95) {
      this.setState({loadingValue: this.state.loadingValue + 5})
    }
  }

  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <LoadingBar value={this.state.loadingValue}/>
        </View>
        <Button title='Increase Load 5%' onPress={this.increase}></Button>
        <Button title='Decrease Load 5%' onPress={this.decrease}></Button>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    flex: .5,
    marginBottom: 30,
  }
});