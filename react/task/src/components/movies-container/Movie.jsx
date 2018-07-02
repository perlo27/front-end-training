import React, { Component } from 'react'

export default ({ imagePath, title, releaseDate, genres }) => {

  return (
    <div className="single-movie-item">
      <img src={imagePath}></img>
      <p>{title}</p>
      <p>{genres}</p>
      <p>{releaseDate}</p>
    </div>
  )
}
