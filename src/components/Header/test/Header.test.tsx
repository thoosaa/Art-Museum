import Header from '@components/Header/Header'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Header Component', () => {
  test('renders Your favorites when id is 1', () => {
    render(
      <MemoryRouter>
        <Header id={1} />
      </MemoryRouter>,
    )

    const favoriteLinks = screen.getAllByText(/Your favorites/i)
    expect(favoriteLinks.length).toBe(2)
    expect(screen.queryByText(/Home/i)).not.toBeInTheDocument()
  })

  test('renders both Home and Your favorites when id is not 1', () => {
    render(
      <MemoryRouter>
        <Header id={2} />
      </MemoryRouter>,
    )

    const favoriteLinks = screen.getAllByText(/Your favorites/i)
    expect(favoriteLinks.length).toBe(2)
    const HomeLinks = screen.getAllByText(/Home/i)
    expect(HomeLinks.length).toBe(2)
  })
})
