import React, {PropTypes} from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Images, Cards } from '../Themes'
import styles from './Styles/FlashCardsScreenStyle'

export default class FlashCards extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    currentCard: PropTypes.object.isRequired,
  };

  static navigationOptions = {
    tabBarLabel: 'Flash Cards',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? Images.activeLocationIcon : Images.inactiveLocationIcon} />
    ),
  }

  onPress = () => {
    const {navigation} = this.props

    navigation.navigate('Back')
  }

  render() {
    const {currentCard} = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress} style={styles.touchable}>
          <Image
            source={Cards[currentCard.cardName]}
            style={styles.image}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
    )
  }

}
