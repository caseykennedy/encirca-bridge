import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = { fill?: string }

const SVG = styled(motion.svg)<{ fill?: string }>`
  .hns-1 {
    fill-rule: evenodd;
    fill: ${(p) => (p.fill ? p.fill : theme.colors.primary)};
  }
`

const Symbol = ({ fill }: Props) => (
  <SVG
    width="80"
    viewBox="0 0 80 61"
    initial="hidden"
    animate="visible"
  >
    <path
      d="M79.9999 60.1034L60.4803 42.0503H19.5194L-0.00012207 60.1034H79.9999Z"
      fill={fill}
    />
    <path
      d="M79.9999 0.634766L60.4803 18.6879H19.5194L-0.00012207 0.634766H79.9999Z"
      fill={fill}
    />
  </SVG>
)

export default Symbol
