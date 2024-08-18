import FavoritesGallery from '@components/FavoritesGallery/FavoritesGallery'
import { render, screen } from '@testing-library/react'

jest.mock('@components/ArtCardSmall/ArtCardSmall', () => () => <div>ArtCardSmall</div>)

describe('FavoritesGallery', () => {
  beforeEach(() => {
    sessionStorage.setItem('1', '1')
    sessionStorage.setItem('2', '2')
    sessionStorage.setItem('3', '3')
  })

  afterEach(() => {
    sessionStorage.clear()
  })

  test('the same number of ArtCardSmall as sessionStorage elements', () => {
    render(<FavoritesGallery />)
    expect(screen.getAllByText('ArtCardSmall')).toHaveLength(3)
  })

  test('no ArtCardSmall components when sessionStorage is empty', () => {
    sessionStorage.clear()
    render(<FavoritesGallery />)
    expect(screen.queryByText('ArtCardSmall')).toBeNull()
  })
})
