import React from 'react'
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './Styles/AboutScreenStyle'
import { Images } from '../Themes'

class About extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'General Info',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? Images.activeInfoIcon : Images.inactiveInfoIcon} />
    )
  }

  render () {
    const gradient = ['#136EB5', 'rgba(1,192,182,0.88)']

    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <LinearGradient
            colors={gradient}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            style={styles.slack}
          >
            <Text style={styles.mainHeading}>About</Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.squarespace.com/')}>
              <Text>Learn Tarot With Me</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    )
  }

}

export default About

