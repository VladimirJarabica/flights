import { connect } from 'react-redux'
import TextInfo from './TextInfo'

const mapStateToProps = state => {
  return {
    isReturn: state.query.isReturn
  }
}

export default connect(mapStateToProps, null)(TextInfo)
