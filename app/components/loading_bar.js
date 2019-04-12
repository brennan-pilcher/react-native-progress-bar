import {View, Text} from 'react-native';
import React from 'react';

import styles from '../styles/loading_bar';

function LoadingBar (props) {

  return (
    <View style={styles.container}>
      <View style={[styles.loading_bar, {width: 300 * (props.value / 100)}]}></View>
      <Text style={styles.text}>{props.value}% Loaded</Text>
    </View>
  )
}

export default LoadingBar