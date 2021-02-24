import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { above } from '../../utils/breakpoints'

export const ButtonPrimary = ({
  color = 'light',
  icon = faChevronRight,
  children,
  ...rest
}) => (
  <Button {...rest} color={color}>
    {children}
    <FontAwesomeIcon icon={icon} />
  </Button>
)

const Button = styled.button`
  display: inline-block;
  background: transparent;
  border: 2px solid var(--colorPrimary);
  padding: 0.6em;
  color: ${({ dark }) =>
    dark ? 'var(--buttonColorDark)' : 'var(--colorWhite)'};
  font-weight: 500;
  font-size: 0.875rem;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color;
  transition-duration: 0.3s;

  ${above.desktop`
    font-size: 1.125rem;
  `}

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--colorPrimary);
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover,
  &:focus,
  &:active {
    color: var(--colorDark);
  }

  &:hover:before,
  &:focus:before,
  &:active:before {
    transform: scaleX(1);
  }

  svg {
    margin-left: 5px;
    transition: all 0.3s ease;
  }
`

export default ButtonPrimary
