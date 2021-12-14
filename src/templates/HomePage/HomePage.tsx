// HomePage:
// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import { Box, Flex, Text } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Sections
import Hero from './Hero'
import Welcome from './Welcome'
import FutureWeb from './FutureWeb'
import AcquireYourTld from './AcquireYourTld'
import YourInternet from './YourInternet'

// ___________________________________________________________________

const HomePage = () => (
  <S.HomePage>
    <Hero />
    <Welcome />
    <FutureWeb />
    <AcquireYourTld />
    <Box
      sx={{
        bg: '#26476C',
        height: '1px',
        width: '100%',
        my: [4, 5],
      }}
    />
    <YourInternet />
  </S.HomePage>
)

export default HomePage
