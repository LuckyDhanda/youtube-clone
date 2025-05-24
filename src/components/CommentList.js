import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <div className="pl-5 border-l-2 border-gray-300">
      {comments.map((comment) => (
        <div key={comment.id} className="mb-4">
          <Comment data={comment} />
          {comment.replies && comment.replies.length > 0 && (
            <CommentList comments={comment.replies} />
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
