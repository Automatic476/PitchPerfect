import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import Deck from './DeckSwiper';
import Color from './SomeNewClass';

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./assets/Mad-Max-Fury-Road-2015-4K-Wallpaper.jpg'),
  }
];
export default class DeckSwiperExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Deck />
        <Color />
      </Container>
    );
  }
}
