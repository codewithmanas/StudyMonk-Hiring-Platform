// import React from 'react'

import SearchComponent from "./components/SearchComponent"

function SearchCandidate() {
    const arrayData = [
      'Sushil Kumar',
      'Rakesh Singh',
      'Lakesh Kumar',
      'Dilip Patel',
      'Asit Patil'
    ];

  return (
    <div>
        <SearchComponent data={arrayData} />
    </div>
  )
}

export default SearchCandidate