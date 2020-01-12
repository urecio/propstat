import React from 'react'
import styled from 'styled-components'

import {
  Feature, Link, Heading, Paragraph,
} from 'components'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  > * {
    width: calc(50% - 2rem);
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Description = styled(Paragraph)`
  text-align: center;
  margin: 2rem;
  @media screen and (max-width: 640px) {
    margin: 1rem;
  }
`

const StyledFeature = styled(Feature)`
  margin: 1rem;
  @media screen and (max-width: 640px) {
    margin: 0;
  }
`

const FeatureList = ({ ...props }) => (
  <div {...props}>
    <StyledHeading>Propstat</StyledHeading>
    <Description>
      Check if a property is on a flood zone!
    </Description>
    <Grid>
      <StyledFeature
        icon="webpack"
        title="Visual"
      >
        Visualize the poligon on the map
      </StyledFeature>
      <StyledFeature
        icon="react-router"
        link="https://github.com/ReactTraining/react-router"
        title="Free"
      >
        Use this service for free
      </StyledFeature>
    </Grid>
  </div>
)

export default FeatureList
