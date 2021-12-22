// FutureProof
// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'
import { darken } from 'polished'

// Theme + ui
import { Button, Flex } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import Section from '../../../components/Section'
import Icon from '../../../components/Icons'

// SVG
import HandshakeSymbol from '../../../components/SVG/Handshake'
import BridgeSymbol from '../../../components/SVG/Symbol'

import Solids from '../../../../static/solids.svg'

// ___________________________________________________________________

const FutureProof = () => (
  <Section bg={darken(0.015, theme.colors.background)} border={true}>
    <S.FutureProof>
      <div className="decorator">
        <Solids />
      </div>

      <div className="inner">
        <div className="logo-pill">
          <HandshakeSymbol fill="white" />
          <Flex as="span" sx={{ fontSize: 6, fontWeight: 500, mx: 3 }}>
            +
          </Flex>
          <BridgeSymbol fill={theme.colors.primary} />
        </div>

        <h2>Future-proof your brand. Expand the possibilities.</h2>

        <p>
          The digital universe is just beginning. Your domain is your digital
          realty, own it.
        </p>

        <Link to="/">
          <Button px={5} py={3}>
            Claim your TLD
            <Icon name="chevron" />
          </Button>
        </Link>
      </div>
    </S.FutureProof>
  </Section>
)

export default FutureProof
