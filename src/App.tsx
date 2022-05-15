import React from 'react';
import './App.css';
import Row from './component/row';
import { requests } from './api/request'

const movieRows = [
  {
    title:'NETFLIX ORIGINALS',
    fetchUrl:requests.fetchNetflixOriginals,
  },
  {
    title:'Top Rated',
    fetchUrl:requests.fetchTopRated,
  },
  {
    title:'Comedy Movies',
    fetchUrl:requests.fetchComedyMovies,
  },
  {
    title:'Romance Movies',
    fetchUrl:requests.fetchRomanceMovies,
  },
  {
    title:'Documentaries',
    fetchUrl:requests.fetchDocumentMovies,
  },
]

function App() {
  return (
    <div className="App">
      {movieRows.map((movieRow) => (
      <Row
      title={movieRow.title}
      fetchUrl={movieRow.fetchUrl} />
      ))} 
    </div>
  );
}

export default App;
