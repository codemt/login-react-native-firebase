
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './src/components/login';
import fire from './src/config/fire';
import Home from './src/components/home';

export default class App extends Component{
  constructor(props){

    super(props);
    this.state = {

        user : {},

    }
    super(props);

}
componentDidMount(){ 

  this.authListener();

}
authListener() {
  fire.auth().onAuthStateChanged((user) => {
    //console.log(user);
    if (user) {
      this.setState({ user });
      //localStorage.setItem('user', user.uid);
    } else {
      this.setState({ user: null });
      //localStorage.removeItem('user');
    }
  });
}
  render() {
    return (
      <View style={{flex:1 , alignContent:'center'}}>
        { this.state.user ? ( <Home /> )  : (<Login /> ) } 
        
      </View>
      
    );
  }
}
