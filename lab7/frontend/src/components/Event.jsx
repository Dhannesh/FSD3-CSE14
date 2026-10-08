const MyButton = () => {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <button className="bg-black text-white rounded p-3" onClick={handleClick}>
      Click Me
    </button>
  );
};

const Event = () => {
  return (
    <div>
      <MyButton />
    </div>
  );
};
export default Event;
