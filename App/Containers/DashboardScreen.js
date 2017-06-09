import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {startBucket} from '../Redux/CardRedux'
import Dashboard from '../Components/Dashboard'


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({startBucket}, dispatch)
}

export default connect(
  null,
  mapDispatchToProps,
)(Dashboard)
