import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import { books } from "./data/book";

function BrowseBooks() {
  const { category } = useParams();
  const location = useLocation();
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
  }, [category, searchTerm, location]);

  return (
    <div className="browse-books">
      <h1>Browse Books {category && `- ${category}`}</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Book List */}
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