import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./booksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    image: "",
    description: "",
    rating: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔴 Validation
    if (
      !formData.title ||
      !formData.author ||
      !formData.category ||
      !formData.image ||
      !formData.description ||
      !formData.rating
    ) {
      setError("All fields are required");
      return;
    }

    dispatch(
      addBook({
        id: Date.now(),
        ...formData,
        rating: Number(formData.rating),
      })
    );

    navigate("/browse"); // redirect after submit
  };

  return (
    <div className="add-book">
      <h1>Add New Book</h1>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <input name="author" placeholder="Author" onChange={handleChange} />

        <select name="category" onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="biography">Biography</option>
          <option value="mystery">Mystery</option>
        </select>

        <input name="image" placeholder="Image URL" onChange={handleChange} />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          placeholder="Rating (1-5)"
          onChange={handleChange}
        />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;