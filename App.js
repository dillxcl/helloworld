/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instruction = Platform.select({
  ios: 'Press Cmd+R to reload, \n' + 'Cmd+D or shake for dev menu',
  android: "Double tap R on your keyboard to relaod, \n"+ 'Shake or press menu button for dev menu',
});

export default class App extends Component{
  render(){
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Hello World!
          </Text>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instruction:{
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

