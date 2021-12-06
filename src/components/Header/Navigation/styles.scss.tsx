// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  .faq {
    color: ${theme.colors.gray};
    font-weight: 500;

    @media ${theme.mq.tablet} {
      display: flex;
    }

    &.active,
    &:hover {
      color: ${theme.colors.primary};
    }

    span {
      svg {
        fill: ${theme.colors.gray};
      }
    }
  }

  .btn {
    span {
      margin-left: ${theme.space[5]};

      svg {
        fill: ${theme.colors.gray};
      }
    }

    &:hover {
      svg {
        fill: ${theme.colors.white};
      }
    }
  }
`
export default Nav
