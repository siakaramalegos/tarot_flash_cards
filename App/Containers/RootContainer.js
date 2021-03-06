import React, { Component, PropTypes } from 'react'
import { View, StatusBar } from 'react-native'
import Navigation from '../Navigation/AppNavigation'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  static propTypes = {
    startup: PropTypes.func,
    dispatch: PropTypes.func,
    nav: PropTypes.object,
  }

  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render() {
    const { dispatch, nav } = this.props

    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='default' />
        <Navigation
          addNavigationHelpers={addNavigationHelpers({dispatch, state: nav})}
        />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(null, mapDispatchToProps)(RootContainer)
