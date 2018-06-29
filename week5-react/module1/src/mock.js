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
      title: 'abc',
      id: 1,
      date: '2018-06-25',
      rate: 3,
      genre: 'drama',
    },
    {
      title: 'cde',
      id: 2,
      date: '2018-06-24',
      rate: 4,
      genre: 'action',
    },
    {
      title: 'fgh',
      id: 3,
      date: '2018-06-26',
      rate: 2,
      genre: 'drama',
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
