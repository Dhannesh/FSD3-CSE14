// function must return single element
// <> </> : fragments can be used to group multiple elements
// component - any js function returns html directly
//  component can be called as html tag
// the tag must be closed
// component first character must be capital

import BookList from "./components/BookList";

export default function App() {
  return (
    <>
      <h1>Hello React</h1>
      <BookList />
    </>
  );
}
