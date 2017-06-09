import React, {Component, PropTypes} from 'react'
import { View, Text, Image } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/FlashCardsScreenStyle'
// import GestureRecognizer from 'react-native-swipe-gestures'
import Button from './elements/Button'


export default class FlashCardBack extends Component {
  static propTypes = {
    currentCard: PropTypes.object.isRequired,
    success: PropTypes.func.isRequired,
    fail: PropTypes.func.isRequired,
  };

  static navigationOptions = {
    tabBarLabel: 'Flash Cards',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? Images.activeLocationIcon : Images.inactiveLocationIcon} />
    ),
  }

  onSuccess = () => {
    this.props.success()
    this.props.navigation.navigate('Front')
  }

  onFail = () => {
    this.props.fail()
    this.props.navigation.navigate('Front')
  }

  render() {
    const {currentCard} = this.props
    const keywords = currentCard.keywords.map((keyword) => (
      <Text key={keyword}> * {keyword}</Text>
    ))

    return (
      <View style={styles.container}>
        <Text>{currentCard.cardName}</Text>
        <Text>element: {currentCard.correspondences.element}</Text>
        <Text>zodiac: {currentCard.correspondences.zodiac}</Text>
        <Text>planet: {currentCard.correspondences.planet}</Text>
        <Text>keywords: </Text>
        <Text>{keywords}</Text>
        <Button text='Success' onPress={this.onSuccess} />
        <Button text='Fail' onPress={this.onFail} />
      </View>
    )
  }

}
