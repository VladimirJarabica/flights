import { connect } from 'react-redux';
import { setQuery } from '../../store/actions/query';
import { findResult } from '../../store/actions/result'
import SearchBar from './SearchBar';

const mapDispatchToProps = dispatch => {
  return {
    setQuery: data => dispatch(setQuery(data)),
    findResult: data => dispatch(findResult(data))
  }
};

export default connect(null, mapDispatchToProps,)(SearchBar);
