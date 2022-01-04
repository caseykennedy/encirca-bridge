// SecureWeb Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import { Box } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Timeline = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin: ${theme.space[7]} 0;
  padding: ${theme.space[5]};
  position: relative;
  width: 100%;

  border: ${theme.border};
  border-radius: calc(${theme.borderRadiusLarge} / 3);
  text-align: center;

  @media ${theme.mq.tablet} {
    flex-direction: row;
    border-radius: calc(${theme.borderRadiusLarge} / 2);
    margin: ${theme.space[8]} 0;
    padding: ${theme.space[6]};
  }

  .timeblock {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.gray};
    font-size: ${theme.fontSizes[3]};
    width: 100%;

    &:last-child {
      margin-top: ${theme.space[6]};

      @media ${theme.mq.tablet} {
        margin-top: 0;
        margin-left: ${theme.space[8]};
      }
    }

    &--highlight {
      color: ${theme.colors.white};
      position: relative;
      z-index: 1;

      @media ${theme.mq.tablet} {
        width: fit-content;
      }

      &::after {
        content: '';
        background: ${theme.colors.secondary};
        border-radius: calc(${theme.borderRadiusLarge} / 4);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        transform: scale(1.25);

        @media ${theme.mq.tablet} {
          transform: scale(1.65);
        }
      }
    }

    .version {
      font-family: ${theme.fonts.display};
      font-weight: 600;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: ${theme.space[4]} 0;
      gap: ${theme.space[2]};
    }
  }
`

export const Features = styled.div`
  @media ${theme.mq.tablet} {
  }
`

export default Timeline
