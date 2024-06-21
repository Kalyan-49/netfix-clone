import React from "react";
import "./Player.css";
import back_arrow from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apidata, setApidata] = useState({
    name: "",
    key: "",
    type: "",
    published_at: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDEzNGViNDkxNGVlOTllZGQ4M2ZmZmEyOGU2MDYxZCIsInN1YiI6IjY2NjIwOWY0MjdhMTMyMjliNjIxZmY1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OUv27cHDD9E_55LegtpwPbMScFUw-21Z9uAdbWWDOLw",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApidata(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow}
        alt=""
        onClick={() => {
          navigate("/");
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apidata.key}`}
        frameborder="0"
        title="tailer"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apidata.name}</p>
        <p>{apidata.published_at.slice(0, 10)}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  );
};

export default Player;
