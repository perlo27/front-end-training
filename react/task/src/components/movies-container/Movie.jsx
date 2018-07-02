import React, { Component } from 'react'

export default ({ imagePath, title, releaseDate, genres }) => {

  return (
    <div className="single-movie-item">
      <img src={imagePath}></img>
      <div className="movie-info">
        <h3>{title}</h3>
        <h5>{genres}</h5>
        <p>{releaseDate}</p>
      </div>
    </div>
  )
}
