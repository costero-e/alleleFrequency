// client/src/App.js
import axios from 'axios';
import React, { useState } from 'react'; // changed

import './App.css';

import { Col, Container, Row } from 'react-bootstrap';

import ResultList from './components/ResultList';
import Search from './components/Search';

import SignInForm from './components/SignIn/SignInForm'

import { useAuth } from 'oidc-react'

import Footer from './components/Footer.js'

function App () {
  // new
  const [results, setResults] = useState([]);
  const [isQuizePageVisible, setIsQuizePageVisible] = useState(false)
  const auth = useAuth()

  const onClickHandler = () => {
    // Set the visibility flag to true when the button is clicked
    setIsQuizePageVisible(true)
  }


  // new
  const search = async (cohort, variant, genome) => {
    let jsonData1 = {}
    var arr = variant.split("-");
    //console.log(auth.userData.access_token);
    // console.log(auth)
    try {
      jsonData1 = {
        meta: {
          apiVersion: '2.0'
        },
        query: {
          requestParameters: {
        "alternateBases": arr[2],
    "referenceBases": arr[3],
"start": arr[1],
            "referenceName": arr[0]
},
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
      let response;
      
      if (auth && auth.userData){
        // console.log(auth)
      response = await axios({
        method: 'post',
        url: `http://localhost:5050/api/g_variants`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.userData.access_token}`
        },
        data: jsonData1
      }
      )
    } else {
      response = await axios({
        method: 'post',
        //url: `http://localhost:5050/api/g_variants?start=${arr[1]}&alternateBases=${arr[2]}&referenceBases=${arr[3]}&referenceName=${arr[0]}`,
        url: `http://localhost:5050/api/g_variants`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: jsonData1
      })
    }
      console.log(response)
      setResults(response.data.response.resultSets);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className='pt-3'>
      <Row>

      <Col lg={3}>
      <img class="GDI-logo" src="https://gdi.onemilliongenomes.eu/images/gdi-logo.svg" alt="GDI"></img>
      </Col>
      <Col lg={7}>
      <h1 class="allele">Allele Frequency Browser</h1>

      </Col>
      <Col>
      {/*<button onClick={onClickHandler} style={{backgroundImage:"url('/../ls-login.png')",backgroundSize:"cover",backgroundColor:"transparent",height:"35px",width:"160px",borderWidth:"0"}}></button>*/}
      {/*<button></button>*/}

      {/* When the flag is true, the page will be shown */}
      
      {auth && auth.userData && <SignInForm/>}
      {!auth.userData && isQuizePageVisible && <SignInForm/>}
      </Col>
      <p className='lead mt-5'>
        Use the controls below to search for a variant and filter the results.
      </p>

          <Search search={search} /> {/* changed */}
          

          </Row>
      <Row>
      <Col lg={8}>
          <ResultList results={results} /> {/* changed */}
        </Col>
        </Row>
        <Footer></Footer>
    </Container>
    
    
  );
}

export default App;