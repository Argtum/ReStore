const initialState = {
  books: [],
  loading: true
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case `BOOKS_REQUESTED`:
      return {
        books: [],
        loading: true
      };

    case `BOOKS_LOADED`:
      return {
        books: action.payload,
        loading: false
      };

    default:
      return state;
  }
}

export default reducers;
