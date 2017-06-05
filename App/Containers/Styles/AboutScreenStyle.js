import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from '../../Themes/'

// const section = {
//   flex: 1,
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginHorizontal: 20,
//   paddingVertical: 50,
//   backgroundColor: Colors.transparent
// }

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  mainHeading: {
    backgroundColor: Colors.transparent,
    color: Colors.snow,
    fontFamily: 'Avenir-Black',
    fontSize: 31,
    letterSpacing: 0.2
  },
  heading: {
    backgroundColor: Colors.transparent,
    color: Colors.snow,
    fontFamily: 'Avenir-Black',
    fontSize: 22,
    letterSpacing: 0.2,
    marginTop: 14,
    textAlign: 'center'
  },
  description: {
    // textAlign: 'center',
    fontFamily: 'Avenir-Medium',
    fontSize: 15,
    backgroundColor: Colors.transparent,
    color: '#FDE5FF',
    letterSpacing: 0.47,
    lineHeight: 23,
    paddingHorizontal: 30
  },
  hashtag: {
    fontFamily: 'Avenir-Black',
    color: Colors.snow
  },
  slack: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 55,
    paddingBottom: 35
  },
  social: {
    flexDirection: 'row',
    marginBottom: 30
  },
  socialLink: {
    marginRight: 30
  },
  searchIcon: {
    left: Metrics.doubleBaseMargin,
    alignSelf: 'center',
    color: Colors.snow,
    backgroundColor: Colors.transparent
  }
})
