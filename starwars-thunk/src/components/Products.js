import { useSelector } from 'react-redux';
import Product from './Product';
import { Loading } from './Loading';

export const Products = () => {
  const products = useSelector((state) => state.products.data);
  const loading = useSelector((state) => state.products.loading);

  return (
    <section className="Products">
      {loading && <Loading />}
      {products.map((character) => (
        <Product key={character.id} character={character} />
      ))}
    </section>
  );
};

export default Products;
