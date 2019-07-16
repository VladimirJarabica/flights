import React from 'react';
import Path from './Path'

function Route(data) {
  const getPaths = () => {
    let routes = []
    for (const path in data) {
      routes.push(<Path data={data[path]} key={data[path].id} />)
    }
    return routes
  }
  return (
    <div>
      { getPaths() }
    </div>
  );
}

export default Route;
