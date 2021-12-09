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

// ___________________________________________________________________

const HomePage = () => (
  <S.HomePage>
    <Hero />
  </S.HomePage>
)

export default HomePage
