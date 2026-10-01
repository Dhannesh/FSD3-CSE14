import Book from "./components/Book";
import Pen from "./components/Pen";
const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY218_.jpg",
  bname: "React Design Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};
const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY218_.jpg",
  bname: "The Road to React",
  price: 2886,
  quantity: 3,
  rating: 4.5,
};

const p1 = {
  picUrl: "https://m.media-amazon.com/images/I/81JAzj9YrqL._AC_UL320_.jpg",
  company: "Luxor",
  price: 176,
};
const p2 = {
  picUrl:
    "https://m.media-amazon.com/images/I/21VGi432jRL._SY300_SX300_QL70_FMwebp_.jpg",
  company: "Roller",
  price: 499,
};

export default function App() {
  return (
    <>
      <h1>Online Book Store</h1>
      <div className="container">
        <Book book={b1} />
        <Book book={b2} />
        <Book book={b1} />
        <Book book={b2} />
        <Pen pen={p1} />
        <Pen pen={p2} />
      </div>
    </>
  );
}
