// client/src/components/ResultList.js

import React, { useState, useEffect} from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

// changed
function ResultList ({ results }, props) {
  console.log(results)
  const columns = [
    { field: 'population', headerName: 'Ancestry', flex: 1, headerClassName: 'table-header' },
    { field: 'alleleCount', headerName: 'Allele Count', flex: 1, headerClassName: 'table-header' },
    { field: 'alleleNumber', headerName: 'Allele Number', flex: 1, headerClassName: 'table-header' },
    { field: 'alleleCountHomozygous', headerName: 'Homozygous/Hemizygous Count', flex: 1, headerClassName: 'table-header' },
    { field: 'alleleFrequency', headerName: 'Allele Frequency', flex: 1, headerClassName: 'table-header' },
]
  var i =0
  const rows = []
  const resultItems = results.map(result => result.results.map(variant => variant.frequencyInPopulations.map(frequencyInPopulation => frequencyInPopulation.frequencies.map(frequency =>
  
    rows.push({ 
      id: i+=1,
      population: frequency.population, 
      alleleCount: frequency.alleleCount, 
      alleleNumber: frequency.alleleNumber,
      alleleCountHomozygous: frequency.alleleCountHomozygous,
      alleleFrequency: frequency.alleleFrequency, })

  ))));
 // document.getElementById('clickme').onclick = sort_by_key(results, 'id');

  // document.getElementById('clickme2').onclick = sort_by_key(results, 'id');
  // changed
  return (
    <div id="eldiv">
    {results && results.length === 0 && <p></p>}
    {results && results.length !== 0 &&
        <DataGrid 

        initialState={{
            columns: {
              columnVisibilityModel: {
                // Hide columns status and traderName, the other columns will remain visible
                sex_concept_class_id: false,
                
              },
            },
          }}
        getRowHeight={() => 'auto' }


            columns={columns}
            rows={rows}
            readOnly={true}

        />}
      {!results && <p>Search using the left panel.</p>}
    </div>
    
  );
}

export default ResultList;