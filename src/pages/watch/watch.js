import React from "react";
import watchCompound from "./watchCompound";
import dummySeed from "../browse/dummySeed";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Watch page - with a video Player

export default function Watch() {
  const { movieID } = useParams();

  const [movie, setMovie] = useState({});

  const getAllData = () => {
    const found = dummySeed.filter((item) => item.id === movieID);
    setMovie(found[0]);
  };
  console.log(movie);

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <watchCompound.Container>
      <watchCompound.Title>Movie : {movie.title}</watchCompound.Title>
      <video
        id="my-player"
        className="video-js"
        controls
        preload="auto"
        poster="//vjs.zencdn.net/v/oceans.png"
        data-setup="{}"
        fluid="true"
      >
        <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
      </video>
      <watchCompound.SubTitle>
        MOVIE'S DESCRIPTION : {movie.description}
      </watchCompound.SubTitle>
      <watchCompound.SubTitle>GENRE : {movie.genre}</watchCompound.SubTitle>
      <watchCompound.SubTitle>
        AUDIENCE : +{movie.maturity}
      </watchCompound.SubTitle>
    </watchCompound.Container>
  );
}
