import { useParams } from "react-router-dom";
import { books } from "./data/book";

function BookDetails() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p>Book not found.</p>;

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <p>by <strong>{book.author}</strong></p>
      <img src={book.image} alt={book.title} />
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Rating:</strong> {book.rating} / 5</p>
      <p className="description">{book.description}</p>
    </div>
  );
}

export default BookDetails;