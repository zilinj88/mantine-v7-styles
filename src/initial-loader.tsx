import { Box } from '@mantine/core'
import { PropsWithChildren } from 'react'
import { zIndex } from './z-index'
import WordLogo from './assets/word-logo.svg?react'

// We use custom components to avoid having to load Mantine's JS on first render
const Col: React.FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
)
const Row: React.FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center',
      display: 'flex',
      padding: '10px',
    }}
  >
    {children}
  </div>
)

// define CSS inline so that the user downloads the minimal amount of data
const spinnerChildrenCSS = {
  width: '100%',
  height: '100%',
  borderRadius: '100%',
}
const spinnerAnimationCSS = `@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

export const InitialLoader: React.FC = () => (
  <div
    style={{
      position: 'fixed',
      zIndex: zIndex.initialLoader,
      top: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      display: 'flex',
      left: '50%',
      right: '0',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <style>{spinnerAnimationCSS}</style>
    <Col>
      <Row>
        <div
          style={{
            width: '50px',
            height: '50px',
            position: 'relative',
          }}
        >
          <div
            style={{
              ...spinnerChildrenCSS,
              position: 'absolute',
              zIndex: 100,
              border: '4px solid transparent',
              animation: `spin 1s infinite`,
              borderTopColor: '#3498db',
            }}
          />
          <div
            style={{
              ...spinnerChildrenCSS,
              position: 'absolute',
              border: '4px solid #ccc',
            }}
          />
        </div>
      </Row>
      <Row>
        <Box h={38}>
          <WordLogo alt='Aerial Logo' />
        </Box>
      </Row>
      <Row>Loading Aerial ...</Row>
    </Col>
  </div>
)
