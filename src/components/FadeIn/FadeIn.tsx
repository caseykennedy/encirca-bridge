import * as React from 'react'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

// ___________________________________________________________________

type Props = {
  children: React.ReactNode
  threshold?: number
}

const FadeIn = ({ children, threshold }: Props) => (
  <InView threshold={threshold || 0.25} triggerOnce={true}>
    {({ inView, ref, entry }) => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        ref={ref}
      >
        {children}
      </motion.div>
    )}
  </InView>
)

export default FadeIn
