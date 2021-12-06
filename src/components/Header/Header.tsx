// Header:
// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'

// Theme + ui
import { Flex, Text, useColorMode } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import Navigation from './Navigation'
import MobileNav from './MobileNav'
import Modal from '../Modal'
import Logo from '../SVG/Logo'

// ___________________________________________________________________

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => setNavOpen(!isNavOpen)
  return (
    <>
      <S.Header px={theme.gutter.axis} py={4}>
        <Flex className="header-inner">
          <S.Logo onClick={() => setNavOpen(false)}>
            <Link to="/" aria-label="Bridge, back to home">
              <Logo />
            </Link>
          </S.Logo>

          <S.Menu>
            <Navigation />

            <S.Toggle onClick={toggleMenu} aria-label="toggle menu">
              <HamburgerMenu
                isOpen={!!isNavOpen}
                menuClicked={toggleMenu}
                width={36}
                height={12}
                strokeWidth={2}
                rotate={0}
                color={theme.colors.black}
                borderRadius={0}
                animationDuration={0.333}
              />
            </S.Toggle>
          </S.Menu>
        </Flex>
      </S.Header>

      <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal>
    </>
  )
}

export default Header
