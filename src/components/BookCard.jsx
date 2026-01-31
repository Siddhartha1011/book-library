import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p className="author">by {book.author}</p>

      <Link to={`/book/${book.id}`}>
        <button className="details-btn">View Details</button>
      </Link>
    </div>
  );
}

export default BookCard;