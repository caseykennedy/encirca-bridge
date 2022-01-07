// Navigation
// ___________________________________________________________________

import React, { useState, useCallback } from 'react'
import { Link } from 'gatsby'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

// Theme + ui
import { Button, Box, Flex, Text, useColorMode } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import Icon from '../../Icons'

// ___________________________________________________________________

const Navigation = () => {
  const [colorMode, setColorMode] = useColorMode()
  const [isDarkMode, setDarkMode] = useState(false)
  const isDark = colorMode === 'dark'

  // const toggleDarkMode = useCallback(
  //   (checked: boolean) => {
  //     setDarkMode(checked)
  //     setColorMode(colorMode === 'default' ? 'dark' : 'default')
  //   },
  //   [setColorMode, colorMode]
  // )

  return (
    <S.Nav>
      <a href="/" className="faq">
        <span>?</span>
        FAQ
      </a>

      {/* <Flex mx={4}>
        <DarkModeSwitch
          moonColor={theme.colors.text}
          sunColor={theme.colors.primary}
          checked={true}
          onChange={toggleDarkMode}
          size={20}
        />
      </Flex> */}

      <Link to="/claim" className="claim-btn">
        <Button variant="outline">
          Claim a TLD
          <Icon name="chevron" />
        </Button>
      </Link>
    </S.Nav>
  )
}

export default Navigation
