import React from "react";
import Thumbnail from "./Thumbnail";

function Movies({ result }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
      {result.map((res) => (
        <Thumbnail key={res.id} movies={res} />
      ))}
    </div>
  );
}

export default Movies;
