import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import FlashCardBack from '../Components/FlashCardBack'

const mapStateToProps = (state) => {
  return {
    currentCard: state.cards.currentCard,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }

export default connect(mapStateToProps)(FlashCardBack)
