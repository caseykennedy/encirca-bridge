// MobileNav:
// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import routes from '../routes.json'
import * as S from './styles.scss'

// ___________________________________________________________________

type LinkProps = {
  item: {
    link: string
    name: string
  }
  handleExitOnClick: () => void
}

type NavProps = {
  handleExitOnClick: () => void
  isOpen: boolean
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -1000 },
    },
  },
  closed: {
    y: 25,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const listVariants = {
  open: {
    transition: { staggerChildren: 0.035, delayChildren: 0.03 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const NavLink = ({ item, handleExitOnClick }: LinkProps) => (
  <S.NavLink
    variants={itemVariants}
    whileTap={{ scale: 0.98 }}
    onClick={handleExitOnClick}
  >
    <Link to={item.link}>{item.name}</Link>
  </S.NavLink>
)

const MobileNav = ({ handleExitOnClick, isOpen }: NavProps) => (
  <motion.div initial="closed" animate={isOpen ? 'open' : 'closed'}>
    <S.MobileNav variants={listVariants}>
      {routes.map((item, idx) => (
        <NavLink key={idx} handleExitOnClick={handleExitOnClick} item={item} />
      ))}
    </S.MobileNav>
  </motion.div>
)

export default MobileNav
