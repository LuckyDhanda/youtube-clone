import { createSlice } from "@reduxjs/toolkit";

// This slice is used to cache search results and avoid unnecessary API calls.
// It uses RTK to create a slice of the Redux store that manages the search results cache.
// The slice has an initial state of an empty object, and a single reducer function called cacheResults.
// The cacheResults function takes the current state and an action payload, and updates the state with the new search results.
// The action payload is expected to be an object where the keys are search queries and the values are the corresponding search results.
// The slice is exported as the default export, along with the cacheResults action creator.
// The slice is used in the Head component to manage search suggestions.
// The Head component uses the useSelector hook to access the search cache from the Redux store,
// and the useDispatch hook to dispatch the cacheResults action when new search results are fetched.
// The Head component also uses the useEffect hook to debounce the search query input,
// and fetch search suggestions from the API when the user types a new query.
// The search suggestions are stored in the component state, and displayed in a dropdown list below the search input.

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export default searchSlice.reducer;
export const { cacheResults } = searchSlice.actions;
