export default function Book(args) {
  return (
    <>
      <h1>{args.name}</h1>
      <img
        src={args.imageUrl}
        alt={args.name}
        style={{ height: "100px", width: "75px" }}
      />
      <h2>Rs.{args.price}</h2>
      <h3>Author {args.author}</h3>
      <h4>Rating: {args.rating}</h4>
    </>
  );
}
