// Newsletter
// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import { Box, Button, Flex, Heading, Text } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import Section from '../Section'
import SubscribeForm from '../SubscribeForm'

// ___________________________________________________________________

const MarqueeProps = {
  gradient: false,
  speed: 30,
}

const Newsletter = () => (
  <S.Newsletter>
    <Section bg="black" color="gray">
      <Flex sx={{ flexDirection: ['column', 'row'] }}>
        <Box sx={{ flex: [1, 1.3, 1] }}>
          <Heading className="text--md">
            <strong>NFTs—</strong>
            <br />
            They’re more than old tweets
            <br />
            and virtual kitties.
          </Heading>
          <Box mt={6}>
            <SubscribeForm />
          </Box>
        </Box>

        <Flex
          sx={{
            flex: 1,
            alignItems: 'center',
            justifyContent: ['center', 'flex-end'],
            mt: [6, 0],
          }}
        >
          <Flex
            sx={{
              alignItems: 'center',
              flexDirection: ['column', 'column', 'row'],
              textAlign: 'center',
            }}
          >
            <Text as="p" px={[5, 5, 0]}>
              The internet is <strong>just beginning.</strong>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  </S.Newsletter>
)

export default Newsletter
