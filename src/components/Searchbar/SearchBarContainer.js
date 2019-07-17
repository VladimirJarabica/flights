import { connect } from 'react-redux'
import { setQuery } from '../../store/actions/query'
import SearchBar from './SearchBar'

const mapDispatchToProps = dispatch => {
  return {
    setQuery: data => dispatch(setQuery(data))
  }
}

export default connect(null, mapDispatchToProps,)(SearchBar)
