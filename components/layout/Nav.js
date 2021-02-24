import { useState, Fragment } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu } from '../svgs'
import { below } from '../../utils'

const links = [
  { title: 'About', href: '/#about' },
  { title: 'Portfolio', href: '#apps' },
  { title: 'Resume', href: '/resume.pdf' },
  { title: 'Contact', href: '#contact' },
]

const variants = {
  open: { x: 0 },
  closed: {
    x: '-100%',
    transition: {
      delay: 0.2,
    },
  },
}

const ulVariants = {
  open: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      staggerDirection: 1, // 1 forward, -1 backward,
      when: 'afterChildren',
    },
  },
}

const liVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: { opacity: 0 },
}

const Nav = ({ isDark }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const router = useRouter()

  return (
    <Navigation>
      <NavItems>
        {links.map(({ title, href }, i) =>
          i === 1 ? (
            <Fragment key={title}>
              <NavItem>
                <NavLink href={href}>{title}</NavLink>
              </NavItem>
              <NavItem className='logo'>
                <Link href='/'>
                  <a>
                    <Logo
                      src={
                        isDark
                          ? '/images/nicole-dye-logo.png'
                          : '/images/nicole-dye-logo.png'
                      }
                      alt='Michael Dye'
                    />
                  </a>
                </Link>
              </NavItem>
            </Fragment>
          ) : (
            <NavItem key={title}>
              {title === 'Resume' ? (
                <NavLink href={href} target='_blank' rel='noreferrer noopener'>
                  {title}
                </NavLink>
              ) : (
                <NavLink href={href}>{title}</NavLink>
              )}
            </NavItem>
          )
        )}
      </NavItems>

      <MenuBtn onClick={() => setIsNavOpen(true)} />

      <MobileNav
        variants={variants}
        initial='closed'
        animate={isNavOpen ? 'open' : 'closed'}
        transition={{ damping: 300 }}
      >
        <motion.ul variants={ulVariants}>
          {links.map(({ title, href }) => (
            <motion.li key={title} variants={liVariants}>
              {title === 'Resume' ? (
                <a
                  onClick={e => {
                    setIsNavOpen(false, (window.location = href))
                  }}
                >
                  {title}
                </a>
              ) : (
                <a
                  onClick={e => {
                    setIsNavOpen(false, router.push(href))
                  }}
                >
                  {title}
                </a>
              )}
            </motion.li>
          ))}
        </motion.ul>
        <CloseButton onClick={() => setIsNavOpen(false)}>X</CloseButton>
      </MobileNav>
    </Navigation>
  )
}

const Navigation = styled.nav`
  position: relative;
  width: 1200px;
  max-width: 90%;
  margin: 10px auto 0;
`

const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  ${below.phone`
    justify-content: center;
  `}
`

const NavItem = styled.li`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 2.3px;

  ${below.tablet`
    font-size: 1rem;
  `}

  ${below.phone`
    &:not(.logo) {
      display: none;
    }
  `}
`

const NavLink = styled.a`
  text-decoration: none;
  color: var(--navTextColor);
  transition: all 0.3s ease;

  &:hover {
    border-bottom: 3px solid var(--colorPrimary);
    padding-bottom: 5px;
  }
`

const Logo = styled.img`
  max-width: 300px;
  margin: 0 auto;

  ${below.tablet`
    max-width: 180px;
  `}
`

const MenuBtn = styled(Menu)`
  display: none;

  ${below.phone`
      display: block;
      position: absolute;
      top: 40px;
      left: 20px;
    `}

  path {
    fill: var(--menuBtnColor);
  }
`

const CloseButton = styled.button`
  margin-left: auto;
`

const MobileNav = styled(motion.nav)`
  display: flex;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--colorDark);
  width: 100vw;
  height: 100vh;
  padding: 40px;
  z-index: 2000;

  ul {
    list-style: none;
  }

  ul,
  ll {
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }

  a {
    border-bottom: 2px transparent solid;
    color: white;
    font-size: 1.75rem !important;
    text-decoration: none;
    transition: border 0.3s ease;
    cursor: pointer;

    ${below.tablet`
    font-size: 1rem;
  `}

    &:hover {
      border-bottom: 2px var(--colorPrimary) solid;
    }
  }

  button {
    display: block;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
`

export default Nav
