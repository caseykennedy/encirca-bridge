// Navigation
// ___________________________________________________________________

import React, { useState, useCallback } from 'react'
import { Link } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

// Theme + ui
import { Button, Box, Flex, Text, useColorMode } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import Icon from '../../Icons'

import routes from '../routes.json'

// ___________________________________________________________________

const Navigation = () => {
  const [colorMode, setColorMode] = useColorMode()
  const [isDarkMode, setDarkMode] = useState(false)
  const isDark = colorMode === 'dark'

  const toggleDarkMode = useCallback(
    (checked: boolean) => {
      setDarkMode(checked)
      setColorMode(colorMode === 'default' ? 'dark' : 'default')
    },
    [setColorMode, colorMode]
  )

  return (
    <S.Nav>
      <Link to="/faq" className="faq">
        FAQ
      </Link>

      <Flex mr={5} ml={4}>
        <DarkModeSwitch
          moonColor={theme.colors.text}
          sunColor={theme.colors.primary}
          checked={isDark}
          onChange={toggleDarkMode}
          size={20}
        />
      </Flex>

      <Link to="/register" className="btn">
        <Button variant="outline">
          Claim your name
          <Icon name="chevron" />
        </Button>
      </Link>
    </S.Nav>
  )
}

export default Navigation
