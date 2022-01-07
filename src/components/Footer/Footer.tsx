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

const mailto = 'mailto:info@bridge.com'

const navLinks = [
  {
    name: 'Terms & Conditions',
    path: '/',
  },
  {
    name: 'Privacy Policy',
    path: '/',
  },
]

const socialLinks = [
  {
    name: 'twitter',
    path: 'http://discord.com',
  },
]

const getYear = () => new Date().getFullYear()

const Footer = () => (
  <S.Footer>
    <Flex px={theme.gutter.axis} className="footer__inner">
      <div className="utilities">
        <div className="util">
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
        </div>

        <div className="util">
          <h4>Stay up to date with Bridge</h4>
        </div>
      </div>

      <div className="legal">
        <span>&copy;{getYear()} Bridge</span>

        <div className="nav">
          <div className="nav__links">
            {navLinks.map((item, idx) => (
              <Link to={item.path} key={idx}>
                {item.name}
              </Link>
            ))}
            <a href={mailto}>Contact</a>
          </div>

          <div className="logo">
            <Logo />
          </div>
        </div>
      </div>
    </Flex>

    <div className="decorator">
      <Background />
    </div>
  </S.Footer>
)

export default Footer
