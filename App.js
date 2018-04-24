import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import Deck from './DeckSwiper';
import { AppLoading, Font } from 'expo';

export default class DeckSwiperExample extends Component {

  async componentWillMount() {
    this.setState({ loading: true })
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
     this.setState({ loading: false })
  }

  render() {

    if(this.state.loading === true ) return <AppLoading />

    return (
      <Container>
        <Header />
        <Deck />
      </Container>
    );
  }
}
