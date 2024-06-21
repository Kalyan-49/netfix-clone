import React, { useRef, useEffect, useState } from "react";
import "./TitleCard.css";
import { Link } from "react-router-dom";
// import cards_data from "../../assets/cards/Cards_data";
const TitleCard = ({ title, catageory }) => {
  const [apidata, setApidata] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDEzNGViNDkxNGVlOTllZGQ4M2ZmZmEyOGU2MDYxZCIsInN1YiI6IjY2NjIwOWY0MjdhMTMyMjliNjIxZmY1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OUv27cHDD9E_55LegtpwPbMScFUw-21Z9uAdbWWDOLw",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        catageory ? catageory : "popular"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApidata(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);

    // Effect code
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="title-cards">
      <h1>{title ? title : "Popular on Netflix"}</h1>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="cards" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
                alt=""
              />
              <p>{card.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
