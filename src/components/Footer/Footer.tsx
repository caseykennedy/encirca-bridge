// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import { Box, Flex, Text } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import HandshakeBadge from '../HandshakeBadge'

// ___________________________________________________________________

const getYear = () => new Date().getFullYear()
const mailTo = 'mailto:info@dotnft.com'

const Footer = () => (
  <S.Footer>
    <Flex px={theme.gutter.axis} className="footer__inner">
      <Flex className="legal">
        <Text>&copy;{getYear()} .nft</Text>
        <Flex>
          <Text mr={3}>
            <Link to="/privacy-policy">Privacy</Link>
          </Text>
          <Link to="/terms-of-use">Terms</Link>
        </Flex>
      </Flex>
    </Flex>
  </S.Footer>
)

export default Footer
