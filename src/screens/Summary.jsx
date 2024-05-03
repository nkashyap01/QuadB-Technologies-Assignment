import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ShimmerThumbnail } from "react-shimmer-effects";

const Summary = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { movies } = useSelector((state) => state.movie);

  const { id } = useParams();

  const movie = movies.find((movie) => movie.show.id === parseInt(id));

  const { genres, image, name, language, rating, summary } = movie.show;

  const cleanedSummary = summary
    ? summary.replace(/<\/?p[^>]*>/g, "").replace(/<\/?b[^>]*>/g, "")
    : "Unavailable";

  return (
    <div className="bg-[#2C333F] h-screen  pt-20 flex items-center justify-center">
      {!isOpen ? (
        <div className="custom-shadow bg-white hover:scale-105 duration-200 gap-2 flex w-[40rem] rounded-md p-2">
          <div className="w-6/12">
            {image ? (
              <img
                src={image?.original}
                alt="movie"
                className="object-cover rounded-l-md w-full h-full"
              />
            ) : (
              <div className="relative">
                <ShimmerThumbnail height={245} />
                <span className="absolute bottom-0 text-center w-full tracking-wider">
                  Poster Unavailable
                </span>
              </div>
            )}
          </div>

          <div className="relative w-6/12 flex flex-col gap-2">
            <h3 className="text-3xl font-bold tracking-wider ">{name}</h3>
            <p>Language : {language}</p>
            <ul className="flex gap-1 flex-wrap items-center ">
              <li>Genres : </li>
              {genres.map((genre) => (
                <li
                  className="bg-gray-300 rounded-sm px-1 py-[2px] text-sm"
                  key={genre}
                >
                  {genre}
                </li>
              ))}
            </ul>

            <span>Summary : {cleanedSummary}</span>

            <div
              className="flex gap-1 absolute bg-black text-white px-1  
              rounded-tr-md 
        items-center right-0 top-0"
            >
              <IoMdStar className="text-[#E2B616] text-2xl" />
              {rating.average ? (
                <span className="text-lg">{rating.average}</span>
              ) : (
                <span className="text-sm">Unavailable</span>
              )}
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="bg-black py-2 absolute bottom-1 right-1 text-[#E2B616] rounded-md w-full"
            >
              Book Show
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-whtie p-5 w-96 rounded-md  custom-shadow bg-white">
          <form className="flex flex-col gap-3 ">
            <h3 className="font-bold text-2xl  text-center">Movie Form</h3>
            <input
              className="px-2 py-2 rounded-md border-2 focus:outline-none"
              type="text"
              value={name}
            />
            <input
              className="px-2 py-2 rounded-md border-2 focus:outline-none"
              type="text"
              value={language}
            />
            <input
              className="px-2 py-2 rounded-md border-2 focus:outline-none"
              type="text"
              value={status}
            />
            <input
              className="px-2 py-2 rounded-md border-2 focus:outline-none"
              type="text"
              value={released && released}
            />
            <button
              className="bg-black py-2  text-[#E2B616] rounded-md w-full"
              onClick={() => setIsOpen(false)}
            >
              Back to Summary
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Summary;
