// Nft Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const ClaimDomainForm = styled.form`
  display: flex;
  align-items: center;
  margin: 0;
  position: relative;

  @media ${theme.mq.tablet} {
    margin: 0 ${theme.space[8]};
  }

  label {
  }

  input {
    background: ${theme.colors.background};
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius};
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes[3]};
    padding: ${theme.space[4]} ${theme.space[7]};
    height: ${theme.inputHeight};
    width: 100%;
    outline: none;

    &::placeholder {
      color: ${theme.colors.gray};
    }
  }

  .button-box {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-right: ${theme.space[2]};
    position: absolute;
    top: 0;
    right: 0;
    height: ${theme.inputHeight};

    button {
      border: 1px solid ${theme.colors.primary};
      font-size: ${theme.fontSizes[3]};
      padding: ${theme.space[4]};
    }
  }

  .globe {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;
    height: ${theme.inputHeight};
    width: 100px;
  }
`

export default ClaimDomainForm
