import Theme from '@assets/styles/Theme'
import { Fallback } from '@components/Fallback/Fallback'
import { routes } from '@constants/routes'
import { ErrorBoundary } from 'react-error-boundary'
import { Route, Routes } from 'react-router-dom'

export function App() {
  return (
    <ErrorBoundary fallbackRender={Fallback} onReset={(details) => console.log(details)}>
      <Theme>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Theme>
    </ErrorBoundary>
  )
}
