/* eslint-disable jsx-a11y/label-has-associated-control */
// Claim:
// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import {
  Box,
  Flex,
  Heading,
  Text,
  Checkbox,
  Input,
  Select,
  Textarea,
  Button,
} from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import Section from '../../components/Section'

// SVG
import Globe from '../../../static/globe.svg'

// ___________________________________________________________________

const Claim = () => (
  <S.ClaimPage>
    <Section maxWidth={1024} pt={[6, 7, 7]} pb={[6, 7, 7]}>
      <Flex sx={{ flexDirection: ['column', 'row'], gap: [5, 6, 7] }}>
        <Box sx={{ flex: 1.5 }}>
          <h1>Let&apos;s claim your TLD/</h1>
          <p id="descriptionSubmit">
            Begin your Handshake registration process by submitting the
            information below.
          </p>
        </Box>
        <Box sx={{ flex: 1 }} />
      </Flex>
    </Section>

    <Section border={true} maxWidth={1024} pt={[6, 7, 7]}>
      <S.ClaimForm className="claim-form">
        <fieldset>
          <div className="form-group">
            <label className="input-label" htmlFor="tld">
              TLD*
            </label>
            <Input
              name="tld"
              type="text"
              id="tld"
              className="tld"
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label className="input-label" htmlFor="firstName">
              First name*
            </label>
            <Input
              name="firstName"
              type="text"
              id="firstName"
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label className="input-label" htmlFor="lastName">
              Last name*
            </label>
            <Input
              name="lastName"
              type="text"
              id="lastName"
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label className="input-label" htmlFor="email">
              Email*
            </label>
            <Input name="email" type="email" id="email" aria-required="true" />
          </div>

          <div className="form-group  form-group__checkbox">
            <div className="title">I&apos;m registering a:</div>

            <label className="checkbox-label" htmlFor="name">
              <Checkbox id="name" name="name" />
              <span>Name</span>
            </label>

            <label className="checkbox-label" htmlFor="brand">
              <Checkbox id="brand" name="brand" />
              <span>Brand</span>
            </label>

            <label className="checkbox-label" htmlFor="trademark">
              <Checkbox id="trademark" name="trademark" />
              <span>Trademark</span>
            </label>

            <label className="checkbox-label" htmlFor="copyright">
              <Checkbox id="copyright" name="copyright" />
              <span>Copyright</span>
            </label>

            <label className="checkbox-label" htmlFor="serviceMark">
              <Checkbox id="serviceMark" name="serviceMark" />
              <span>Service mark</span>
            </label>

            <label className="checkbox-label" htmlFor="slogan">
              <Checkbox id="slogan" name="slogan" />
              <span>Slogan</span>
            </label>

            <label className="checkbox-label" htmlFor="icannTLD">
              <Checkbox id="icannTLD" name="icannTLD" />
              <span>ICANN TLD</span>
            </label>

            <label className="checkbox-label" htmlFor="fairUse">
              <Checkbox id="fairUse" name="fairUse" />
              <span>Fair use</span>
            </label>

            <label className="checkbox-label" htmlFor="other">
              <Checkbox id="other" name="other" />
              <span>Other</span>
            </label>
          </div>

          {/* <div className="form-group">
            <Select
              defaultValue="Select your industry"
              name="lastName"
              id="lastName"
              placeholder="Select your industry"
            >
              <option>eCommerce</option>
              <option>Saas</option>
              <option>IT / Networking</option>
              <option>Construction</option>
            </Select>
          </div> */}

          <div className="form-group">
            <label className="input-label" htmlFor="organization">
              Organization
            </label>
            <Input name="organization" type="text" id="organization" />
          </div>

          <div className="form-group">
            <label
              className="input-label"
              htmlFor="comments"
              style={{ display: 'none' }}
            >
              Comments
            </label>
            <Textarea
              name="comments"
              id="comments"
              placeholder="Comments"
              rows={5}
            />
          </div>
        </fieldset>

        <div className="button-box">
          <Button
            type="button"
            aria-label="submit"
            aria-describedby="descriptionSubmit"
          >
            Submit
          </Button>
        </div>
      </S.ClaimForm>
    </Section>
  </S.ClaimPage>
)

export default Claim
