// Header Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Header = styled(Box)`
  background: ${theme.colors.background};
  border-bottom: ${theme.border};
  overflow: visible;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9999;

  /* a {
    color: ${theme.colors.black};
  } */

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    overflow: visible;
    margin: 0 auto;
    max-width: ${theme.maxWidth};
    /* height: ${theme.headerHeight}; */
    width: 100%;
  }
`

export const Menu = styled(Flex)`
  align-items: center;
  justify-content: flex-end;
`

export const Logo = styled(Flex)`
  display: flex;
  align-items: center;
  padding-top: ${theme.space[1]};

  a {
    display: flex;
  }
`

export const Toggle = styled.div`
  display: flex;
  align-items: flex-end;
  box-sizing: content-box;

  color: ${theme.colors.text};
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;
  cursor: pointer;

  position: relative;
  z-index: 9999;

  @media ${theme.mq.tablet} {
    display: none;
  }
`

export default Header