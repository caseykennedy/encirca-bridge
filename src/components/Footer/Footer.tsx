// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import { Box, Flex, Text } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import HandshakeBadge from '../HandshakeBadge'
import Logo from '../SVG/Logo'

import Background from '../../../static/bg-footer.svg'

// ___________________________________________________________________

const data = [
  {
    title: 'Terms & Conditions',
    path: '/terms-conditions',
  },
  {
    title: 'Privacy Policy',
    path: '/privacy-policy',
  },
  {
    title: 'Contact',
    path: 'mailto:info@bridge.com',
  },
]

const getYear = () => new Date().getFullYear()

const Footer = () => (
  <S.Footer>
    <Flex px={theme.gutter.axis} className="footer__inner">
      <Flex className="utilities">
        <Flex className="util">
          <h4>Connect with us</h4>
        </Flex>

        <Flex className="util">
          <h4>Stay up to date with Bridge</h4>
        </Flex>
      </Flex>

      <Flex className="legal">
        <Box>&copy;{getYear()} Bridge</Box>

        <Flex className="nav">
          <Flex>
            {data.map((item, idx) => (
              <Text ml={5} key={idx}>
                <Link to={item.path}>{item.title}</Link>
              </Text>
            ))}
          </Flex>

          <Flex ml={6}>
            <Logo />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    
    <div className="decorator">
      <Background />
    </div>
  </S.Footer>
)

export default Footer
