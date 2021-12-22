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

// ___________________________________________________________________

const Hero = () => (
  <>
    <S.Hero py={theme.gutter.vertical}>
      <Flex px={theme.gutter.axis} className="hero__inner">
        <div className="message">
          <h1>
            
            Own your branded
            <br />
            <Text sx={{ fontFamily: 'display', fontWeight: 300 }}>
              blockchain
            </Text>{' '}
            name/
          </h1>

          <Text as="p" pr={[0, 6, 7]}>
            Acquire your Web 3.0 top-level domain (TLD) extension with ease and
            assurance.
          </Text>

          <PoweredBy />
        </div>

        <div className="art">
          <SymbolGlobe />
        </div>
      </Flex>
    </S.Hero>

    <Section pt={0} pb={0}>
      <ClaimDomainForm />
    </Section>
  </>
)

export default Hero
