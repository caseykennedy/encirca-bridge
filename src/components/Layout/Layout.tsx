// Layout:
// ___________________________________________________________________

import React, { useRef } from 'react'

// Components
import Header from '../Header'
import Footer from '../Footer'

// Styles + Theme
import * as S from './styles.scss'
import 'react-responsive-modal/styles.css'

// ___________________________________________________________________

type LayoutProps = {
  children: React.ReactNode
  location: {
    pathname: string
  }
}

const Layout = ({ children, location }: LayoutProps) => {
  console.log(
    `%c bridge | crafted with care | tetra/ | tetrashapes.com `,
    `background: #0F95A7; color: #000000`
  )
  return (
    <S.Wrapper>
      <Header location={location} />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Wrapper>
  )
}

export default Layout
