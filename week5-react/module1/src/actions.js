export default {
  handleSearchTextAction: newValue => ({
    type: 'SEARCH_QUERY',
    newValue,
  }),

  searchActiveAction: {
    type: 'SEARCH_ACTIVE',
  },

  sortAction: newValue => ({
    type: 'SORT_BY',
    newValue,
  }),

  criteriaAction: newValue => ({
    type: 'SEARCH_CRITERIA',
    newValue,
  }),

  movieSelectedAction: newValue => ({
    type: 'SELECTED_MOVIE',
    newValue,
  }),

  similarMoviesAction: {
    type: 'SIMILAR_MOVIES',
  },
};
