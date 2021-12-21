// Theme:
// ___________________________________________________________________

import { darken } from 'polished'

// ___________________________________________________________________

type ThemeShape = {
  breakpoints: string[]
  mq: {
    [key: string]: string
  }
  initialColorModeName?: string
  useColorSchemeMediaQuery?: boolean
  useBodyStyles?: boolean
  useRootStyles?: boolean
  useLocalStorage?: boolean
  colors: {
    text: string
    textMuted: string
    background: string
    black: string
    white: string
    gray: string
    primary: string
    secondary: string
    accent: string
    highlight: string
  }
  space: string[]
  gutter: {
    [key: string]: string | number | number[]
  }
  fonts: {
    [key: string]: string
  }
  fontSizes: string[]
  fontWeights: {
    [key: string]: number
  }
  buttons: {
    primary: {
      [key: string]: any
    }
    outline: {
      [key: string]: any
    }
  }
  text: {
    default: {
      [key: string]: any
    }
    lead: {
      [key: string]: any
    }
  }
  strokeWidth: string
  maxWidth: string
  siteWidth: string
  logoHeight: string
  headerHeight: string
  iconWidth: string
  inputHeight: string
  grid: {
    [key: string]: string | number | number[]
  }
  transition: {
    [key: string]: string
  }
  transform: {
    matrix: {
      [key: string]: string
    }
  }
  border: string
  borderRadius: string
  borderRadiusLarge: string
  shadow: string
  root: {
    mouseX: string
    mouseY: string
    font: {
      [key: string]: string
    }
    space: {
      [key: string]: string
    }
  }
}

const breakpoints: string[] = ['768px', '980px']

const theme: ThemeShape = {
  breakpoints,
  mq: {
    tablet: `(min-width: ${breakpoints[0]})`,
    desktop: `(min-width: ${breakpoints[1]})`,
  },

  // Color palette
  // ___________________________________________________________________

  colors: {
    text: '#EDF3FF',
    textMuted: '#B5BBC6',
    background: '#000B18',

    black: '#000000',
    white: '#FFFFFF',
    gray: '#999999',

    primary: '#0F95A7',
    secondary: '#025373',
    accent: '#C8DCE1',
    highlight: '#001830',
  },

  // Space
  // ___________________________________________________________________

  space: [
    '0', // 0
    'var(--space-xxs)', // 1
    'var(--space-xs)', // 2
    'var(--space-sm)', // 3
    'var(--space-md)', // 4
    'var(--space-lg)', // 5
    'var(--space-xl)', // 6
    'var(--space-xxl)', // 7
    '7rem', // 8
    '10rem', // 9
    '12rem', // 10
    '14rem', // 11
    '16rem', // 12
    '18rem', // 13
  ],

  gutter: {
    mobile: 4,
    tablet: 5,
    desktop: 5,
    vertical: [6, 6, 7],
    axis: [5, 5, 6],
  },

  // Typography
  // ___________________________________________________________________

  fonts: {
    body: `"Karla", Arial, Liberation Mono, Menlo, Courier, monospace`,
    heading: `"Karla", Arial, Liberation Mono, Menlo, Courier, monospace`,
    sans: `"Karla", Arial, Liberation Mono, Menlo, Courier, monospace`,
    display: `"Neue Machina", Arial, Liberation Mono, Menlo, Courier, monospace`,
    mono: `"DMMono", Consolas, Liberation Mono, Menlo, Courier, monospace`,
  },

  fontSizes: [
    'var(--text-xs)', // 0
    'var(--text-sm)', // 1
    'var(--text-base-size)', // 2
    'var(--text-md)', // 3
    'var(--text-lg)', // 4
    'var(--text-xl)', // 5
    'var(--text-xxl)', // 6
    'var(--text-xxxl)', // 7
  ],

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    black: 700,
  },

  // Button
  // ___________________________________________________________________

  buttons: {
    primary: {
      fontWeight: 500,
      bg: 'primary',
      border: '1px solid',
      borderColor: 'primary',
      borderRadius: '4px',
      color: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      lineHeight: '1.5',
      py: 2,
      px: 4,
      '&:hover': {
        bg: darken(0.15, '#0F95A7'),
      },
      span: {
        ml: 5,
        svg: {
          fill: 'white',
          '&:hover': {
            fill: 'white',
          },
        },
      },
    },
    outline: {
      bg: 'transparent',
      borderRadius: '4px',
      border: '1px solid',
      borderColor: 'primary',
      color: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      lineHeight: '1.5',
      py: 2,
      px: 4,
      '&:hover': {
        bg: darken(0.25, '#0F95A7'),
      },
    },
  },

  // Base
  // ___________________________________________________________________

  text: {
    default: {
      marginBottom: 4,
    },
    lead: {
      fontSize: [4, 4, 5],
      color: 'textMuted',
      fontWeight: '400',
      lineHeight: 1.25,
    },
  },

  border: '1px solid #26476C',
  borderRadius: '4px',
  borderRadiusLarge: '55px',
  shadow: '0px 0px 7px rgba(0, 0, 0, 0.75)',

  maxWidth: '1200px',
  siteWidth: '100%',
  logoHeight: '32px',
  headerHeight: '80px',
  iconWidth: '18px',
  inputHeight: '94px',
  strokeWidth: '2px',

  grid: {
    gap: [4, 5],
  },

  transition: {
    all: 'all 0.22s ease-in-out 0s',
    global: '0.22s ease-in-out 0s',
  },

  transform: {
    matrix: {
      from: 'matrix(1, 0, 0, 1, 24, 0)',
      to: 'matrix(1, 0, 0, 1, 0, 0)',
    },
  },

  root: {
    mouseX: 'var(--mouse-x)',
    mouseY: 'var(--mouse-y)',
    font: {
      // Base sizing
      baseSize: 'var(--text-base-size)',
      scaleRatio: 'var(--text-scale-ratio)',

      // Type scale
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      md: 'var(--text-md)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
      xxl: 'var(--text-xxl)',
      xxxl: 'var(--text-xxxl)',

      // Line height
      headingLineHeight: 'var(--heading-line-height)',
      bodyLineHeight: 'var(--body-line-height)',

      // Letter spacing
      headingLetterSpacing: 'var(--heading-letter-spacing)',
      baseLetterSpacing: 'var(--body-letter-spacing)',
    },
    space: {
      xxs: 'var(--space-xxs)',
      xs: 'var(--space-xs)',
      sm: 'var(--space-sm)',
      md: 'var(--space-md)',
      lg: 'var(--space-lg)',
      xl: 'var(--space-xl)',
      xxl: 'var(--space-xxl)',
    },
  },
}

export default theme
