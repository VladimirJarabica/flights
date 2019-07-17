import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = state => {
  return {
    result: state.result
  }
}

export default connect(mapStateToProps, null)(App)
