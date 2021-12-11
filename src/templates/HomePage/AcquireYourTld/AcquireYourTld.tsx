// AcquireYourTld
// ___________________________________________________________________

import React, { useState } from 'react'

// Theme + ui
import { Box } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import Section from '../../../components/Section'

// ___________________________________________________________________

type TabProps = {
  id: number
  title: string
}

const data = [
  {
    id: 0,
    step: 'a',
    title:
      'Make a claim for your Alexa domain name or an ICANN TLD (e.g. Pepsi or .travel)',
    content: 'A',
  },
  {
    id: 1,
    step: 'b',
    title:
      'Is your brand name available on Handshake? We’ll initiate and WIN the auction.',
    content: 'B',
  },
  {
    id: 2,
    step: 'c',
    title:
      'Is your brand already registered on Handshake? We’ll help you get it back. ',
    content: 'C',
  },
]

const AcquireYourTld = () => {
  const [activeTab, setActiveTab] = useState(1)
  const [currentTab, setCurrentTab] = useState(data[0])

  function handleTabHover(currentTab: number) {
    setActiveTab(currentTab)
    const currentTabContent = data.filter(
      (item: { id: number }) => item.id === currentTab
    )
    setCurrentTab(currentTabContent[0])
  }

  return (
    <Section>
      <h4>How to acquire your TLD:</h4>

      <S.AcquireYourTld>
        <ul>
          {data.map((item, idx) => (
            <li
              key={idx}
              className={`p-4 cursor-pointer w-4/12 border border-gray-100 
            ${activeTab === item.id && 'bg-yellow-400'}
        `}
              onMouseOver={() => handleTabHover(item.id)}
              onFocus={() => handleTabHover(item.id)}
            >
              <span>{item.step}</span>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>

        <Box as="figure">
          <Box sx={{ fontSize: 7, p: 6 }}>{currentTab?.content}</Box>
        </Box>
      </S.AcquireYourTld>
    </Section>
  )
}

export default AcquireYourTld
