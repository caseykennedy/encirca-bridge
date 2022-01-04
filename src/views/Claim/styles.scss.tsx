// Claim Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import { Flex } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const ClaimPage = styled.div``

export const ClaimForm = styled.form`
  margin: 0;
  position: relative;

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  .form-group {
    position: relative;

    .input-label {
      display: flex;
      align-items: center;
      font-size: ${theme.fontSizes[2]};
      font-weight: 500;
      width: fit-content;

      @media ${theme.mq.tablet} {
        margin-right: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${theme.space[4]};
        width: fit-content;
      }
    }

    input {
      background: ${theme.colors.background};
      border: ${theme.border};
      border-radius: ${theme.borderRadius};

      color: ${theme.colors.text};
      font-size: ${theme.fontSizes[2]};

      margin-bottom: ${theme.space[3]};
      padding: ${theme.space[3]};
      width: 100%;
      outline: none;

      &::placeholder {
        color: ${theme.colors.gray};
      }

      @media ${theme.mq.tablet} {
        font-size: ${theme.fontSizes[4]};
        margin-bottom: ${theme.space[4]};
        padding: ${theme.space[4]};
        padding-left: ${theme.space[9]};
        height: ${theme.inputHeight};
      }
    }

    select {
      border: ${theme.border};
      border-radius: ${theme.borderRadius};
      color: ${theme.colors.text};
      font-size: ${theme.fontSizes[2]};
      margin-bottom: ${theme.space[3]};
      padding: ${theme.space[3]};

      @media ${theme.mq.tablet} {
        font-size: ${theme.fontSizes[4]};
        margin-bottom: ${theme.space[4]};
        padding: ${theme.space[4]};
        height: ${theme.inputHeight};
      }
    }

    textarea {
      border: ${theme.border};
      border-radius: ${theme.borderRadius};
      color: ${theme.colors.text};
      font-size: ${theme.fontSizes[2]};
      margin-bottom: ${theme.space[3]};
      padding: ${theme.space[3]};

      @media ${theme.mq.tablet} {
        font-size: ${theme.fontSizes[3]};
        margin-bottom: ${theme.space[4]};
      }
    }

    &__checkbox {
      display: flex;
      /* flex-basis: auto; */
      flex-wrap: wrap;
      justify-content: center;
      gap: ${theme.space[2]};
      margin-bottom: ${theme.space[5]};

      &:nth-child(n5) {
        flex-basis: 100%;
      }

      @media ${theme.mq.tablet} {
        gap: ${theme.space[4]};
      }

      div {
        flex: 1;
      }

      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        white-space: nowrap;
      }

      .checkbox-label {
        display: flex;
        align-items: center;
        justify-content: center;

        border: ${theme.border};
        border-radius: ${theme.borderRadiusLarge};
        cursor: pointer;
        padding: ${theme.space[2]} ${theme.space[3]};
        white-space: nowrap;

        @media ${theme.mq.tablet} {
          padding: ${theme.space[5]} ${theme.space[6]};
        }

        &:hover {
          background: ${darken(0.25, theme.colors.primary)};
          border-color: ${theme.colors.primary};
        }

        div {
          display: none;
        }

        input, svg {
          height: initial;
          margin-bottom: 0;
          padding: 0;
          width: fit-content;

          /* position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0; */
        }
      }
    }
  }

  .button-box {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: ${theme.space[7]};
    height: ${theme.inputHeight};

    button {
      border: 1px solid ${theme.colors.primary};
      font-size: ${theme.fontSizes[3]};
      padding: ${theme.space[4]};
    }
  }
`

export default ClaimForm
