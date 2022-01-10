// ClaimYours
// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import { Flex, Heading } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import ClaimDomainForm from '../../../components/ClaimDomainForm'
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

      <Heading as="h2" mt={[2, 0]} mb={3}>
        Ready for your TLD?
      </Heading>
    </Flex>

    <ClaimDomainForm />

    <Flex sx={{ justifyContent: 'center', mt: [4, 5] }}>
      <PoweredBy />
    </Flex>
  </S.ClaimYours>
)

export default ClaimYours
