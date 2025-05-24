import React from "react";
import CommentList from "./CommentList";

function CommentsContainer() {
  const commentsData = [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      replies: [
        {
          id: 11,
          name: "Jane Doe",
          text: "Nested reply example.",
          replies: [
            {
              id: 12,
              name: "Alan Smith",
              text: "Another level deep!",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Alice",
      text: "Second top-level comment",
    },
    {
      id: 3,
      name: "Bob",
      text: "Third comment here",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 p-5">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
}

export default CommentsContainer;
