import React from 'react'
import styled from '@emotion/styled'
import { below } from '../../utils/breakpoints'

export const OneByTwo = ({ children, reverse, background }) => {
  return <OneByTwoS reverse={reverse}>{children}</OneByTwoS>
}

const OneByTwoS = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  background: var(--colorWhite);

  ${below.phone`
      flex-direction: column-reverse;
  `}
`
