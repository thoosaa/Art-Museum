import '@styles/globals.scss'

import { AppRouting } from '@components/AppRouting/AppRouting'
import { Fallback } from '@components/Fallback/Fallback'
import { PaginationProvider } from '@context/PageContext/PageContext'
import { ErrorBoundary } from 'react-error-boundary'
import { ThemeProvider } from 'styled-components'

import { theme } from './theme'

export function App() {
  return (
    <ErrorBoundary fallbackRender={Fallback}>
      <PaginationProvider>
        <ThemeProvider theme={theme}>
          <AppRouting />
        </ThemeProvider>
      </PaginationProvider>
    </ErrorBoundary>
  )
}
