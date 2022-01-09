// Claim Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import { Flex } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const inputGlow = `0 0 10px ${theme.colors.primary}`

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

      &--textarea {
        align-items: flex-start;
        top: ${theme.space[3]};
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

      &:focus {
        border-color: ${theme.colors.primary};
        box-shadow: ${inputGlow};
      }

      @media ${theme.mq.tablet} {
        font-size: ${theme.fontSizes[4]};
        margin-bottom: ${theme.space[4]};
        padding: ${theme.space[4]};
        padding-left: ${theme.space[9]};
        height: ${theme.inputHeight};
      }

      &.tld {
        background-color: ${darken(0.1, theme.colors.secondary)};
      }
    }

    select {
      border: ${theme.border};
      border-radius: ${theme.borderRadius};
      color: ${theme.colors.text};
      font-size: ${theme.fontSizes[2]};
      font-weight: 500;
      text-transform: capitalize;
      margin-bottom: ${theme.space[3]};
      padding: ${theme.space[3]};

      @media ${theme.mq.tablet} {
        margin-bottom: ${theme.space[4]};
        padding: ${theme.space[4]};
        height: ${theme.inputHeight};
      }

      &:focus {
        outline: none;
        border-color: ${theme.colors.primary};
        box-shadow: ${inputGlow};
      }
    }

    textarea {
      border: ${theme.border};
      border-radius: ${theme.borderRadius};
      color: ${theme.colors.text};
      font-size: ${theme.fontSizes[2]};
      font-weight: 500;
      margin-bottom: ${theme.space[3]};
      padding: ${theme.space[3]};

      @media ${theme.mq.tablet} {
        margin-bottom: ${theme.space[4]};
        padding-left: ${theme.space[9]};
      }

      &:focus {
        outline: none;
        border-color: ${theme.colors.primary};
        box-shadow: ${inputGlow};
      }

      &::placeholder {
        color: ${theme.colors.text};
      }
    }

    &__checkbox {
      display: flex;
      /* flex-basis: auto; */
      flex-wrap: wrap;
      justify-content: center;
      gap: ${theme.space[2]};
      margin-bottom: ${theme.space[3]};

      @media ${theme.mq.tablet} {
        gap: ${theme.space[4]};
        margin-bottom: ${theme.space[5]};
      }

      /* &:nth-child(n5) {
        flex-basis: 100%;
      } */

      .title {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        white-space: nowrap;
      }

      .checkbox-label {
        flex: 1;
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

        &:hover,
        &--active {
          background: ${darken(0.25, theme.colors.primary)};
          border-color: ${theme.colors.primary};
        }

        div {
          display: none;

          input,
          svg {
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

        /* input {
          cursor: pointer;
          margin-bottom: 0;
          opacity: 0;
          padding: 0;
          position: absolute;
          height: 0;
          width: 0;
        }

        input:checked ~ label {
          background: ${darken(0.25, theme.colors.primary)};
          border-color: ${theme.colors.primary};
        } */
      }
    }
  }

  .button-box {
    display: flex;
    align-items: center;
    justify-content: center;

    /* margin-top: ${theme.space[5]}; */
    height: ${theme.inputHeight};

    button {
      border: 1px solid ${theme.colors.primary};
      font-size: ${theme.fontSizes[3]};
      padding: ${theme.space[4]} ${theme.space[7]};
    }
  }

  // Override webkit autocomplete highlight
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: ${theme.colors.text};
    -webkit-box-shadow: 0 0 0px 1000px ${theme.colors.background} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`

export default ClaimForm
