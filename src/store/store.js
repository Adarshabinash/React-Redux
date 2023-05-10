import { legacy_createStore as createStore } from "redux";
import bookReducer from "../reducers/BookReducer";

const store = createStore(bookReducer);

export default store;
