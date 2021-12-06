// HomePage:
// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import { Box, Flex, Text } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import Section from '../../components/Section'

// Sections

// ___________________________________________________________________

const HomePage = () => (
  <S.HomePage>
    <Section>
      <Flex>
        <Box sx={{ flex: 0.5 }}>
          <h1>
            Own your branded
            <br />
            <Text as="span"sx={{fontFamily: 'display'}}>
              blockchain
            </Text>{' '}
            name
          </h1>
          <p>
            Proin dictum lacinia feugiat. Integer et erat ac arcu lobortis
            dictum. In sodales ac nibh in feugiat. Maecenas maximus tellus nec
            lacus egestas interdum. Vestibulum eleifend interdum arcu, in
            pharetra massa pretium vel. Praesent a blandit sapien.
          </p>
        </Box>
      </Flex>
    </Section>

    <Section border={true}>
      <Flex>
        <Box sx={{ flex: 0.5 }}>
          <h2>Claim your name</h2>
          <p>
            Proin dictum lacinia feugiat. Integer et erat ac arcu lobortis
            dictum. In sodales ac nibh in feugiat. Maecenas maximus tellus nec
            lacus egestas interdum.
          </p>
        </Box>
      </Flex>
    </Section>
  </S.HomePage>
)

export default HomePage
