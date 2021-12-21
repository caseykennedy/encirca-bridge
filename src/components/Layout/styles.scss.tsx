// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Wrapper = styled.div`
  background: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-height: 100vh;
`

export const Main = styled.main`
  background: ${theme.colors.background};
  border-bottom: ${theme.border};
  margin: 0 auto;
  position: relative;
  min-height: 85vh;
  max-height: 100%;
  max-width: ${theme.siteWidth};
  width: 100%;
  z-index: 1;
`
