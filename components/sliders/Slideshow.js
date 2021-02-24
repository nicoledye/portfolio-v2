import { useState } from 'react'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { above } from '../../utils'
import { ButtonPrimary } from '../buttons'

const Slideshow = ({ scenes }) => {
  const [[scene, direction], setScene] = useState([0, 0])
  const paginate = direction => {
    setScene([scene + direction, direction])
  }

  const variants = {
    enter: direction => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      zIndex: 0,
    }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: direction => ({
      zIndex: 0,
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  }

  const index = wrap(0, scenes.length, scene)

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <LeftArrow onClick={() => paginate(1)}>
          <FontAwesomeIcon
            icon='chevron-left'
            size='2x'
            className='left-arrow'
          />
        </LeftArrow>
        <AnimatePresence custom={direction} exitBeforeEnter initial={false}>
          <SlideContent>
            <SlideInner
              key={scene}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic='1'
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x > 400) {
                  paginate(-1)
                } else if (offset.x < -400) {
                  paginate(1)
                }
              }}
              transition={{
                x: {
                  type: 'spring',
                  stiffness: 100,
                  bounce: 0,
                  damping: 20,
                  duration: 0.1,
                },
                opacity: { duration: 0.2 },
              }}
            >
              <div className='slide-text'>
                <h3>{scenes[index].title}</h3>
                <p>{scenes[index].description}</p>
                <Stack>
                  {scenes[index].stack.map(stackItem => (
                    <li key={stackItem}>{stackItem}</li>
                  ))}
                </Stack>
              </div>
              <SlideImgContainer leftOffset={scenes[index].offset}>
                <SlideImg
                  src={scenes[index].image}
                  alt='Michael Dye'
                  width={scenes[index].width}
                />
              </SlideImgContainer>
              <ButtonContainer>
                {scenes[index].source && (
                  <ButtonPrimary
                    dark
                    as='a'
                    target='_blank'
                    rel='nofollow noopenner'
                    href={scenes[index].source}
                  >
                    View Source
                  </ButtonPrimary>
                )}
                {scenes[index].demo && (
                  <ButtonPrimary
                    dark
                    as='a'
                    target='_blank'
                    rel='nofollow noopenner'
                    href={scenes[index].demo}
                  >
                    View App
                  </ButtonPrimary>
                )}
              </ButtonContainer>
            </SlideInner>
          </SlideContent>
        </AnimatePresence>

        <RightArrow onClick={() => paginate(-1)}>
          <FontAwesomeIcon
            icon='chevron-right'
            size='2x'
            className='right-arrow'
          />
        </RightArrow>
      </div>
    </div>
  )
}

const SlideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--slideshowBackground);
  height: auto;
  padding: 2.5rem 0;
  color: var(--slideshowTextColor);

  ${above.tablet`
    justify-content: flex-start;
    height: 21.875rem;
  `}

  h3 {
    margin-top: 0;
  }

  .slide-text {
    display: inline-block;
    width: 90%;
    max-width: 300px;
    margin: 0 auto;
    text-align: center;

    ${above.tablet`
      margin-left: 9.375rem;
      text-align: left;
    `}
  }
`

const SlideInner = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  height: auto;

  ${above.tablet`
     flex-direction: row;
     height: 350px;
  `}
`

const SlideImg = styled.img`
  display: inline-block;
  max-width: 100%;
`

const SlideImgContainer = styled.div`
  position: static;
  margin: 0 auto 0.625rem;
  transform: translateY(0);
  left: ${({ leftOffset }) => `${leftOffset}%`};

  ${above.tablet`
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
  `}
`

const Stack = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
  margin: 0;

  ${above.tablet`
    justify-content: start;
  `}

  li {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.125rem;
    text-align: center;
  }

  li + li {
    border-left: 1px solid black;
    margin-left: 0.625rem;
    padding-left: 0.625rem;
  }
`

const arrow = styled.button`
  position: absolute;
  bottom: 50%;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--colorPrimary);
  z-index: 100;
`

const LeftArrow = styled(arrow)`
  left: 0;

  ${above.tablet`
      left: 3.125rem;
  `}
`

const RightArrow = styled(arrow)`
  right: 0;

  ${above.tablet`
    right: 3.125rem;
  `}
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: -20%;
  transform: translateX(-50%);
  width: 100%;

  ${above.tablet`
      justify-content: flex-start;
      left: 9.375rem;
      transform: translateX(0);
  `}

  a + a {
    margin-left: 1.25rem;
  }
`

export default Slideshow
