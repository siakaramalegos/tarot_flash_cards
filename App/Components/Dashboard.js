import React, {Component, PropTypes} from 'react'
import { View, Text, Image } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/FlashCardsScreenStyle'
// import GestureRecognizer from 'react-native-swipe-gestures'
import Button from './elements/Button'

export default class FlashCardBack extends Component {
  static propTypes = {
    startBucket: PropTypes.func.isRequired,
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

  onPress = () => {
    this.props.startBucket()
    this.props.navigation.navigate('Front')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Click to get started!</Text>
        <Button text='Start Studying!' onPress={this.onPress} />
      </View>
    )
  }

}
