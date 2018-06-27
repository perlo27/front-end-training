import React, { Component } from 'react';
import { render } from 'react-dom';

const element = React.createElement(
    "h1",
    { className: "title" },
    "Hello world!"
);

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}


class Netflixroulette extends React.Component {
    render() {
        const movies = [
            {
                title: 'Dark',
                cover: '',
                rating: '8/10',
                duration: '90min',
                releaseYear: '10-06-2017'
            },

            {
                title: 'Kill Bill',
                cover: '',
                rating: '9/10',
                duration: '90min',
                releaseYear: '10-06-2010'
            },

            {
                title: 'Game of thrones',
                cover: '',
                rating: '10/10',
                duration: '60min',
                releaseYear: '01-01-2013'
            }
        ]
        return (
            movies.map(movie => {
                return (
                    <div>
                        <div>{movie.title} : {movie.cover} : {movie.rating} : {movie.duration} : {movie.releaseYear}</div>
                    </div>
                );
            })
        );
    }
}
render(<Netflixroulette />, document.getElementById("app"));
