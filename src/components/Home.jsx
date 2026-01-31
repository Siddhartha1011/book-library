import BookCard from "./BookCard";
import { books } from "./data/book.js";

const categories = [
  "Fiction",
  "Non-Fiction",
  "Sci-Fi",
  "Biography",
  "Mystery",
];

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Online Book Store </h1>
      <p className="subtitle">Discover your next favorite book</p>

      {/* Categories */}
      <section className="categories">
        <h2>Book Categories</h2>
        <ul>
          {categories.map((cat, index) => (
            <li key={index}>{cat}</li>
          ))}
        </ul>
      </section>

      {/* Popular Books */}
      <section className="popular-books">
        <h2>Popular Books</h2>
        <div className="book-grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;