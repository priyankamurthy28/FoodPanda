'use strict';
import React, { Component } from 'react';
import Button from 'react-native-button'
//import Home from './Home';
import {
  StyleSheet,
  Text,
  View,
  Image,AlertIOS,
  TextInput,Alert
} from 'react-native';
const onButtonPress = () => {
//  Alert.alert('Button has been pressed!');
};

class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (

    <View style={styles.container}>
      <Image
      style={styles.backgroundImage}

      //style={{marginTop: 10}}
         source={require('./Image/landing-page.png')}
      />

    </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  ForgotPassword: {
    height: 40,
    marginRight: 20,
    marginBottom: 10,
    position: 'absolute',
    bottom:0,
    left:0,
    backgroundColor: "white",
    },
    NewAccount: {
      height: 40,
      marginLeft: 20,
      marginBottom: 10,
      position: 'absolute',
      bottom:0,
      right:0,
        backgroundColor: "white",
      },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // or 'stretch' or 'cover' or 'center'
  },
  Btncontainer: {
    height: 40,
    width: 120,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
      backgroundColor: "#00415D",
    },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
//export default HomeScreen
module.exports = HomeScreen;
//export default HomeScreen
