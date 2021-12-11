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
    <Label id="descriptionClaim" sx={{ display: 'none' }}>
      Enter your top-level domain
    </Label>
    <Input
      name="claimDomain"
      type="text"
      id="claimDomain"
      placeholder="Enter your top-level domain"
      aria-required="true"
    />

    <Flex className="button-box">
      <Button
        type="button"
        aria-label="submit"
        aria-describedby="descriptionClaim"
      >
        Claim
      </Button>
    </Flex>

    <Flex className="globe">
      <Globe />
    </Flex>
  </S.ClaimDomainForm>
)

export default ClaimDomainForm
