// ClaimPage:
// ___________________________________________________________________

import React, { useState } from 'react'

// Theme + ui
import {
  Box,
  Flex,
  Heading,
  Text,
  Checkbox,
  Label,
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
import LogoGlobe from '../../../static/logo-globe.svg'

import regTypes from './regTypes.json'

// ___________________________________________________________________

const ClaimPage = () => {
  const [tld, setTld] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [organization, setOrganization] = useState('')
  const [comments, setComments] = useState('')
  const [regType, setRegType] = useState('')
  const [error, setError] = useState<string | undefined>('')
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(true)

  const formData = {
    tld,
    firstName,
    lastName,
    email,
    organization,
    comments,
    regType,
  }

  console.log(formData)

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setFormState({ ...formState, [e.target.name]: e.target.value })

  // const handleCheckboxChange = ({
  //   target,
  // }: React.ChangeEvent<HTMLInputElement>) => {
  //   let newArray = [...regTypeList, target.id]
  //   if (regTypeList.includes(target.id)) {
  //     newArray = newArray.filter((regType) => regType !== target.id)
  //   }
  //   setRegTypeList(newArray)
  // }

  const handleTldChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setTld(target.value)
  }

  const handleFirstNameChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(target.value)
  }

  const handleLastNameChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(target.value)
  }

  const handleEmailChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value)
  }

  const handleSelectChange = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setRegType(target.value)
  }

  const handleOrganizationChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setOrganization(target.value)
  }

  const handleCommentsChange = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComments(target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'claimDomainForm',
        ...formData,
      }).toString(),
    })
      .then((response) => {
        console.log('response', response)
        setLoading(false)
        setShowForm(false)
        setTld('')
        setFirstName('')
        setLastName('')
        setEmail('')
        setOrganization('')
        setComments('')
        setRegType('')
      })
      .catch((e: undefined) => {
        setError(e)
        console.log('ERROR')
        console.log('error:', e)
      })
  }

  return (
    <>
      <Section maxWidth={1024} pt={[6, 7, 7]} pb={[6, 7, 7]}>
        <Flex
          sx={{
            alignItems: 'center',
            flexDirection: ['column-reverse', 'row'],
            gap: [5, 6, 7],
          }}
        >
          <Box sx={{ flex: [1, 2, 1] }}>
            <h1>Let&apos;s claim your TLD/</h1>
            <p id="descriptionSubmit">
              Begin your Handshake registration process by submitting the
              information below.
            </p>
          </Box>

          <Box sx={{ flex: 1, px: [6, 0] }}>
            <Flex sx={{ pl: [0, 4, 8] }}>
              <LogoGlobe />
            </Flex>
          </Box>
        </Flex>
      </Section>

      <Section border={true} maxWidth={1024} pt={[6, 7, 7]} pb={[6, 7, 7]}>
        {showForm ? (
          <S.ClaimForm
            className="claim-form"
            data-netlify="true"
            method="post"
            onSubmit={handleSubmit}
            id="claimDomainForm"
          >
            <input type="hidden" name="form-name" value="claimDomainForm" />
            <fieldset>
              <div className="form-group">
                <Label className="input-label" htmlFor="tld">
                  TLD*
                </Label>
                <Input
                  name="tld"
                  type="text"
                  id="tld"
                  className="tld"
                  value={tld}
                  onChange={handleTldChange}
                  required={true}
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <Label className="input-label" htmlFor="firstName">
                  First name*
                </Label>
                <Input
                  name="firstName"
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required={true}
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <Label className="input-label" htmlFor="lastName">
                  Last name*
                </Label>
                <Input
                  name="lastName"
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={handleLastNameChange}
                  required={true}
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <Label className="input-label" htmlFor="email">
                  Email*
                </Label>
                <Input
                  name="email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required={true}
                  aria-required="true"
                />
              </div>

              {/* <div className="form-group  form-group__checkbox">
              <div className="title">I&apos;m registering a:</div>

              {regTypes.map(({ name }, index) => (
                <label className="checkbox-label" htmlFor={name} key={index}>
                  <Checkbox
                    id={name}
                    name={name}
                    onChange={handleCheckboxChange}
                  />
                  <span>{name}</span>
                </label>
              ))}
            </div> */}

              <div className="form-group">
                <Label
                  className="input-label"
                  htmlFor="regType"
                  style={{ display: 'none' }}
                >
                  Registration type
                </Label>
                <Select
                  // defaultValue="Select your industry"
                  name="regType"
                  id="regType"
                  onChange={handleSelectChange}
                  value={regType}
                >
                  <option value="" disabled>
                    I&apos;m registering a
                  </option>
                  {regTypes.map(({ name }, idx) => (
                    <option value={name} key={idx}>
                      {name}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="form-group">
                <Label className="input-label" htmlFor="organization">
                  Organization
                </Label>
                <Input
                  name="organization"
                  type="text"
                  id="organization"
                  value={organization}
                  onChange={handleOrganizationChange}
                />
              </div>

              <div className="form-group">
                <Label
                  className="input-label"
                  htmlFor="comments"
                  style={{ display: 'none' }}
                >
                  Comments
                </Label>
                <Textarea
                  name="comments"
                  id="comments"
                  placeholder="Comments"
                  rows={5}
                  value={comments}
                  onChange={handleCommentsChange}
                />
              </div>
            </fieldset>

            <div className="button-box">
              {error && (
                <Text as="p" color="red">
                  {error}
                </Text>
              )}
              <Button
                type="submit"
                aria-label="submit"
                aria-describedby="descriptionSubmit"
              >
                {loading ? 'Sending...' : 'Submit'}
              </Button>
            </div>
          </S.ClaimForm>
        ) : (
          <Box>
            <h2>Thank you!</h2>
            <p>Someone will be in touch soon.</p>
          </Box>
        )}
      </Section>
    </>
  )
}

export default ClaimPage
