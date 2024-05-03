import React from "react";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { ShimmerThumbnail } from "react-shimmer-effects";

const MovieCard = ({
  id,
  genres,
  image,
  name,
  language,
  released,
  rating,
  runtime,
  status,
  country,
}) => {
  if (!image) return;

  return (
    <div className="custom-shadow bg-white hover:scale-105 duration-200 gap-2 flex w-[27rem] rounded-md p-2 h-72 xxl:w-[24rem] xl:w-[28rem] lg:w-[24rem] md:w-[30rem] sm:w-[26rem]">
      <div className="w-6/12">
        <img
          src={image?.original}
          alt="movie"
          className="object-cover rounded-l-md w-full h-full"
        />
      </div>

      <div className="relative w-6/12 flex flex-col gap-1">
        <h3 className="text-xl font-bold tracking-wider ">{name}</h3>
        <p>Language : {language}</p>
        <ul className="flex gap-1 flex-wrap items-center ">
          <li>Genres : </li>
          {genres.map((genre) => (
            <li
              className="bg-gray-300 rounded-sm px-1 py-[1px] text-xs"
              key={genre}
            >
              {genre}
            </li>
          ))}
        </ul>

        <span>Status : {status ? status : "Unavailable"} </span>

        <span>Runtime : {runtime ? runtime : "Unavailable"}</span>
        <span>Released : {released ? released : "Unavailable"}</span>
        <span>Country : {country ? country : "Unavailable"}</span>

        <div
          className="flex gap-1 absolute bg-black text-white px-1  
              rounded-tr-md 
        items-center right-0 top-0"
        >
          <IoMdStar className="text-[#E2B616] text-xl" />
          {rating.average ? (
            <span className="text-sm">{rating.average}</span>
          ) : (
            <span className="text-xs">Unavailable</span>
          )}
        </div>

        <Link to={"/summary/" + id}>
          <button className="bg-black absolute bottom-1 right-1 text-[#E2B616] rounded-md w-full">
            Shows
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
