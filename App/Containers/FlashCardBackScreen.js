import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {success, fail} from '../Redux/CardRedux'
import FlashCardBack from '../Components/FlashCardBack'

const mapStateToProps = (state) => {
  return {
    currentCard: state.cards.currentCard,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({success, fail}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlashCardBack)
