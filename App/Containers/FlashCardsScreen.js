import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/FlashCardsScreenStyle'

class FlashCards extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Flash Cards',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? Images.activeLocationIcon : Images.inactiveLocationIcon} />
    )
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>FlashCards Screen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashCards)
