// Claim page
// ___________________________________________________________________

import React from 'react'
import SEO from '../components/SEO'
import ClaimPage from '../views/ClaimPage'

// ___________________________________________________________________

type Props = {
  location: {
    state: {
      tld: string
    }
  }
}

const Claim = ({ location }: Props) => (
  <>
    <SEO />
    <ClaimPage location={location} />
  </>
)

export default Claim
