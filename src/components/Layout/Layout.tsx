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

export type LayoutProps = {
  children: React.ReactNode
  location?: {
    pathname: string
  }
}

const Layout = ({ children }: LayoutProps) => {
  console.log(
    `%c bridge | crafted with care | tetra/ | tetrashapes.com `,
    `background: #78FFF2; color: #000000`
  )
  return (
    <S.Wrapper>
      <Header />
      <S.Main>{children || 'loading...'}</S.Main>
      <Footer />
    </S.Wrapper>
  )
}

export default Layout
