import React from 'react'

import {
  PageTemplate, Header, Footer, Table, Heading, Field
} from 'components'

const SamplePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading>Search for a property</Heading>
      <Field name="query" label="Search query" />
      <Table children={[<tr><td>result one</td></tr>, <tr><td>result two</td></tr>]} caption="results" />
    </PageTemplate>
  )
}

export default SamplePage
