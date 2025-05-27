import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import { FiThumbsUp, FiThumbsDown, FiShare2, FiDownload } from "react-icons/fi";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoData, setVideoData] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
        );
        const data = await response.json();
        setVideoData(data.items?.[0]);
      } catch (error) {
        console.error("Failed to fetch video details:", error);
      }
    };

    if (videoId) fetchVideoDetails();
  }, [videoId]);

  if (!videoId)
    return <div className="text-center mt-10">No video selected</div>;

  const { snippet, statistics } = videoData || {};
  const { title, channelTitle, publishedAt, description, channelId } =
    snippet || {};

  // Format publish date (optional, used for small print under channel name)
  const publishDate = new Date(publishedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Helper to calculate time ago from publish date
  function getTimeAgo(dateString) {
    const now = new Date();
    const publishedDate = new Date(dateString);
    const seconds = Math.floor((now - publishedDate) / 1000);

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
      }
    }
    return "Just now";
  }

  return (
    <div className="flex flex-col p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Video + Info + Comments */}
        <div className="flex-1 max-w-[970px]">
          {/* Video Player */}
          <div className="relative pb-[56.25%] h-0 mb-4 rounded-xl overflow-hidden shadow-lg">
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

          {/* Video Info Section */}
          {videoData && (
            <>
              <h1 className="text-xl md:text-xl font-bold mb-3">{title}</h1>

              {/* Channel info + Subscribe + Like/Dislike/Share/Download */}
              <div className="flex items-center justify-between mb-4">
                {/* Channel info + Subscribe */}
                <div className="flex items-center gap-4">
                  <img
                    src={`https://yt3.ggpht.com/ytc/AKedOLSpQl01mhOySzK21ZQxvK9sQXrs4-4q8EYMEoYc=s88-c-k-c0x00ffffff-no-rj`}
                    alt={`${channelTitle} thumbnail`}
                    className="rounded-full w-14 h-14"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {channelTitle}
                    </p>
                    <p className="text-sm text-gray-600">{publishDate}</p>
                  </div>
                  <button className="bg-black hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-3xl ml-6">
                    Subscribe
                  </button>
                </div>

                {/* Like, Dislike, Share, Download */}
                <div className="flex items-center gap-4">
                  <div className="flex bg-gray-100 rounded-3xl p-2">
                    <button className="flex items-center gap-2  px-3 transition text-black">
                      <FiThumbsUp size={20} />{" "}
                      {Number(statistics.likeCount).toLocaleString()}
                    </button>
                    <button className="flex items-center gap-2   px-3 transition text-black border-l-2">
                      <FiThumbsDown size={20} />
                    </button>
                  </div>

                  <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-3xl transition text-black">
                    <FiShare2 size={20} /> Share
                  </button>
                  <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-3xl transition text-black">
                    <FiDownload size={20} /> Download
                  </button>
                </div>
              </div>

              {/* Description with toggle */}
              <div className="bg-gray-100 p-3 rounded-md">
                {/* Views and "time ago"  */}
                <div className="text-black font-bold mb-2">
                  <span>
                    {Number(statistics.viewCount).toLocaleString()} views
                  </span>{" "}
                  • <span>{getTimeAgo(publishedAt)}</span>
                </div>
                <div className=" text-gray-800 whitespace-pre-wrap">
                  {description &&
                  !showFullDescription &&
                  description.length > 200
                    ? description.slice(0, 200) + "..."
                    : description}
                  {description && description.length > 200 && (
                    <button
                      onClick={() =>
                        setShowFullDescription(!showFullDescription)
                      }
                      className="text-black font-bold hover:underline ml-2"
                    >
                      {showFullDescription ? "Show less" : "Show more"}
                    </button>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Comments */}
          <CommentsContainer />
        </div>

        {/* Right Side: Recommendations */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Watch;
