// Hamburger
// ___________________________________________________________________

import * as React from 'react'
import styled from 'styled-components'

// Components
import Section from '../Section'
import SubscribeForm from '../SubscribeForm'

// ___________________________________________________________________

type Props = {
  isOpen: boolean
  menuClicked: () => void
  width: number
  height: number
  strokeWidth: number
  rotate: number
  color: string
  borderRadius: number
  animationDuration: number
  className: string
}

export default function HamburgerMenu(props: Props) {
  const { menuClicked, rotate, color, borderRadius, className } = props
  const width = `${props.width || 36}px`
  const height = `${props.height || 30}px`
  const halfHeight = `${parseInt(height.replace('px', ''), 10) / 2}px`
  const isOpen = props.isOpen || false
  const strokeWidth = props.strokeWidth || 2
  const halfStrokeWidth = `-${strokeWidth / 2}px`
  const animationDuration = props.animationDuration || 0.4

  const getTransformValue = (isOpen, defaultPos, rotateVal) =>
    `translate3d(0,${isOpen ? halfHeight : defaultPos},0) rotate(${
      isOpen ? `${rotateVal}deg` : '0'
    })`

  const styles = {
    container: {
      width,
      height,
      position: 'relative',
      transform: `rotate(${props.rotate || 0}deg)`,
    },
    lineBase: {
      display: 'block',
      height: `${strokeWidth}px`,
      width: '100%',
      background: props.color || '#000',
      transitionTimingFunction: 'ease',
      transitionDuration: `${animationDuration}s`,
      borderRadius: `${props.borderRadius || 0}px`,
      transformOrigin: 'center',
      position: 'absolute',
    },
    firstLine: {
      transform: getTransformValue(isOpen, 0, 45),
      marginTop: halfStrokeWidth,
    },
    secondLine: {
      transitionTimingFunction: 'ease-out',
      transitionDuration: `${animationDuration / 4}s`,
      opacity: isOpen ? '0' : '1',
      top: halfHeight,
      marginTop: halfStrokeWidth,
    },
    thirdLine: {
      transform: getTransformValue(isOpen, height, -45),
      marginTop: halfStrokeWidth,
    },
  }

  return (
    <div className={className}>
      <span />
      <span />
      <span />
    </div>
  )
}
