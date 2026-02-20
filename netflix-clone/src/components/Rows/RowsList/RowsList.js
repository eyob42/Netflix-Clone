import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

const RowsList = () => {
  return (
   <>
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow
        isNetflixOriginal={true}  // This adds the badge
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending} 
      />
      <Row 
        title="Top Rated" 
        fetchUrl={requests.fetchTopRatedMovies}
      />
      <Row 
        title="Action Movies" 
        fetchUrl={requests.fetchActionMovies}
      />
            {/* Comedy Movies
      <Row 
        title="Comedy Movies" 
        fetchUrl="/discover/movie?api_key=9a23e9a8212b1d4300a10c25901b4430&with_genres=35"
      /> */}
      
      {/* Horror Movies */}
      <Row 
        title="Horror Movies" 
        fetchUrl={requests.fetchHorrorMovies}
      />
      
      {/* Romance Movies */}
      <Row 
        title="Romance Movies" 
        fetchUrl={requests.fetchRomanceMovies}
      />
      
      {/* Documentaries
      <Row 
        title="Documentaries" 
        fetchUrl={requests.fetchDocumentaries}
      /> */}
    </>
  )
}

export default RowsList
