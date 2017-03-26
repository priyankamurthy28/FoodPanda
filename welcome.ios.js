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
  Text,
  View,
  StatusBar,
  NavigationControllerIOS,
} from 'react-native';
//import Foodimage from './Foodimage.json';
import customData from './FoodImage.json';

import GridView from 'react-native-grid-view'

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'https://api.myjson.com/bins/vek0v';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL //+ PARAMS;
var MOVIES_PER_ROW = 3;

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
            <Text style={styles.year}>{this.props.movie.year}</Text>
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
      <GridView
        items={this.state.dataSource}
        itemsPerRow={MOVIES_PER_ROW}
        renderItem={this.renderItem}
        style={styles.listView}
      />
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
    height: 150,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 12,
    marginBottom: 8,
    width: 90,
    textAlign: 'center',
  },
  year: {
    fontSize: 8,
    marginBottom: 8,
    width: 90,
    textAlign: 'center',
  },
  thumbnail: {
    width: 110,
    height: 81,
  },
  listView: {
    paddingTop: 60,
    backgroundColor: '#F5FCFF',
  },
});

module.exports = AwesomeProject;
