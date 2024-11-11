function Card({ name, children }) {
  return (
    <div>
      <span>{name}</span>
      <span>{children}</span>
    </div>
  );
}

export default Card;
