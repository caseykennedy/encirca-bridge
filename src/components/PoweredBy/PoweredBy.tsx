import * as React from 'react'
import { Box, Text } from 'theme-ui'

// SVG
import Soc2 from '../../../static/soc2.svg'

// ___________________________________________________________________

const PoweredBy = () => (
  <Text as="p" color="white">
    Powered by <Text sx={{ fontSize: 3, fontWeight: 600 }}>EnCirca&trade;</Text>
    <Box as="span" ml={2}>
      <Soc2 />
    </Box>
  </Text>
)

export default PoweredBy
