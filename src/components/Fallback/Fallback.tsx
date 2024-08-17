import { FallbackProps } from 'react-error-boundary'

export function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className='main'>
      <p>Error encountered:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
