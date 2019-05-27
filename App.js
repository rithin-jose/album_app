import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import Header from './src/component/Header';
import AlbumList from './src/component/AlbumList';

export default class App extends Component{
  render() {
    return (
      <View style={{felx:1}}>
        <Header headerText={"Albums!"}/>
        <AlbumList/>
      </View>
    );
  }
}

