import styled from '@emotion/styled'
import Nav from './Nav'

const Header = ({ isDark }) => (
  <HeaderSection>
    <Nav isDark={isDark} />
  </HeaderSection>
)

const HeaderSection = styled.section`
  width: 100%;
`

export default Header
