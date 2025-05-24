import React from "react";

const VideoCard = (props) => {
  if (!props.videoInfo) {
    return null;
  }
  // console.log(props.videoInfo);
  const { snippet, statistics } = props.videoInfo;

  const daysAgo = Math.floor(
    (new Date() - new Date(snippet.publishedAt)) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="m-2 p-2 w-80 hover:bg-gray-100  cursor-pointer ">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={snippet.thumbnails.medium.url}
      />
      <p className="font-bold">{snippet.title}</p>
      <p className="text-gray-700">{snippet.channelTitle}</p>
      <p className="text-gray-700">
        <span>{(statistics.viewCount / 1000000).toFixed(1)}M views</span>
        <span className="mx-1">.</span>
        <span>
          {daysAgo === 0
            ? "Today"
            : `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`}
        </span>
      </p>
    </div>
  );
};

export default VideoCard;
