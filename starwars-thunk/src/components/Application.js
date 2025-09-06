import Products from './Products';
import FetchProducts from './FetchProducts';

export const Application = () => {
  return (
    <div className="Application">
      <h1>Random Products</h1>
      <FetchProducts />
      <Products />
    </div>
  );
};
