import React from 'react';
import SearchBar from './components/Searchbar/SearchBarContainer'
import Result from './components/Result/Result'


function App({ result }) {
  return (
    <div>
      <SearchBar />
      { result.data && <Result data={result.data} /> }
    </div>
  );
}

export default App;
