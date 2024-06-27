import React from "react";

const Card = ({ img, title, type }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl m-3 h-96 " id="card">
      <figure>
        <img src={img} alt={title} className="rounded-xl h- w-96 h-64" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{type}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Visit</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
