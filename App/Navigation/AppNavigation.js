import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'
import AboutScreen from '../Containers/AboutScreen'
import FlashCardsScreen from '../Containers/FlashCardsScreen'
import FlashCardBackScreen from '../Containers/FlashCardBackScreen'
import DashboardScreen from '../Containers/DashboardScreen'
import styles from './Styles/AppNavigationStyles'

const CardStack = StackNavigator({
  Front: { screen: FlashCardsScreen },
  Back: { screen: FlashCardBackScreen },
  Dashboard: { screen: DashboardScreen },
}, {
  headerMode: 'none',
  initialRouteName: 'Dashboard',
  cardStyle: styles.card,
  swipeEnabled: false,
})

const TabNav = TabNavigator({
  FlashCards: { screen: CardStack },
  About: { screen: AboutScreen },
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
  headerMode: 'none',
  initialRouteName: 'FlashCards',
  tabBarOptions: {
    style: styles.tabBar,
    labelStyle: styles.tabBarLabel,
    activeTintColor: 'white',
    inactiveTintColor: 'white',
  },
})

export default TabNav
