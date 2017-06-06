import React from 'react'
import { View, Text, Image } from 'react-native'
import { Images } from '../Themes'
// import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/FlashCardsScreenStyle'

// Temporary data mock
const data = {
  filename: 'fool',
  cardName: 'Fool',
  correspondences: {
    element: 'water',
    zodiac: 'capricorn',
    planet: 'jupiter',
  },
  keywords: ['earth', 'wind', 'fire', 'more'],
}

class FlashCardBack extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Flash Cards',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? Images.activeLocationIcon : Images.inactiveLocationIcon} />
    ),
  }

  render() {
    const keywords = data.keywords.map((keyword) => (
      <Text key={keyword}> * {keyword}</Text>
    ))

    return (
      <View style={styles.container}>
        <Text>{data.cardName}</Text>
        <Text>element: {data.correspondences.element}</Text>
        <Text>zodiac: {data.correspondences.zodiac}</Text>
        <Text>planet: {data.correspondences.planet}</Text>
        <Text>keywords: </Text>
        <Text>{keywords}</Text>
      </View>
    )
  }

}

export default FlashCardBack

// const mapStateToProps = (state) => {
//   return {
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FlashCards)
