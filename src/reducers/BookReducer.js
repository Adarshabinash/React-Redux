//Reducers tell us how to govern the state change using the state and the action.
//take an example of Aloo and magic in the conveyer belt where the aloo is the initial state and magic is the action. The conveyer belt is the reducer that combines the both to create Sona.Sona is the updated state.
//Also reducers are the pure functions that take in state and action.

// import { borrowBook, returnBook } from "../actions/action";

let initialState = {
  numOfBooks: 1000,
  numOfComics: 10000,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "borrow":
      return { ...state, numOfBooks: state.numOfBooks - 5 };
    case "return":
      return { ...state, numOfBooks: state.numOfBooks + 5 };
    case "borrowComics":
      return { ...state, numOfComics: state.numOfComics - action.payload };
    case "returnComics":
      return { ...state, numOfComics: state.numOfComics + action.payload };
    default:
      return state;
  }
};

export default bookReducer;
