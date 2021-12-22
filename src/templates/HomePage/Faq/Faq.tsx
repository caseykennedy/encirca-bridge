import * as React from 'react'
import { lighten } from 'polished'

// Theme + ui
import { Box, Flex, Heading, Text } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'

// Components
import Section from '../../../components/Section'
import Accordion from '../../../components/Accordion'

// ___________________________________________________________________

const data = [
  { question: 'What is a TLD?', answer: 'ho ho ho' },
  { question: 'How does Handshake work?', answer: 'ho ho ho' },
  { question: 'What is the dWeb?', answer: 'ho ho ho' },
]

const accordionProps = {
  bg: theme.colors.secondary,
  color: theme.colors.text,
  fontSize: [3],
  fontWeight: 500,
}

const Faq: React.FC = () => (
  <Section border={true}>
    <h3>FAQ</h3>

    <Box>
      {data.map((faq, key) => (
        <Accordion {...accordionProps} title={`${faq.question}`} key={key}>
          <Box
            sx={{
              px: [4, 5, 5],
              py: 4,
            }}
          >
            <Text as="p" sx={{ fontSize: [2, 3] }}>
              {faq.answer}
            </Text>
          </Box>
        </Accordion>
      ))}
    </Box>
  </Section>
)

export default Faq
