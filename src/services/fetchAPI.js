const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTY1YjgzZTRlMDY1MGU2ZTJlNzU2YTY3MjVmNTg0OCIsInN1YiI6IjY0OTNlZWNiY2ZlNDhmMDBhY2ExNzBkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wcGxTBKfsLd3h8YX0sgQK0DmVDuLuYq0pCCHV9Po96o',
  },
};

export default function fetchAPI(request) {
  return fetch(`https://api.themoviedb.org/3/${request}`, options).then(
    response => {
      if (!response.ok) {
        throw new Error('Error load');
      }
      return response.json();
    }
  );
}
