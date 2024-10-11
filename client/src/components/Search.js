// client/src/components/Search.js

import React from 'react';

import { Formik } from 'formik';
import { Col, Form, Row } from 'react-bootstrap';



function Search ({ search }) { // changed
    const onSubmit = async (values, actions) => {
        await search(
          values.cohort,
          values.variant,
          values.genome
        );
      };
      
  
    return (
      <Formik
        initialValues={{
          cohort: '',
          variant: '',
          genome: ''
        }}
        onSubmit={onSubmit}
      >
      {({
        handleChange,
        handleSubmit,
        values
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          
            <Form.Group controlId="country">
            <Row>
                
                <Col lg={8}>
                <Form.Label>Variant</Form.Label>
                    <Form.Control
                    type="text"
                    name="variant"
                    placeholder="Search for a variant (e.g. 13-32398489-A-T)"
                    value={values.genres}
                    onChange={handleChange}
                    />
                </Col>
                
                <Col lg={2}>
                <Form.Label htmlFor="points">Ref Genome</Form.Label>
                <Form.Select value={values.genome}>
                      <option>...</option>
                      <option value="1">hg38</option>
                      <option value="2">hg37</option>
                      <option value="3">NCBI36</option>
                      </Form.Select>
                    </Col>
                    <Col lg={2}>
                    <Form.Label>Cohort</Form.Label>
            
                    <Form.Select value={values.cohort}>
                      <option>...</option>
                      <option value="c1">Cohort 1</option>
                      <option value="c2">Cohort 2</option>
                      <option value="c3">Cohort 3</option>
                      </Form.Select>
                    </Col>
                    </Row>


          </Form.Group>
          <Form.Group as={Row}>
            <Row>
            <Col>
              <button className="button1 mt-3" type='submit' variant='primary'>Search</button>
              <button className="button2 mt-3 ms-2" type='submit' variant='primary' onClick={() => {window.location.href="/"}}>
      Reset
    </button>
            </Col>
            </Row>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
}

export default Search;