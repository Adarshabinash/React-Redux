//Action tell us what changes we need in our state.The store depends on action to make changes

const borrowBook = () => {
  return {
    type: "borrow",
  };
};

export default borrowBook;
