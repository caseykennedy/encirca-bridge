// Hero

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + ui
import { Box, Flex, Text } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import Section from '../../../components/Section'

// SVG
import SymbolGlobe from '../../../../static/hero-symbol-globe.svg'

// ___________________________________________________________________

const Hero = () => (
  <S.Hero py={theme.gutter.vertical}>
    <Flex px={theme.gutter.axis} className="hero__inner">
      <Box className="message">
        <Box sx={{ pr: [0, 0, 6], width: '100%' }}>
          <h1>
            Own your branded
            <br />
            <Text as="span" sx={{ fontFamily: 'display', fontWeight: 300 }}>
              blockchain
            </Text>{' '}
            name/
          </h1>
          <p>
            Acquire your Web 3.0 top-level domain (TLD) extension with ease and
            assurance.
          </p>
          <Text as="p" color="white">
            Powered by <strong>EnCirca</strong>&trade;
          </Text>
        </Box>
      </Box>
      <Flex className="art">
        <Box sx={{ pl: [0, 6, 5], width: '100%' }}>
          <SymbolGlobe />
        </Box>
      </Flex>
    </Flex>
  </S.Hero>
)

export default Hero
