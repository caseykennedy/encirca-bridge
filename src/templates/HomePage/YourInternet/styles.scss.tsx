// YourInternet Styles:
// ___________________________________________________________________

import { darken, lighten } from 'polished'
import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'

// Components
import Section from '../../../components/Section'

// ___________________________________________________________________

const HandshakeRadius = '125px'

export const HandshakeFeatures = styled.div`
  background: ${theme.colors.secondary};
  border-radius: calc(${theme.borderRadiusLarge} / 2);
  margin-top: ${theme.space[6]};
  padding: ${theme.space[6]};
  position: relative;
  width: 100%;

  @media ${theme.mq.tablet} {
    border-radius: ${theme.borderRadiusLarge};
    margin-top: ${theme.space[8]};
    padding: ${theme.space[7]};
  }

  .handshake {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: calc(${HandshakeRadius} * -0.5);

    background: ${theme.colors.background};
    border: ${theme.border};
    border-color: ${theme.colors.primary};
    border-radius: 99px;
    border-width: 2px;
    height: ${HandshakeRadius};
    width: ${HandshakeRadius};

    svg {
      width: 60px;
    }
  }
`

export const LearnMore = styled.div`
  margin-top: ${theme.space[6]};
  width: 100%;

  @media ${theme.mq.tablet} {
    margin-top: ${theme.space[8]};
  }

  .swiper-slide {
    width: 85%;

    @media ${theme.mq.tablet} {
      width: 95%;
    }

    @media ${theme.mq.desktop} {
      width: 85%;
    }
  }

  .slide {
    display: flex;
    flex-direction: column;
    border: ${theme.border};

    @media ${theme.mq.tablet} {
      flex-direction: row;
    }

    .figure {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      padding: ${theme.space[8]} ${theme.space[6]};

      svg {
        max-height: 230px;
      }
    }

    .highlight {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: ${theme.space[6]};

      background: ${lighten(0.05, theme.colors.background)};
      border-top: ${theme.border};

      @media ${theme.mq.tablet} {
        border-top: none;
        border-left: ${theme.border};
      }
    }
  }

  .swiper {
    overflow: visible;
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: calc(${theme.space[5]} * -0.5);

    @media ${theme.mq.tablet} {
      bottom: calc(${theme.space[5]} * -1.5);
    }
  }

  .swiper-pagination {
    text-align: left;
  }

  .swiper-pagination-bullet {
    background: ${theme.colors.highlight};
    opacity: 1;
    border-radius: 0;
    height: 3px;
    width: 100px;

    &-active {
      background: ${darken(0.25, theme.colors.white)};
    }
  }
`

export default HandshakeFeatures
