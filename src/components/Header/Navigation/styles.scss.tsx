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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.space[4]};

    color: ${theme.colors.gray};
    font-weight: 500;

    @media ${theme.mq.tablet} {
      display: flex;
    }

    span {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      margin-right: ${theme.space[1]};
      height: 18px;
      width: 18px;

      border: ${theme.border};
      border-radius: 99px;
      border-color: ${theme.colors.gray};
      font-size: calc(${theme.fontSizes[2]} / 1.5);
      font-weight: 600;
    }

    &.active,
    &:hover {
      color: ${theme.colors.primary};

      span {
        border-color: ${theme.colors.primary};
      }
    }
  }

  .btn {
    span {
      margin-left: ${theme.space[4]};

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
