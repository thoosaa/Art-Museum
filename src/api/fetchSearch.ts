import axios from 'axios';

export const fetchSearch = async (query: string, currentPage: number, isSorted: boolean) => {
  try {
    const res = await axios.get(`https://api.artic.edu/api/v1/artworks/search`, {
      params: {
        q: query,
        size: 5,
        from: (currentPage - 1) * 5,
        sort: isSorted ? 'title.keyword' : '',
      },
    });

    return [...res.data.data.map((item: { id: number }) => item.id)];
  } catch (err) {
    console.log(err);
  }
};
