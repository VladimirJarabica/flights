import React from 'react'
import { useState } from 'react'
import Autosuggest from 'react-autosuggest'
import './DestinationInput.css'
import axios from 'axios'

export default function DestinationInput(props) {
  let [value, setValue] = useState('')
  let [suggestions, setSuggestions] = useState([])
  let [isLoading, setIsLoading] = useState(false)
  
  const loadSuggestions = value => {
    setIsLoading(true)
    
    axios.get(`https://api.skypicker.com/places?v=2&locale=en&term=${value}`)
      .then(({ data }) => {
        let sugestions = data
          .filter(i => i.type === 2)
          .map(i => {
            return {
              id: i.id,
              name: i.value
            }
          })
        setIsLoading(false)
        setSuggestions(sugestions)
      })
  }
  
  const getValue = suggestion => {
    props.onChange(suggestion.id)
    return suggestion.name
  }
  
  const inputProps = {
    placeholder: props.placeholder,
    value,
    onChange: (event, { newValue }) => setValue(newValue)
  }
  
  return (
    <div>
      { isLoading }
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={({value}) => loadSuggestions(value)}
        onSuggestionsClearRequested={() => setSuggestions([])}
        getSuggestionValue={getValue}
        renderSuggestion={suggestion => <span>{suggestion.name}</span>}
        inputProps={inputProps} />
    </div>
  )
}
