const Product = ({ character }) => {
  const { title } = character;
  return (
    <article className="Product">
      <div>{title}</div>
    </article>
  );
};

export default Product;
