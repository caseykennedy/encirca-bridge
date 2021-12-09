// HomePage:
// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import { Box, Flex, Text } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import Section from '../../components/Section'

// ___________________________________________________________________

const HomePage = () => (
  <S.HomePage>
    <Section>
      <Flex>
        <Box sx={{ flex: 0.4 }}>
          <h1>
            Own your branded
            <br />
            <Text as="span" sx={{ fontFamily: 'display', fontWeight: 300 }}>
              blockchain
            </Text>{' '}
            name
          </h1>
          <p>
            Acquire your Web 3.0 top-level domain (TLD) extension with ease and
            assurance.
          </p>
        </Box>
      </Flex>
    </Section>
  </S.HomePage>
)

export default HomePage
