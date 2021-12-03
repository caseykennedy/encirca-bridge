// Search + Checkout Widgets

// ___________________________________________________________________

import { css } from 'styled-components'
import { darken } from 'polished'
import theme from '../gatsby-plugin-theme-ui'

const Widgets = css`
  .widget {
    // Buttons
    // ____________________________
    .pure-button {
      background-color: ${theme.colors.primary};
      border-radius: 0px !important;
      font-size: calc(${theme.fontSizes[2]} / 1.25) !important;
      height: ${theme.inputHeight} !important;
      min-width: ${theme.space[7]};

      @media ${theme.mq.desktop} {
        min-width: ${theme.space[8]};
      }

      &:hover {
        background-color: ${darken(0.15, theme.colors.primary)};
      }
    }

    .enc-button-checkdomain {
      flex: 1;
    }

    // Forms
    // ____________________________
    #check-domain-form {
      .enc-check-group {
        display: flex;
        justify-content: flex-start;
        width: 100%;

        @media ${theme.mq.desktop} {
          min-width: ${theme.space[8]};
        }
      }

      input#enc-domain-name {
        flex: 5;
        background: ${theme.colors.gray};
        border: none;
        border-radius: 0px;
        height: ${theme.inputHeight};
        width: auto;
      }

      textarea#enc-domain-name {
        background: ${theme.colors.gray};
        border: none;
        border-radius: 0px;
        width: 100% !important;
      }

      small {
        margin-right: auto;
        color: ${theme.colors.midgray};
        /* font-weight: 600; */

        &:hover {
          color: ${theme.colors.primary};
        }
      }
    }

    #enc-domain-results-container {
      background: ${theme.colors.background};
      border-top: ${theme.border};
      border-bottom: ${theme.border};
      margin-bottom: ${theme.space[4]};
      width: 100%;

      .enc-search-result {
        display: flex;
        align-items: center;
        flex-direction: column;

        @media ${theme.mq.desktop} {
          flex-direction: row;
        }

        .enc-domain-price {
          margin-bottom: ${theme.space[4]};

          @media ${theme.mq.desktop} {
            margin-bottom: 0;
          }
        }

        .enc-domain-button .enc-checkdomain-action-button-wrapper button {
          background-color: ${theme.colors.black};
          max-height: 50px !important;
          width: 100%;
        }

        div {
          margin-top: 0 !important;
        }
      }
    }
  }

  div#encDisplaySingleDomain {
    display: none;
  }

  section.checksection .ip-switcher {
    display: flex;
    justify-content: center;
  }
  section.checksection .ip-switcher a.enc-ip-switcher {
    color: #333;
    border-radius: 4px;
    padding: 6px 40px;
    margin: 0 5px 20px 5px;
    text-align: center;
  }
  section.checksection .ip-switcher a.enc-ip-switcher:hover {
    color: #000;
  }

  form#check-domain-form .input-group #enc-cart-button-container {
    width: unset !important;
    margin-top: 0 !important;
  }

  /*---------------------checkout----------------------*/
  div#enc-checkout-container div#enc-form-wrapper form#enc-checkout-form {
    margin-bottom: 30px;
  }
  div#enc-checkout-container div#enc-form-wrapper form#enc-checkout-form button,
  div#enc-checkout-container div#enc-form-wrapper form#enc-checkout-form a {
    color: #fff;
  }
  div#enc-checkout-container
    div#enc-form-wrapper
    form#enc-checkout-form
    div#enc-tab-addresses
    div.panel
    a {
    color: #333;
  }
  div#enc-checkout-container
    div#enc-form-wrapper
    form#enc-checkout-form
    div#enc-checkout-tabs {
    width: 90%;
    margin: auto;
  }
  div#enc-checkout-container
    div#enc-form-wrapper
    form#enc-checkout-form
    div#enc-checkout-tabs
    ul {
    margin-left: 15px;
  }
  div#enc-checkout-container
    div#enc-form-wrapper
    form#enc-checkout-form
    div#enc-checkout-tabs
    ul
    li
    a {
    color: #333;
  }
  div#enc-checkout-container
    div#enc-form-wrapper
    form#enc-checkout-form
    div#enc-checkout-tabs
    div.enc-tab-div {
    border-radius: 10px;
    padding: 15px;
  }
  div#enc-checkout-container
    div#enc-form-wrapper
    form#enc-checkout-form
    div#enc-checkout-tabs
    div.enc-tab-div
    .alert.alert-warning
    a {
    color: #333;
  }
  div#enc-checkout-container div.heading {
    width: 90%;
    margin: auto;
  }
  h2#enc-page-title,
  h2.enc-page-title {
    font-size: 25px !important;
    margin: 20px 0;
  }
  div#enc-checkout-container div#enc-form-wrapper form#enc-checkout-form a i.fa,
  div#enc-checkout-container
    div#enc-form-wrapper
    form#enc-checkout-form
    button
    i.fa {
    color: #333 !important;
  }
  div#enc-checkout-container
    div#enc-form-wrapper
    form#enc-checkout-form
    a
    i.fa:hover,
  div#enc-checkout-container
    div#enc-form-wrapper
    form#enc-checkout-form
    button
    i.fa:hover {
    color: #000 !important;
  }
  div.product-option-group {
    position: relative;
  }
  div.product-option-group label {
    text-indent: 20px;
  }
  div.product-option-group input {
    position: absolute;
    top: 10px;
    left: 0;
  }
  div#enc-checkout-container {
    max-width: unset !important;
  }

  /*---------------------media queries----------------------*/

  @media (max-width: 666px) {
    div#encCheckoutIpInfo label,
    div#encCheckoutIpInfo select,
    div#encCheckoutIpInfo textarea,
    div#encCheckoutIpInfo input {
      font-size: 12px;
      width: 19em !important;
    }
  }
  @media (max-width: 600px) {
    div#enc-checkout-tabs ul li a {
      margin: 0 !important;
    }
  }

  @media (max-width: 380px) {
    form#check-domain-form .input-group input#enc-domain-name {
      width: 50%;
    }
    div#enc-checkout-tabs ul li a {
      font-size: 10px;
      padding: 3px 3px;
    }
    input#encCouponCode {
      width: 90% !important;
    }
  }
`

export default Widgets
