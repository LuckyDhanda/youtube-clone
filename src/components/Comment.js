const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex flex-col gap-2 border-b-2 border-gray-300 p-4 rounded-lg bg-slate-50">
      <div className="flex items-center gap-2 mb-2">
        <img
          src="http://localhost:3000/static/media/user-icon.89b7b4c732932e09ae8c.png"
          alt="user"
          className="rounded-full w-10 h-10"
        />
        <span className="font-bold">{name}</span>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Comment;
