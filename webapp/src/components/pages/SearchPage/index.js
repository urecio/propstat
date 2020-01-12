import React from 'react'

import { apiUrl } from 'config';

import {
  PageTemplate, Header, Footer, List, Heading, Field
} from 'components'

class SamplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      results: []
    };
  }

  search(q) {
    fetch(`${apiUrl}/search?q=${q}`)
    .then((r) => r.json())
    .then(results => {
      this.setState({ results });
    });
  }

  render() {
    return (
      <PageTemplate header={<Header />} footer={<Footer />}>
        <Heading>Search for a property</Heading>
        <Field name="query" label="Search query" onChange={(e) => this.setState({ q: e.target.value })} />
        <button onClick={() => { this.search(this.state.q) }} value="Go!" />
        {this.state.results.length ? <List children={this.state.results.map((r, i) => <li key={i}> {r.display_name} </li>)} /> : '' }
      </PageTemplate>
    )
  }
}

export default SamplePage
