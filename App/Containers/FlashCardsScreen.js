import { connect } from 'react-redux'
import FlashCardFront from '../Components/FlashCardFront'

const mapStateToProps = (state) => {
  return {
    currentCard: state.cards.currentCard,
  }
}

export default connect(mapStateToProps)(FlashCardFront)
