// ClaimDomainForm
// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Flex, Button, Label, Input } from 'theme-ui'
import * as S from './styles.scss'

// SVG
import Globe from '../../../static/globe.svg'

// ___________________________________________________________________

const ClaimDomainForm = () => {
  const [tld, setTld] = useState('')

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setTld(target.value)
  }
  
  return (
    <S.ClaimDomainForm>
      <Label id="descriptionClaim" htmlFor="tld" sx={{ display: 'none' }}>
        Enter your top-level domain
      </Label>

      <Input
        type="text"
        name="tld"
        id="tld"
        placeholder="Enter your TLD"
        required={true}
        aria-required="true"
        value={tld}
        onChange={handleChange}
      />

      <div className="button-box">
        <Link to="/claim" state={{ tld }}>
          <Button
            type="button"
            aria-label="submit"
            aria-describedby="descriptionClaim"
          >
            Claim
          </Button>
        </Link>
      </div>

      <div className="globe">
        <Globe />
      </div>
    </S.ClaimDomainForm>
  )
}

export default ClaimDomainForm
