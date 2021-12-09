// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import { Box, Flex, Text } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import Icon from '../Icons'
import Logo from '../SVG/Logo'

import Background from '../../../static/bg-footer.svg'

// ___________________________________________________________________

const navLinks = [
  {
    name: 'Terms & Conditions',
    path: '/terms-conditions',
  },
  {
    name: 'Privacy Policy',
    path: '/privacy-policy',
  },
  {
    name: 'Contact',
    path: 'mailto:info@bridge.com',
  },
]

const socialLinks = [
  {
    name: 'twitter',
    path: 'http://discord.com',
  },
  {
    name: 'twitter',
    path: 'http://twitter.com',
  },
  {
    name: 'twitter',
    path: 'http://github.com',
  },
]

const getYear = () => new Date().getFullYear()

const Footer = () => (
  <S.Footer>
    <Flex px={theme.gutter.axis} className="footer__inner">
      <Flex className="utilities">
        <Flex className="util">
          <h4>Connect with us</h4>
          <Flex mt={5}>
            {socialLinks.map((item, idx) => (
              <Box key={idx}>
                <a href={item.path}>
                  <Icon name={item.name} color="white" />
                </a>
              </Box>
            ))}
          </Flex>
        </Flex>

        <Flex className="util">
          <h4>Stay up to date with Bridge</h4>
        </Flex>
      </Flex>

      <Flex className="legal">
        <Text>&copy;{getYear()} Bridge</Text>

        <Flex className="nav">
          <Flex>
            {navLinks.map((item, idx) => (
              <Text ml={5} key={idx}>
                <Link to={item.path}>{item.name}</Link>
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
