import React from 'react'
import SearchBar from './components/Searchbar/SearchBarContainer'
import Result from './components/Result/Result'
import loader from './loader.svg'
import NoResult from './components/Result/NoResult'
import styled from 'styled-components'

const LoaderWrap = styled.div`
  text-align: center;
`

function App({ result }) {
  return (
    <div>
      <SearchBar />
      { result.data && (
        result.data.data.length ?
        <Result data={result.data} /> :
        <NoResult />
      ) }
      { result.loading &&
      <LoaderWrap>
        <img src={loader} alt="Loading..." />
      </LoaderWrap>
      }
    </div>
  )
}

export default App
