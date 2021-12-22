// ClaimYours
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

// SVG
import HandshakeSymbol from '../../../components/SVG/Handshake'

// ___________________________________________________________________

const ClaimYours = () => (
  <S.ClaimYours bg="highlight" border={true}>
    <Flex sx={{ justifyContent: 'center' }}>
      <div className="handshake">
        <HandshakeSymbol fill="white" />
      </div>

      <h2>Ready for your TLD?</h2>
    </Flex>

    <ClaimDomainForm />

    <Flex sx={{ justifyContent: 'center', mt: 5 }}>
      <PoweredBy />
    </Flex>
  </S.ClaimYours>
)

export default ClaimYours
