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
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.space[3]};
    color: ${theme.colors.gray};
    font-weight: 500;

    @media ${theme.mq.tablet} {
      margin-right: ${theme.space[4]};
    }

    span {
      display: none;
      align-items: center;
      justify-content: center;

      border: ${theme.border};
      border-radius: 99px;
      border-color: ${theme.colors.gray};
      font-size: calc(${theme.fontSizes[2]} / 1.5);
      font-weight: 600;

      margin-right: ${theme.space[1]};
      height: 18px;
      width: 18px;

      @media ${theme.mq.tablet} {
        display: inline-flex;
      }
    }

    &.active,
    &:hover {
      color: ${theme.colors.primary};

      span {
        border-color: ${theme.colors.primary};
      }
    }
  }

  .claim-btn {
    span {
      display: none;
      margin-left: ${theme.space[4]};

      @media ${theme.mq.tablet} {
        display: block;
      }

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
