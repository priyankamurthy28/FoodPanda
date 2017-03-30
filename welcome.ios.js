/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,AlertIOS,
  View,
  StatusBar,TouchableHighlight,
  NavigationControllerIOS,
} from 'react-native';
//import Foodimage from './Foodimage.json';
import customData from './FoodImage.json';

import GridView from 'react-native-grid-view';
// import NavigationBar from 'react-native-navbar';

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'https://api.myjson.com/bins/vek0v';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL //+ PARAMS;
var MOVIES_PER_ROW = 3;
const onButtonPress = () => {

  Alert.alert('Button has been pressed!');
};

class Movie extends Component {
  render() {
      return (
        <View style={styles.movie} >
          <Image
          source={{uri: this.props.movie.posters.thumbnail}}
            style={styles.thumbnail}
          />

          <View >
            <Text
            style={styles.title}
            numberOfLines={3}>{this.props.movie.title}</Text>
            <Text style={styles.year}
            numberOfLines={2}>{this.props.movie.year}</Text>
          </View>
          <View style={styles.rating}>
            <Text
          style={styles.open}
          numberOfLines={1}>open Now</Text>
          <Text>{4.2}</Text>
          </View>


        </View>
      );
  }
}

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: null,
      loaded: false,
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {

console.log("customData");
//var customData = require('./Foodimage.json');
var responce  = customData
console.log(responce);
this.setState({
  dataSource: responce.movies,
  loaded: true,
});
    // fetch(REQUEST_URL)
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     this.setState({
    //       dataSource: responseData.movies,
    //       loaded: true,
    //     });
    //   })
    //   .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={styles.container}>
      <View style={styles.topBar}>
      <Text style={styles.firstText}>
      we are happy to serve you
  </Text>
  <Text style={styles.secondText}>
Menu
  </Text>
  <TouchableHighlight onPress={this._onPressButton} underlayColor="orange">
        <Image
          style={styles.kartBtn}
          source={require('./Image/Cart.png')}
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={this._onPressButton} underlayColor="orange">
            <Image
              style={styles.searchBtn}
              source={require('./Image/Search_21x21.png')}
            />
          </TouchableHighlight>


      </View>
      <Image
      source={require('./Image/Head_Image.png')}
        style={styles.headImage}
      />
      <GridView
        items={this.state.dataSource}
        itemsPerRow={MOVIES_PER_ROW}
        renderItem={this.renderItem}
        style={styles.listView}
      />
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderItem(item) {
      return <Movie movie={item} />
  }
}

var styles = StyleSheet.create({
  movie: {
    height: 170,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 12,
    marginBottom: 8,
    width: 90,
    textAlign: 'center',
  },open:{
    marginBottom: 8,
    width: 80,
    textAlign: 'center',
    paddingLeft:0,
  },rating:{
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    flexDirection: 'row',
  },
  year: {
    fontSize: 8,
    marginBottom: 8,
    width: 90,
    textAlign: 'center',
  },headImage:{
    width: 375,
    height: 130,
    resizeMode:"cover",
  },
  thumbnail: {
    width: 123,
    height: 81,
  },searchBtn:{
    width:20,
    height:20,
    paddingLeft:0,
  },
  topBar:{
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
  alignSelf: 'stretch',
    height:35,
    flexDirection: 'row',
    backgroundColor: 'orange',
  },firstText:{
    width:100,
    paddingRight:0,
    // fontWeight: 'bold',
  },
  secondText:{
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listView: {
    flex: 1,
    width:375,
    paddingBottom:0,
    paddingTop: 0,
    backgroundColor: '#F5FCFF',
  },container: {
    flex: 1,
    padding:0,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = AwesomeProject;
