// Layout:
// ___________________________________________________________________

import React, { useRef } from 'react'

// Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Styles + Theme
import * as S from './styles.scss'
import 'react-responsive-modal/styles.css'

// ___________________________________________________________________

type Props = {
  children: React.ReactNode
  location: {
    pathname: string
  }
}

const Layout = ({ children, location }: Props) => {
  console.log(
    `%c bridge | crafted with care | tetra/ | tetrashapes.com `,
    `background: #000000; color: #0F95A7`
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
