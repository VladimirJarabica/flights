import React from 'react'
import SearchBar from './components/Searchbar/SearchBarContainer'
import Result from './components/Result/Result'
import loader from './loader.gif'
import NoResult from './components/Result/NoResult'

function App({ result }) {
  return (
    <div>
      <SearchBar />
      { result.data && (
        result.data.data.length ?
        <Result data={result.data} /> :
        <NoResult />
      ) }
      { result.loading && <img src={loader} alt="Loading..." /> }
    </div>
  )
}

export default App
