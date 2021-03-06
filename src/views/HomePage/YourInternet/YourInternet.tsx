// YourInternet
// ___________________________________________________________________

import * as React from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Theme + ui
import { Box, Flex, Heading, Text, Grid } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

import 'swiper/css'
import 'swiper/css/pagination'

// Components
import Section, { Row } from '../../../components/Section'
import HandshakeLogo from '../../../components/SVG/Handshake'
import Icon from '../../../components/Icons'
import FadeIn from '../../../components/FadeIn'

// SVG
import BridgeGridArt from '../../../../static/bridge-grid.svg'
import IconPlugPlay from '../../../../static/icon-plug-play.svg'
import IconNoSquatting from '../../../../static/icon-no-squatting.svg'
import IconFairAuctions from '../../../../static/icon-fair-auctions.svg'
import IconUnrestricted from '../../../../static/icon-unrestricted.svg'
import IconActiveMarketplace from '../../../../static/icon-active-marketplace.svg'
import IconMoon from '../../../../static/icon-moon.svg'
import HnsCloud from '../../../../static/hns-cloud.svg'
import HnsBridge from '../../../../static/hns-bridge.svg'

// ___________________________________________________________________

SwiperCore.use([Pagination])

const features = [
  {
    title: 'Plug & play',
    description:
      'Existing 1,500 ICANN TLDs are reserved for backwards compatibility.',
    icon: <IconPlugPlay />,
  },
  {
    title: 'No squatting',
    description:
      'The top 100,000 Alexa website domains are reseerved for claiming by owners.',
    icon: <IconNoSquatting />,
  },
  {
    title: 'Fair auctions',
    description:
      'TLDs are acquired by highest bidder via vickrey auction, $HNS burned is paid to no one.',
    icon: <IconFairAuctions />,
  },
  {
    title: 'Unrestricted',
    description:
      'Decentralized authority—no one central governance makes decisions for the network. ',
    icon: <IconUnrestricted />,
  },
  {
    title: 'Active marketplace',
    description: 'Direct-buy global aftermarket.',
    icon: <IconActiveMarketplace />,
  },
  {
    title: 'To the moon',
    description: 'Over 2 million TLDs registered and counting.',
    icon: <IconMoon />,
  },
]

const hnsLinks = [
  {
    title: 'Learn more about<br />Handshake.',
    description: 'What is Handshake?',
    url: 'https://handshake.org/',
    figure: <HnsCloud />,
  },
  {
    title: 'Compatible with the<br />existing Internet.',
    description: 'Setup HDNS now, it takes seconds.',
    url: 'https://www.hdns.io/',
    figure: <HnsBridge />,
  },
]

const YourInternet = () => (
  <Section border={true} overflow="hidden">
    <Row>
      <Flex
        sx={{
          flexDirection: ['column', 'row'],
          gap: [6, 7],
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Heading as="h2" mb={5}>
            Your name, your internet. Bridge brings you in.
          </Heading>

          <FadeIn threshold={0.75}>
            <BridgeGridArt />
          </FadeIn>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Text as="p" variant="lead" mb={5}>
            Handshake replaces the web’s root zone with an open-source protocol
            which manages the registration, renewal and transfer of DNS
            top-level domains (TLDs) with the blockchain: crytpo-decentralizing
            and upgrading the world wide web.
          </Text>
          <Text as="p" variant="lead">
            Bridge acquires your brand name or ICANN TLD on Handshake,
            seamlessly and worry-free.
          </Text>
        </Box>
      </Flex>
    </Row>

    <Row>
      <S.HandshakeFeatures>
        <div className="handshake">
          <HandshakeLogo fill="white" />
        </div>

        <Grid columns={[1, 2, 3]} gap={[6, 7]} mt={[6, 7]}>
          {features.map((feature, idx) => (
            <Box key={idx}>
              <Flex
                sx={{
                  alignItems: 'center',
                  mb: 5,
                }}
              >
                {feature.icon}
                <Heading as="h4" ml={4}>
                  {feature.title}
                </Heading>
              </Flex>
              <Text>{feature.description}</Text>
            </Box>
          ))}
        </Grid>
      </S.HandshakeFeatures>
    </Row>

    <Row>
      <S.LearnMore>
        <Box>
          <Heading as="h4" mb={5}>
            Enter the third internet era.
          </Heading>
        </Box>
        <Box>
          <Swiper
            slidesPerView="auto"
            spaceBetween={16}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              '640': {
                spaceBetween: 16,
              },
              '768': {
                spaceBetween: 24,
              },
            }}
          >
            {hnsLinks.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Flex className="slide">
                  <Flex className="slide__figure">
                    <FadeIn threshold={0.75}>{item.figure}</FadeIn>
                  </Flex>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="slide__highlight"
                  >
                    <Heading
                      as="h4"
                      mb={6}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <div className="slide__link">
                      <Text sx={{ fontSize: 2, mb: 0 }}>
                        {item.description}
                      </Text>
                      <Icon name="chevron" color="white" />
                    </div>
                  </a>
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </S.LearnMore>
    </Row>
  </Section>
)

export default YourInternet
