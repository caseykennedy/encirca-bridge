// ClaimPage:
// ___________________________________________________________________

import React, { useState } from 'react'
import * as qs from 'query-string'

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
import Globe from '../../../static/globe.svg'

import regTypes from './regTypes.json'

// ___________________________________________________________________

type FormDataShape = {
  tld: string
  firstName: string
  lastName: string
  email: string
  organization: string
  comments: string
  regTypeList: string[]
}

// const initialState = {
//   tld: '',
//   firstName: '',
//   lastName: '',
//   email: '',
//   organization: '',
//   comments: '',
//   regTypeList: [],
// }

interface GenericObject {
  [key: string]: string | number | boolean
}

// function encode(data: any) {
//   return Object.keys(data)
//     .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
//     .join('&')
// }

const ClaimPage = () => {
  const [tld, setTld] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [organization, setOrganization] = useState('')
  const [comments, setComments] = useState('')
  const [regTypeList, setRegTypeList] = useState<string[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const formData = {
    tld,
    firstName,
    lastName,
    email,
    organization,
    comments,
    regTypeList,
  }

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setFormState({ ...formState, [e.target.name]: e.target.value })

  const handleCheckboxChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    let newArray = [...regTypeList, target.id]
    if (regTypeList.includes(target.id)) {
      newArray = newArray.filter((regType) => regType !== target.id)
    }
    setRegTypeList(newArray)
  }

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
      }).toString(),
    })
      .then((response) => {
        console.log('response', response)
        setLoading(false)
        // setTld('')
        // setFirstName('')
        // setLastName('')
        // setEmail('')
        // setOrganization('')
        // setComments('')
        // setRegTypeList([])
      })
      .catch((error) => {
        setError('FUNCTION ERROR')
        console.log('ERROR')
        console.log('error:', error)
      })
  }

  return (
    <>
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

            <div className="form-group  form-group__checkbox">
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
      </Section>
    </>
  )
}

export default ClaimPage
