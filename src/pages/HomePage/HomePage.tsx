// HomePage:
// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
// import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
// import { Box } from 'theme-ui'

// Components
import Section from '../../components/Section'

// Sections

// ___________________________________________________________________

const HomePage = () => (
  <S.HomePage>
    <Section>
      <h1>Claim your name</h1>
      <h2>Claim your name</h2>
      <h3>Claim your name</h3>
      <h4>Claim your name</h4>
      <h5>Claim your name</h5>
      <h6>Claim your name</h6>
      <p>
        Proin dictum lacinia feugiat. Integer et erat ac arcu lobortis dictum.
        In sodales ac nibh in feugiat. Maecenas maximus tellus nec lacus egestas
        interdum. Vestibulum eleifend interdum arcu, in pharetra massa pretium
        vel. Praesent a blandit sapien. Nam bibendum id ex sodales eleifend. Sed
        ultricies eget ligula eu faucibus. Fusce non ligula id neque ultrices
        consequat eget sit amet turpis. Vivamus ut tincidunt velit. Sed leo
        sapien, porta non ornare non, pretium vel libero. Quisque malesuada eget
        diam et faucibus.
      </p>
      <p>
        <strong>Claim your name</strong>
      </p>
      <p>
        <small>Claim your name</small>
      </p>
      <a href="/" className="text--link">
        Claim your name
      </a>
    </Section>
  </S.HomePage>
)

export default HomePage
