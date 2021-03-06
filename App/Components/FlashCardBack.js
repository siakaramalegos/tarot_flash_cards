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
    bucketEmpty: PropTypes.bool,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }),
  };

  static navigationOptions = {
    tabBarLabel: 'Flash Cards',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? Images.activeLocationIcon : Images.inactiveLocationIcon} />
    ),
  }

  // TODO: for both success and fail, animation ends up showing the data on old screen. Use params instead?
  onSuccess = () => {
    if (this.props.bucketEmpty) {
      this.props.navigation.navigate('Dashboard')
    } else {
      this.props.navigation.navigate('Front')
      this.props.success()
    }
  }

  onFail = () => {
    this.props.navigation.navigate('Front')
    this.props.fail()
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
