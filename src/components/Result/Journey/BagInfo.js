import React from 'react';

function BagInfo({ baglimit, price }) {
  console.log(baglimit)
  
  return (
    <div>
      { price[0] }
    </div>
  );
}

export default BagInfo;
