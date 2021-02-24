import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonPrimary } from '../buttons'
import { above } from '../../utils/breakpoints'

const CTA = props => {
  return (
    <CTASection>
      <h3>Let's work together!</h3>
      <p>
        Contact me to request a copy of my resume or receive a project quote.
      </p>
      <ButtonPrimary as='a' dark href='/#contact'>
        Contact Me
      </ButtonPrimary>
    </CTASection>
  )
}

const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  background: var(--ctaBackground);
  padding: var(--defaultPadding) 0;
  text-align: center;
  color: var(--ctaTextColor);

  h3 {
    margin-bottom: 1.25rem;
  }

  p {
    width: 90%;
    max-width: 750px;
    margin: 0 auto 1.25rem;
  }
`

export default CTA
