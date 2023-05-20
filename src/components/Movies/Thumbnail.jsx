import Image from "next/image";
import React from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";

function Thumbnail({ movies }) {
  return (
    <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        className="rounded"
        height={1080}
        width={1920}
        alt="picture"
        src={`http://192.168.1.115:8000/${movies.image_path}`}
      />
      <div className="p-2">
        <h1 className="mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {movies.title}
        </h1>
        <p className="truncate max-w-md text-gray-500">{movies.description}</p>
        <div className="flex items-center opacity-0 group-hover:opacity-100">
          <p>{movies.publish_day}</p>
          <ThumbUpIcon className="h-5 mx-2" />
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
