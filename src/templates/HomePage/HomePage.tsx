// HomePage:
// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import { Box, Flex, Text } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components

// Sections
import Hero from './Hero'
import Welcome from './Welcome'

// ___________________________________________________________________

const HomePage = () => (
  <S.HomePage>
    <Hero />
    <Welcome />
  </S.HomePage>
)

export default HomePage
