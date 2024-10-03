// client/src/App.js
import axios from 'axios';
import React, { useState } from 'react'; // changed

import './App.css';

import { Col, Container, Row } from 'react-bootstrap';

import ResultList from './components/ResultList';
import Search from './components/Search';

function App () {
  // new
  const [results, setResults] = useState([]);

  // new
  const search = async (query, genres, runtimeMinutes) => {
    let jsonData1 = {}
    try {
      jsonData1 = {
        meta: {
          apiVersion: '2.0'
        },
        query: {
          filters: [],
          includeResultsetResponses: 'ALL',
          pagination: {
            skip: 0,
            limit: 0
          },
          testMode: false,
          requestedGranularity: 'record'
        }
      }
      const response = await axios.post(
        'https://beacon-ri-demo.ega-archive.org/api/g_variants',
        jsonData1
      )
      console.log(response)
      setResults(response.data.response.resultSets);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className='pt-3'>
      <img class="GDI-logo" src="https://gdi.onemilliongenomes.eu/images/gdi-logo.svg" alt="GDI"></img>
      <h1>Allele Frequency Browser</h1>
      <p className='lead'>
        Use the controls below to search for a variant and filter the results.
      </p>
          <Search search={search} /> {/* changed */}

      <Row>
      <Col lg={8}>
          <ResultList results={results} /> {/* changed */}
        </Col>
        </Row>
    </Container>
  );
}

export default App;