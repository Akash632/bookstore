import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [value, setValue] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = (search) => {
    setLoading(true);
    fetch(
      `https://openlibrary.org/search.json?q=${search}&limit=10&page=1`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.docs);
      });
      console.log(data);
    setValue("");
  };


  const handleData = (book) => {
    let stored_data = JSON.parse(localStorage.getItem("books")) || [];
    let book_data = [
      ...stored_data,
      { key: book.key, title: book.title, edition: book.edition_count },
    ];
    localStorage.setItem("books", JSON.stringify(book_data));
  };

  const handleChange= (book) =>{
    setValue(book);
    fetchData(book);
  }

  return (
    <div className="main-container">
        <div className="header-container">
        <div className="input-container">
        <input
          type="search"
          onChange={(e) => handleChange(e.target.value)}
          className="input-field"
        />
              <button onClick={() => navigate("/books")}>My Books</button>
      </div>
        </div>
      {data.length > 0 ? (
        <div className="book-container">
          {data &&
            data.map((value) => (
              <div className="book-card" key={value.key}>
                <p>
                  <span style={{ fontWeight: "bold" }}>Book Title : </span>
                  {value.title}
                </p>
                <br />
                <p>
                  <span style={{ fontWeight: "bold" }}>Edition : </span>
                  {value.edition_count}
                </p>
                <button onClick={() => handleData(value)}>
                  Add to MyBooks
                </button>
              </div>
            ))}
        </div>
      ) : loading ? (<h1>Loading...</h1>) : <h1>Search for books</h1>
      }
    </div>
  );
};

export default Home;
