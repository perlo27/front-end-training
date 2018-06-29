export const handleSearchTextAction = newValue => ({
  type: 'SEARCH_QUERY',
  newValue,
});

export const searchActiveAction = {
  type: 'SEARCH_ACTIVE',
};

export const sortAction = newValue => ({
  type: 'SORT_BY',
  newValue,
});

export const criteriaAction = newValue => ({
  type: 'SEARCH_CRITERIA',
  newValue,
});

export const movieSelectedAction = newValue => ({
  type: 'SELECTED_MOVIE',
  newValue,
});

export const similarMoviesAction = {
  type: 'SIMILAR_MOVIES',
};
