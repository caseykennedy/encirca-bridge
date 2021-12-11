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
import FutureWeb from './FutureWeb'
import AcquireYourTld from './AcquireYourTld'

// ___________________________________________________________________

const HomePage = () => (
  <S.HomePage>
    <Hero />
    <Welcome />
    <FutureWeb />
    <AcquireYourTld />
  </S.HomePage>
)

export default HomePage
