import React from "react";

const relatedVideosDummyData = [
  {
    id: "a1b2c3d4",
    title: "React Tutorial for Beginners - Full Course",
    channel: "Code Academy",
    views: "1.2M views",
    timestamp: "2 days ago",
    duration: "1:15:32",
    thumbnail: "https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg",
  },
  {
    id: "e5f6g7h8",
    title: "Understanding Redux in 15 Minutes",
    channel: "Tech Simplified",
    views: "800K views",
    timestamp: "1 week ago",
    duration: "15:10",
    thumbnail: "https://i.ytimg.com/vi/poQXNp9ItL4/hqdefault.jpg",
  },
  {
    id: "i9j0k1l2",
    title: "React Router DOM Crash Course",
    channel: "Dev World",
    views: "450K views",
    timestamp: "3 weeks ago",
    duration: "22:45",
    thumbnail: "https://i.ytimg.com/vi/Law7wfdg_ls/hqdefault.jpg",
  },
  {
    id: "m3n4o5p6",
    title: "Tailwind CSS Crash Course for Beginners",
    channel: "Frontend Focus",
    views: "600K views",
    timestamp: "5 days ago",
    duration: "45:05",
    thumbnail: "https://i.ytimg.com/vi/dFgzHOX84xQ/hqdefault.jpg",
  },
  {
    id: "q7r8s9t0",
    title: "JavaScript ES6 Tutorial",
    channel: "JS Mastery",
    views: "900K views",
    timestamp: "2 weeks ago",
    duration: "30:20",
    thumbnail: "https://i.ytimg.com/vi/NCwa_xi0Uuc/hqdefault.jpg",
  },
  {
    id: "u1v2w3x4",
    title: "Build a YouTube Clone With React & Redux",
    channel: "Code with Sahil",
    views: "350K views",
    timestamp: "1 month ago",
    duration: "1:00:45",
    thumbnail: "https://i.ytimg.com/vi/K4wEI5zhHB0/hqdefault.jpg",
  },
  {
    id: "y5z6a7b8",
    title: "Advanced React Patterns",
    channel: "Dev Simplified",
    views: "120K views",
    timestamp: "3 days ago",
    duration: "28:30",
    thumbnail: "https://i.ytimg.com/vi/Tn6-PIqc4UM/hqdefault.jpg",
  },
  {
    id: "z9a0b1c2",
    title: "How to Debug React Apps",
    channel: "Frontend Masters",
    views: "250K views",
    timestamp: "4 weeks ago",
    duration: "18:15",
    thumbnail: "https://i.ytimg.com/vi/5deXB5QupYA/hqdefault.jpg",
  },
  {
    id: "d3e4f5g6",
    title: "CSS Grid vs Flexbox",
    channel: "Design Tips",
    views: "700K views",
    timestamp: "2 months ago",
    duration: "20:40",
    thumbnail: "https://i.ytimg.com/vi/jV8B24rSN5o/hqdefault.jpg",
  },
  {
    id: "h7i8j9k0",
    title: "Node.js Crash Course",
    channel: "Backend Bros",
    views: "1.5M views",
    timestamp: "6 days ago",
    duration: "35:55",
    thumbnail: "https://i.ytimg.com/vi/fBNz5xF-Kx4/hqdefault.jpg",
  },
  {
    id: "l1m2n3o4",
    title: "Deploy React App with Netlify",
    channel: "Dev Ops 101",
    views: "300K views",
    timestamp: "1 week ago",
    duration: "12:10",
    thumbnail: "https://i.ytimg.com/vi/71wSzpLyW9k/hqdefault.jpg",
  },
  {
    id: "p5q6r7s8",
    title: "TypeScript for Beginners",
    channel: "Code Tech",
    views: "850K views",
    timestamp: "5 days ago",
    duration: "50:25",
    thumbnail: "https://i.ytimg.com/vi/BwuLxPH8IDs/hqdefault.jpg",
  },
  {
    id: "t9u0v1w2",
    title: "Responsive Web Design Tutorial",
    channel: "DesignCode",
    views: "980K views",
    timestamp: "3 weeks ago",
    duration: "40:30",
    thumbnail: "https://i.ytimg.com/vi/srvUrASNj0s/hqdefault.jpg",
  },
  {
    id: "x3y4z5a6",
    title: "JavaScript Promises Explained",
    channel: "JS Nuggets",
    views: "1.1M views",
    timestamp: "2 months ago",
    duration: "19:00",
    thumbnail: "https://i.ytimg.com/vi/DHvZLI7Db8E/hqdefault.jpg",
  },
  {
    id: "b7c8d9e0",
    title: "CSS Animations for Beginners",
    channel: "Creative Coding",
    views: "450K views",
    timestamp: "1 month ago",
    duration: "14:45",
    thumbnail: "https://i.ytimg.com/vi/8dyh0m4DPP0/hqdefault.jpg",
  },
];

const RelatedVideos = () => {
  return (
    <div className="w-[360px] p-4 border-l border-gray-300 overflow-y-auto max-h-[calc(100vh-64px)]">
      <h3 className="text-lg font-semibold mb-4">Up Next</h3>
      {relatedVideosDummyData.map((video) => (
        <div
          key={video.id}
          className="flex mb-4 cursor-pointer hover:bg-gray-100 rounded-lg p-2"
        >
          <div className="relative flex-shrink-0 w-40 h-24">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="rounded-md object-cover w-full h-full"
            />
            <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
              {video.duration}
            </span>
          </div>
          <div className="ml-3 flex flex-col justify-between">
            <p className="text-sm font-semibold line-clamp-2">{video.title}</p>
            <p className="text-xs text-gray-600 mt-1">{video.channel}</p>
            <p className="text-xs text-gray-500">
              {video.views} • {video.timestamp}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedVideos;
