import { connect } from 'react-redux';
import { setQuery } from '../../store/actions/query';
import { findResult } from '../../store/actions/result'
import App from './App';

const mapDispatchToProps = dispatch => {
  return {
    setQuery: data => dispatch(setQuery(data)),
    findResult: data => dispatch(findResult(data))
  }
};

export default connect(null, mapDispatchToProps,)(App);
