import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  touchable: {
    flex: 1,
  },
})
