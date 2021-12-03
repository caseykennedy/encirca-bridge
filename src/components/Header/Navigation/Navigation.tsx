// Navigation
// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import * as S from './styles.scss'

import routes from '../routes.json'

// ___________________________________________________________________

const Navigation = () => (
  <S.Nav>
    {routes.map((item, idx) => (
      <Link
        to={item.link}
        activeClassName="active"
        partiallyActive={true}
        key={idx}
      >
        {item.name}
      </Link>
    ))}
    <Link to="/search" className="button">
      Claim your name
    </Link>
  </S.Nav>
)

export default Navigation
