import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import borrowBook from "./actions/borrow";
import returnBook from "./actions/return";
import borrowComics from "./actions/borrowComics";
import returnComics from "./actions/returnComics";

function App() {
  const books = useSelector((state) => state.numOfBooks);
  const comics = useSelector((state) => state.numOfComics);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>This is my library</h1>
      <br />
      <h3>Number of available books: {books} </h3>

      <br />
      <div className="buttons">
        <button onClick={() => dispatch(borrowBook())}>Borrow books</button>
        <button onClick={() => dispatch(returnBook())}>Return books</button>
      </div>
      <h3>Number of available books: {comics} </h3>
      <br />
      <br />
      <div className="buttons2">
        <button onClick={() => dispatch(borrowComics())}>Borrow comics</button>
        <button onClick={() => dispatch(returnComics())}>Return comics</button>
      </div>
    </div>
  );
}

export default App;
