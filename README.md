# YouTube Clone React App

This project is a simplified YouTube-like web application built with React, Redux, and React Router. It allows users to browse popular videos, search with suggestions, and watch videos.

---

## Features

- Home page displaying the most popular videos
- Video watch page with detailed video information
- Sidebar navigation with toggle functionality
- Search input with autocomplete suggestions
- State management with Redux
- Routing with React Router

---

## Sidebar Functionality

- A dummy Sidebar includes toggle functionality to show or hide the menu.

---

## Performance Optimization

To improve efficiency and reduce the number of API calls, this project implements caching for search queries. When a user searches for a term, the app first checks the cache for existing results before making a new API call. This speeds up the search experience and helps stay within API rate limits.

---

## Technologies Used

- React
- Redux (with React-Redux)
- React Router DOM
- YouTube Data API v3
- Tailwind for styling

---

## API Endpoints Used

- Popular Videos API:
  Fetches the most popular videos in India.
  Example URL:
  https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&maxResults=50&chart=mostPopular&regionCode=IN&key=API_KEY

- Search Suggestions API:
  Provides autocomplete suggestions for search queries.
  Example URL:
  http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=QUERY

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository

2. Navigate to the project directory

3. Install dependencies with "npm install"

4. Create a .env file in the root of the project and add your Google API key:

" REACT_APP_GOOGLE_API_KEY=YOUR_API_KEY_HERE "

5. npm start
