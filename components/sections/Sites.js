import { useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { SectionHeading } from '../headings'
import { ButtonPrimary } from '../buttons'
import { below, above } from '../../utils'
import sites from '../../data/sites.json'

const Sites = () => {
  const [mktSites, setMktSites] = useState(sites)

  const handleUpdateIcon = currentId => {
    setMktSites(prevSites =>
      prevSites.map(({ open, id, ...rest }) =>
        id === currentId ? { ...rest, id, open: !open } : { ...rest, id, open }
      )
    )
  }

  return (
    <SitesSection id='sites'>
      <SectionHeading>
        grow your business <h2>Marketing Sites</h2>
      </SectionHeading>
      <SitesList>
        {mktSites.map(({ id, title, description, slug, image, open }) => (
          <Site key={id}>
            <img src={image} alt='Placeholder' />
            <SiteDescription
              onMouseEnter={() => handleUpdateIcon(id)}
              onMouseLeave={() => handleUpdateIcon(id)}
            >
              <Circle>
                <FontAwesomeIcon icon={open ? faMinus : faPlus} size='2x' />
              </Circle>
              <h3>{title}</h3>
              <p>{description}</p>
              <ButtonPrimary as='a' href='/#contact'>
                Contact Me
              </ButtonPrimary>
            </SiteDescription>
          </Site>
        ))}
      </SitesList>
    </SitesSection>
  )
}

const SitesSection = styled.section`
  background: var(--sitesBackground);
  padding: var(--defaultPadding) 0 0;
  color: var(--sitesTextColor);
`

const SitesList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;

  ${above.phone`
    flex-direction: row;
  `}
`

const Site = styled.li`
  --gap: 0.9375rem;
  position: relative;
  height: 28.125rem;
  width: 100%;
  border: 1px solid black;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  ${above.phone`  
    width: calc(100% - var(--gap));
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
`

const SiteDescription = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
  right: 0;
  left: 0;
  padding: 1.25rem;
  transform: translate3d(0, 60%, 0);
  transition: all 0.5s;
  text-align: center;

  ${above.tablet`
    transform: translate3d(0, 55%, 0);
  `}

  &:hover {
    cursor: pointer;
    transform: translate3d(0, 0, 0);
  }

  h3,
  p {
    color: var(--colorWhite);
  }

  h3 {
    margin-bottom: 0;
  }

  p {
    font-size: 1.2rem;
  }
`

const Circle = styled.div`
  position: absolute;
  top: -1.625rem;
  background: var(--colorPrimary);
  border-radius: 50%;
  border: none;
  padding: 0.625rem;
  color: var(--colorWhite);
`

export default Sites
