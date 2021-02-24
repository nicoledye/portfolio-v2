import styled from '@emotion/styled'
import { SectionHeading } from '../headings'
import { above } from '../../utils'

const Bio = () => (
  <BioSection id='about'>
    <BioInner>
      <BioImg src='/images/nicole-dye.png' alt='Nicole Dye' />
      <BioContent>
        <SectionHeading align='right' isImage={true}>
          <img src='/images/squiggly-line.png' alt='Squiggly line' />
          hello, my name is <h1>Nicole Dye</h1>
        </SectionHeading>
        <p>
          Self-driven <em>Creative Director</em> with <strong>8+ years</strong>{' '}
          of design and agency experience with an eye for innovation and
          pixel-perfection. Designed, developed, and led the creative team on
          100+ websites, including national brands such as Sonic Drive-In,
          Little Caesars, Wienerschnitzel, Captain D’s, and D1 Training.
        </p>
        <p>
          I have print collateral for countless clients, including Captain D’s,
          California Closets, Lenny’s Subs, Wienerschnitzel, PostNet, Sonic
          Drive-In, and other recognized brands, and was featured as a guest on
          episode “How to Create a High-Performance Franchise Recruitment
          Website” on franchising podcast “What the Franchise?”
        </p>
      </BioContent>
    </BioInner>
  </BioSection>
)

const BioSection = styled.section`
  background: var(--bioBackground);
  padding: var(--defaultPadding) 0 0 0;
  color: var(--bioColor);
`

const BioInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;

  ${above.desktop`
    flex-direction: row;
    align-items: stretch;
  `}
`

const BioImg = styled.img`
  width: 450px;
  max-width: 100%;
  object-fit: contain;
  margin-bottom: 3.75rem;

  ${above.desktop`
    margin-bottom: 0;
  `}
`

const BioContent = styled.div`
  width: 450px;
  max-width: 100%;

  ${above.desktop`
      margin-left: auto;
  `}

  ul {
    list-style: none;
    margin: 20px 0 00;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 0;
    text-align: left;
  }

  span {
    display: block;
  }
`

export default Bio
