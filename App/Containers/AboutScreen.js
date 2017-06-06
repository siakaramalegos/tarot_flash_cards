import React from 'react'
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './Styles/AboutScreenStyle'
import { Images, Metrics } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'

class About extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'About',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? Images.activeInfoIcon : Images.inactiveInfoIcon} />
    ),
  }

  render() {
    const gradient = ['#136EB5', 'rgba(1,192,182,0.88)']

    return (
      <ScrollView>
        <View style={styles.container}>
          <LinearGradient
            colors={gradient}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            style={styles.slack}
          >
            <Text style={styles.mainHeading}>About</Text>

            <Text style={styles.heading}>
              Learn Tarot With Me
            </Text>
            <Text style={styles.description}>
              Hi, there. I’m Angie Green, and I’m learning to read tarot cards, one card at a time. My tarot journey started a few years ago, when I got my first deck on a whim.

              This app and my website are a resource for you. Join me as I learn how to read the tarot, using modern and fun resources – like tarot flashcards, and my very own tarot coloring book.
            </Text>

            <Text style={styles.heading}>Learn More</Text>
            <TouchableOpacity style={styles.socialLink} onPress={() => Linking.openURL('https://www.learntarotwithme.com/')}>
              <Text>Website</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialLink} onPress={() => Linking.openURL('https://www.learntarotwithme.com/blog/')}>
              <Text>Blog</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialLink} onPress={() => Linking.openURL('https://www.etsy.com/shop/LearnTarotWithMe')}>
              <Text>Etsy Shop</Text>
            </TouchableOpacity>

            <Text style={styles.heading}>Follow Us!</Text>
            <View style={styles.social}>

              <TouchableOpacity style={styles.socialLink} onPress={() => Linking.openURL('https://www.facebook.com/learntarotwithme')}>
                <Icon name='facebook' size={Metrics.icons.medium} style={styles.searchIcon} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialLink} onPress={() => Linking.openURL('https://www.instagram.com/learntarotwithme/')}>
                <Icon name='instagram' size={Metrics.icons.medium} style={styles.searchIcon} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialLink} onPress={() => Linking.openURL('https://www.pinterest.com/learntarotwithme/')}>
                <Icon name='pinterest' size={Metrics.icons.medium} style={styles.searchIcon} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialLink} onPress={() => Linking.openURL('https://www.youtube.com/channel/UCc5GGkGwwGirP8HgSy7AqYA')}>
                <Icon name='youtube' size={Metrics.icons.medium} style={styles.searchIcon} />
              </TouchableOpacity>

            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    )
  }
}

export default About

