import React, { useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const Watch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Content: Video + Comments */}
        <div className="flex-1 max-w-[1020px]">
          <div className="relative pb-[56.25%] h-0 mb-4 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video Title */}
          <h2 className="text-xl font-semibold mb-4">Video Title </h2>

          {/* Comments Section */}
          <CommentsContainer />
        </div>

        {/* Right Side: Recommendations */}
      </div>
    </div>
  );
};

export default Watch;
