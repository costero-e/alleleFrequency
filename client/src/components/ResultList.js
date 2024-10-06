// client/src/components/ResultList.js

import React from 'react';



















// changed
function ResultList ({ results }) {
  console.log(results)
  // new
  const resultItems = results.map(result =>


    <tr>
    <td>{result.id}</td>
    <td>22</td>
    <td>14</td>
    <td>3</td>
    <td>5</td>
    </tr>
    


  );


  

  
  









 // document.getElementById('clickme').onclick = sort_by_key(results, 'id');

  // document.getElementById('clickme2').onclick = sort_by_key(results, 'id');
  // changed
  return (
    <div id="eldiv">
    {results && results.length === 0 && <p></p>}
    {results && results.length != 0 &&
    <table>
    <thead>
      <tr>
        <th>Ancestry</th>
        <th>Allele Count</th>
        <th>Allele Number</th>
        <th>Homozygous/Hemizygous Count</th>
        <th>Homozygous/Hemizygous Count</th>
      </tr>
    </thead>
    <tbody>
    {resultItems}
    </tbody>
    </table>}
    






















      {!results && <p>Search using the left panel.</p>}
      
      
      

    </div>
    
  );
}

export default ResultList;