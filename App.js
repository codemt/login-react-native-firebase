
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './src/components/login';



export default class App extends Component{
  render() {
    return (
      <View style={{flex:1 , alignContent:'center'}}>
        <Login />

      </View>
      
    );
  }
}
