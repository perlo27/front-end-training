import PropTypes from 'prop-types';

const movieShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
});

export default {
  allMovies: [
    {
      title: 'first-movie, drama, 2015, rating: *',
      id: 1,
      date: '2015',
      rate: 1,
      genre: 'drama',
    },
    {
      title: 'second-movie, action, 2014, rating: **',
      id: 2,
      date: '2014',
      rate: 2,
      genre: 'action',
    },
    {
      title: 'third-movie, drama, 2013, rating: ***',
      id: 3,
      date: '2013',
      rate: 3,
      genre: 'drama',
    },
    {
      title: 'fourth-movie, action, 2012, rating: ****',
      id: 4,
      date: '2012',
      rate: 4,
      genre: 'action',
    },
    {
      title: 'fifth-movie, action, 2011, rating: *****',
      id: 5,
      date: '2011',
      rate: 5,
      genre: 'action',
    },
  ],

  allCriterias: ['genre', 'title'],

  sortParameters: { rate: 'rate', date: 'date' },

  movieShape,

  selectedMovieAndSimilarMoviesShape: PropTypes.shape({
    selectedMovie: movieShape.isRequired,
    similarMovies: PropTypes.arrayOf(movieShape).isRequired,
  }),
};
