import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
import { Audio } from 'expo';

const cards = [
  //IDEA: in more objects into this array and we'll have more cards; one card per note
  {
    text: 'C4D4 Chromatic Scale',
    buttonName: 'Play Chromatic Scale',
    image: require('./assets/Mad-Max-Fury-Road-2015-4K-Wallpaper.jpg'),
    soundFile:require('./assets/c4d4chromaticscale.mp3'),
    //IDEA: here's a chromatic scale. We could probably split each note into
    //separate mp3 files and make those separate cards so we can play separate notes
  }
];


export default class DeckSwiperExample extends Component {

  constructor() {
    super();
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress = async soundFile => {
    const player = new Audio.Sound();
    await player.loadAsync(soundFile);
    await player.playAsync();
  }


  render() {
    return (
      <View>
        <DeckSwiper
          dataSource={cards}
          renderItem={item =>
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image} />
                  <Body>
                    <Text>{item.text}</Text>
                    <Text note>NativeBase</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={item.image} />
              </CardItem>
              <CardItem footer>
                <Button primary onPress={()=>this.handlePress(item.soundFile)}>
                  <Text>{item.buttonName}</Text>
                </Button>
              </CardItem>
            </Card>
          }/>
        </View>
    );
  }
}
