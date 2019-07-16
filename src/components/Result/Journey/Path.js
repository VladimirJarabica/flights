import React from 'react';
import moment from 'moment'
import styled from 'styled-components';

const PathWrap = styled.div`
  clear: both;
  border-bottom: 2px dotted #ccc;
  padding: 5px;
`;

const Place = styled.div`

`;

function Path({ data }) {
  const { cityFrom, cityTo, flyFrom, flyTo, aTime, dTime } = data
  
  return (
    <PathWrap>
      <Place>{ moment(aTime).format('DD/MM/YYYY') }: { cityFrom } ({ flyFrom })</Place>
      <Place>{ moment(dTime).format('DD/MM/YYYY') }: { cityTo } ({ flyTo })</Place>
    </PathWrap>
  );
}

export default Path;
