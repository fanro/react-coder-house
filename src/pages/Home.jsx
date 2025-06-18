import { useEffect, useState } from 'react';
import { getAllProducts } from '../services/products.service';
import ItemListContainer from '../components/ItemListContainer';
import Loading from '../components/Loading';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return <ItemListContainer products={products} />;
};

export default Home;
