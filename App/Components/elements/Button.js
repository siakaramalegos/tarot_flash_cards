import React, { PropTypes } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes'

const styles = {
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: Colors.darkGreen,
    borderRadius: 100,
    backgroundColor: Colors.clear,
    height: 34
  },
  text: {
    ...Fonts.style.h5,
    color: Colors.darkGreen,
    marginVertical: Metrics.baseMargin
  }
}

// TODO: add color prop
const Button = ({text, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
)

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
}

export default Button
