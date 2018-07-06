import React, { Component } from 'react'
import GifItem from './GifsItem'
const GifsList = (props) => {
    const gifItems = props.gifs.map((image) => {
        return <GifItem key={image.id} gif={image} />
    });

    return (
        <div className="gif-list">{gifItems}</div>
    );
};

export default GifsList
