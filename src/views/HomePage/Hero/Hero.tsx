// Hero
// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import { Box, Flex, Text } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import Section from '../../../components/Section'
import ClaimDomainForm from '../../../components/ClaimDomainForm'
import SymbolGlobe from '../../../components/SVG/SymbolGlobe'
import PoweredBy from '../../../components/PoweredBy'

import Welcome from '../Welcome'

// ___________________________________________________________________

const Hero = () => (
  <S.Hero pt={[6, 6, 7]} pb={theme.gutter.vertical}>
    <Box px={theme.gutter.axis} className="hero__inner">
      <div className="billboard">
        <div className="message">
          <h1>
            Protect your brand,
            <br />
            own your{' '}
            <Text sx={{ fontFamily: 'display', fontWeight: 300 }}>
              blockchain
            </Text>{' '}
            domain/
          </h1>

          <Text as="p" pr={[0, 6, 7]}>
            A custodianship service for trademark holders on the dWeb — acquire
            your Web 3.0 <strong>top-level domain (TLD)</strong> extension with ease and
            assurance.
          </Text>

          <PoweredBy />
        </div>

        <div className="art">
          <SymbolGlobe />
        </div>
      </div>

      <Box mt={theme.gutter.vertical}>
        <ClaimDomainForm />
      </Box>

      <Box mt={theme.gutter.vertical}>
        <Welcome />
      </Box>
    </Box>
  </S.Hero>
)

export default Hero
