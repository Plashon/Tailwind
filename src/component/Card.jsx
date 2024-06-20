import React from "react";
const Card = ({ img, title, type }) => {

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-2">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt={title}
          className="rounded-xl h-fit"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{type}</p>
        <div className="card-actions">
          <button className="btn btn-primary w-200 my-1">Visit</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
