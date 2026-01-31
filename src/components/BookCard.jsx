function BookCard({ book }) {
    return (
      <div className="book-card">
        <img src={book.image} alt={book.title} />
        <h3>{book.title}</h3>
        <p className="author">by {book.author}</p>
        <button className="details-btn">View Details</button>
      </div>
    );
  }
  
  export default BookCard;