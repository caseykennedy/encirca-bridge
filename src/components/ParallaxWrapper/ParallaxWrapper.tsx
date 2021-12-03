// Post Meta
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'
import useParallaxEffect from '../../utils/useParallaxEffect'

// ___________________________________________________________________

type Props = {
  children: React.ReactNode
  speed: number
}

const PostMeta = ({ children, speed }: Props) => {
  const position = useParallaxEffect(speed)
  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      {children}
    </motion.div>
  )
}

export default PostMeta
