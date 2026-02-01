import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";

function BrowseBooks() {
  const { category } = useParams();
  const location = useLocation();
  const books = useSelector((state) => state.books.list);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    let filtered = books;

    if (category) {
      filtered = filtered.filter(
        (b) => b.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (b) =>
          b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBooks(filtered);
  }, [books, category, searchTerm, location]);

  return (
    <div className="browse-books">
      <div className="sticky-header">
        <h1>Browse Books {category && `- ${category}`}</h1>

        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="book-grid">
        {filteredBooks.length ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;