// AcquireYourTld
// ___________________________________________________________________

import React, { useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Theme + ui
import { Box, Text, Heading } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// SVG
import DocGlobeArt from '../../../../static/doc-globe.svg'
import ThumbShield from '../../../../static/icon-thumb-shield.svg'

// ___________________________________________________________________

const data = [
  {
    id: 0,
    step: 'a',
    title:
      'Make a claim for your Alexa domain name or an ICANN TLD (e.g. Pepsi or .travel)',
    content: <DocGlobeArt />,
  },
  {
    id: 1,
    step: 'b',
    title:
      "Is your brand name available on Handshake? We'll initiate and WIN the auction.",
    content: <ThumbShield />,
  },
  {
    id: 2,
    step: 'c',
    title:
      "Is your brand already registered on Handshake? We'll help you get it back. ",
    content: <DocGlobeArt />,
  },
]

const AcquireYourTld = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [currentTab, setCurrentTab] = useState(data[0])

  const handleTabOver = useCallback(async (currentTab: number) => {
    setActiveTab(currentTab)
    const currentTabContent = data.filter(
      (item: { id: number }) => item.id === currentTab
    )
    setCurrentTab(currentTabContent[0])
  }, [])

  return (
    <Box sx={{ display: ['none', 'block'] }}>
      <Heading as="h4" mb={5}>
        How to acquire your TLD:
      </Heading>

      <S.AcquireYourTld>
        <ul>
          {data.map((item, idx) => (
            <li
              key={idx}
              className={`${activeTab === item.id && 'active'}
        `}
              onMouseOver={() => handleTabOver(item.id)}
              onFocus={() => handleTabOver(item.id)}
            >
              <div className="step">
                <div>{item.step})</div>
              </div>
              {item.title}
            </li>
          ))}
        </ul>

        <figure>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={currentTab ? currentTab.id : 'empty'}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.1 }}
            >
              {currentTab && <Box>{currentTab.content}</Box>}
            </motion.div>
          </AnimatePresence>
        </figure>
      </S.AcquireYourTld>
    </Box>
  )
}

export default AcquireYourTld
