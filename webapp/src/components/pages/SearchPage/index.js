import React from 'react'

import { apiUrl } from 'config';

import {
  PageTemplate, Header, Footer, List, Heading, Field, IconButton, Block
} from 'components';

import styled from 'styled-components';
import { size, palette } from 'styled-theme';

const Error = styled(Block)`
  margin-top: ${size('margin')};
`;

const ResultLlist = styled(List)`
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;

  & > li:nth-child(even) {
    background-color: ${palette('grayscale', 1, true)}
  }
`;

class SamplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      results: [],
      selectedProperty: null,
      error: ''
    };
  }

  setGenericError(e) {
    console.error('Error', e);
    
    this.setState({
      results: [],
      error: 'Error communicating with the server'
    });
  }

  search(q) {
    fetch(`${apiUrl}/search?q=${q}`)
    .then((r) => Promise.all([r.json(), r.status]))
    .then(response => {

      const status = response[1];
      const body = response[0];

      if (status !== 200) {
        this.setState({ results: [], error: body.message });
      } else {
        this.setState({ results: body, error: '' });
      }
      
    })
    .catch(this.setGenericError);
  }

  checkFloodzone(property) {
    // TODO: change endpoint when backend is ready
    console.log('property', property);
    fetch(`${apiUrl}/check-if-in-floodzone?lon=${property.lon}&lat=${property.lat}`)
    .then((res) => res.json())
    .then((result) => this.setState({ error: '', selectedProperty: { display_name: property.display_name, is_on_floodzone: result.is_on_floodzone } }))
    .catch(this.setGenericError);
  }

  render() {

    const selectedProperty = this.state.selectedProperty;
    const isOrIsNot = selectedProperty && selectedProperty.is_on_floodzone ? 'IS' : 'IS NOT';

    return (
      <PageTemplate header={<Header />} footer={<Footer />}>
        <Heading>Search for a property</Heading>
        
        <Field name="query" onChange={(e) => this.setState({ q: e.target.value })} />
        
        <IconButton icon="search" onClick={() => { this.search(this.state.q) }}>Go!</IconButton>
        
        {this.state.error && <Error className="error" role="alert" palette="danger">{this.state.error}</Error>}
        
        {!this.state.selectedProperty && this.state.results.length ? <ResultLlist children={this.state.results.map((r, i) => <li key={i} onClick={() => this.checkFloodzone(r)}> {r.display_name} </li>)} /> : '' }

        {this.state.selectedProperty && <Heading>{selectedProperty.display_name} {isOrIsNot} in a Flood zone </Heading>}

      </PageTemplate>
    )
  }
}

export default SamplePage
