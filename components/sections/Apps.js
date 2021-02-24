import styled from '@emotion/styled'
import ModalImage from 'react-modal-image'
import scenes from '../../data/scenes.json'
import { SectionHeading } from '../headings'
import Slideshow from '../sliders/Slideshow'
import { ButtonPrimary } from '../buttons'
import { above, below } from '../../utils'

const Apps = () => (
  <AppsSection id='apps'>
    <SectionHeading marginBottom='80'>
      featured <h2>Projects</h2>
    </SectionHeading>
    <MainEvent>
      <img src='/images/main-event.jpg' alt='' />
    </MainEvent>
    <AppGrid>
      {scenes.map((scene, i) => {
        const isReverse = i % 2 === 0 ? true : false

        return (
          <div key={scene.id}>
            <ModalImage
              className='modal-image'
              small={scene.image}
              large={scene.image}
              alt={scene.name}
            />
          </div>
        )
      })}
    </AppGrid>
  </AppsSection>
)

const AppsSection = styled.section`
  background: var(--appsBackground);
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--defaultPadding) 0 0 0;
  color: var(--appsColor);

  ${above.tablet`
      margin-bottom: 0;
      padding: 10rem 0 0 0;
    `}
`

const MainEvent = styled.div`
  height: 750px;
  margin-bottom: 1.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  ${below.tablet`
      height: 300px;
    `}
`

const AppGrid = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  background: var(--colorWhite);

  ${below.tablet`
      grid-template-columns: repeat(2, 1fr);
    `}
`

const SlideText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--appSlideTextBackground);
  width: 100%;
  padding: 2rem 0;
  color: var(--appSlideText);

  ${above.phone`
    width: 50%;
  `}

  p {
    width: 90%;
    max-width: 500px;
    text-align: center;
  }
`

const Stack = styled.div`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.125rem;
    text-align: center;
  }

  li + li {
    border-left: 1px solid
      ${({ reverse }) =>
        reverse ? 'var(--colorWhite)' : 'var(--appStackText)'};
    margin-left: 0.625rem;
    padding-left: 0.625rem;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  a + a {
    margin-left: 1.25rem;
  }
`

export default Apps
