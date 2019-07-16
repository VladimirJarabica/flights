import React from 'react';
import Journey from './Journey/Journey'


function Result({ data }) {
  
  const getJourneys = () => {
    let journeys = []
    for (const journey in data.data) {
      journeys.push(<Journey data={data.data[journey]} key={data.data[journey].id} />)
    }
    return journeys
  }
  
  return (
    <div>
      { getJourneys() }
    </div>
  );
}

export default Result;
