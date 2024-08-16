import ArtCard from '@components/ArtCard/ArtCard';
import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ArtCard', () => {
  const art_id = '123';

  beforeEach(() => {
    sessionStorage.clear();
    mockedAxios.get.mockReset();
  });

  test('bookmark addition and removal', async () => {
    const mockResponse = {
      data: {
        data: {
          title: 'Sample Art',
          artist_title: 'Sample Artist',
          image_id: 'sample_image_id',
          is_public_domain: true,
        },
      },
    };

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    render(
      <Router>
        <ArtCard art_id={art_id} />
      </Router>,
    );

    const bookmarkButton = screen.getByRole('button', { name: /bookmark/i });
    expect(sessionStorage.getItem(art_id)).toBeNull();

    fireEvent.click(bookmarkButton);
    expect(sessionStorage.getItem(art_id)).toBe(art_id);

    fireEvent.click(bookmarkButton);
    expect(sessionStorage.getItem(art_id)).toBeNull();
  });

  test('navigation to art piece page', () => {
    const mockResponse = {
      data: {
        data: {
          title: 'Sample Art',
          artist_title: 'Sample Artist',
          image_id: 'sample_image_id',
          is_public_domain: true,
        },
      },
    };

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    render(
      <Router>
        <ArtCard art_id={art_id} />
      </Router>,
    );

    const artFigure = screen.getByRole('figure');
    expect(location.pathname).toBe('/');

    fireEvent.click(artFigure);
    expect(location.pathname).toBe(`/art/${art_id}`);
  });
});
