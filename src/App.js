import React from 'react'
import SearchBar from './components/Searchbar/SearchBarContainer'
import Result from './components/Result/Result'
import loader from './loader.gif'

function App({ result }) {
  return (
    <div>
      <SearchBar />
      { result.data && <Result data={result.data} /> }
      { result.loading && <img src={loader} alt="Loading..." /> }
    </div>
  )
}

export default App
