// ClaimDomainForm
// ___________________________________________________________________

import * as React from 'react'
import { Flex, Button, Label, Input } from 'theme-ui'
import * as S from './styles.scss'

// SVG
import Globe from '../../../static/globe.svg'

// ___________________________________________________________________

const ClaimDomainForm = () => (
  <S.ClaimDomainForm>
    <Label sx={{ display: 'none' }}>Enter your top-level domain</Label>
    <Input placeholder="Enter your top-level domain" />
    
    <Flex className="button-box">
      <Button>Claim</Button>
    </Flex>

    <Flex className="globe">
      <Globe />
    </Flex>
  </S.ClaimDomainForm>
)

export default ClaimDomainForm
