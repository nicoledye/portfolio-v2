import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { below } from '../../utils/breakpoints'

const imageStyles = css`
  img {
    width: 80px;
    margin-right: 10px;
  }
`

export const SectionHeading = styled.div`
  margin-bottom: ${({ marginBottom = 20 }) => `${marginBottom}px`};
  text-align: right;
  font-weight: 300;
  font-size: 2rem;
  text-align: ${({ align = 'center' }) => align};

  ${({ isImage }) => {
    if (isImage) {
      return imageStyles
    }
  }}

  ${below.phone`
    font-size: 1.5rem;
    margin-bottom: 20px;
  `}

  h2 {
    display: block;
    margin: 0;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1.5px;
  }
`
