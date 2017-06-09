import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {success, fail} from '../Redux/CardRedux'
import FlashCardBack from '../Components/FlashCardBack'

const mapStateToProps = (state) => {
  // TODO: add reselect?
  return {
    currentCard: state.cards.currentCard,
    bucketEmpty: state.cards.currentBucket.length === 0,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({success, fail}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlashCardBack)
