import React, {PropTypes} from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Images, Cards } from '../Themes'
// import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/FlashCardsScreenStyle'

class FlashCards extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
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
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress} style={styles.touchable}>
          <Image
            source={Cards.fool}
            style={styles.image}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
    )
  }

}

export default FlashCards

// const mapStateToProps = (state) => {
//   return {
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FlashCards)
