import { TabNavigator, TabBarBottom } from 'react-navigation'
// import ScheduleScreen from '../Containers/ScheduleScreen'
// import TalkDetailScreen from '../Containers/TalkDetailScreen'
// import BreakDetailScreen from '../Containers/BreakDetailScreen'
// import LocationScreen from '../Containers/LocationScreen'
import AboutScreen from '../Containers/AboutScreen'
import FlashCardsScreen from '../Containers/FlashCardsScreen'
import styles from './Styles/AppNavigationStyles'

const TabNav = TabNavigator({
  FlashCards: { screen: FlashCardsScreen },
  About: { screen: AboutScreen }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
  headerMode: 'none',
  initialRouteName: 'About',
  tabBarOptions: {
    style: styles.tabBar,
    labelStyle: styles.tabBarLabel,
    activeTintColor: 'white',
    inactiveTintColor: 'white'
  }
})

export default TabNav
