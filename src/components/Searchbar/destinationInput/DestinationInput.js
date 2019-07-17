import React from 'react'
import { useState } from 'react'
import Autosuggest from 'react-autosuggest'
import './DestinationInput.css'

export default function DestinationInput(props) {
  let [value, setValue] = useState('')
  let [suggestions, setSuggestions] = useState([])
  let [isLoading, setIsLoading] = useState(false)
  
  const loadSuggestions = value => {
    setIsLoading(true)
    
    fetch(`https://api.skypicker.com/places?v=2&locale=en&term=${value}`)
      .then(response => {
        return response.json()
      })
      .then((result) => {
        let sugestions = result
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
  
  const onChange = (event, { newValue }) => {
    setValue(newValue)
  }
  
  const renderSuggestion = suggestion => {
    props.onChange(suggestion.id)
    
    return <span>{suggestion.name}</span>
  }
  
  const onSuggestionsFetchRequested = ({ value }) => {
    loadSuggestions(value);
  }
  
  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }
  
  const inputProps = {
    placeholder: props.placeholder,
    value,
    onChange
  };
  
  return (
    <div>
      { isLoading }
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={suggestion => suggestion.name}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />
    </div>
  );
}
