// client/src/components/ResultList.js

import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';

// changed
function ResultList ({ results }, props) {
  // console.log(results)
  const columns = [
    { field: 'population', headerName: 'Ancestry', flex: 3, headerClassName: 'super-app-theme--header' },
    { field: 'alleleCount', headerName: 'Allele Count', flex: 3, headerClassName: 'super-app-theme--header' },
    { field: 'alleleNumber', headerName: 'Allele Number', flex: 3, headerClassName: 'super-app-theme--header' },
    { field: 'alleleCountHomozygous', headerName: 'Homozygous/Hemizygous Count', flex: 3, headerClassName: 'super-app-theme--header' },
    { field: 'alleleFrequency', headerName: 'Allele Frequency', flex: 3, headerClassName: 'super-app-theme--header' },
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
    <Box sx={{ margin: 2,
      width: '100%',backgroundColor: 'white',
      '& .super-app-theme--header': {
        backgroundColor: '#7B1B58',
        color: 'white'
      }, }}>
        <DataGrid sx={{
          boxShadow: 2,
          height: '100%',
          '& .MuiDataGrid-cell:hover': {
            color: '#7B1B58',
            backgroundColor: 'white'
          },
        }}

        initialState={{
            columns: {
              columnVisibilityModel: {
                // Hide columns status and traderName, the other columns will remain visible
                sex_concept_class_id: false,
                
              },
            },
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
        getRowHeight={() => 'auto' }


            columns={columns}
            rows={rows}
            readOnly={true}

        /></Box>}
      {!results && <p>Search using the left panel.</p>}
    </div>
    
  );
}

export default ResultList;