import ItemListContainer from '../components/ItemListContainer';
import Loading from '../components/Loading';
import { useGetFirestoreDocs } from '../hooks/useGetFirestoreDocs';

const Home = () => {
  const { loading, error, items: products } = useGetFirestoreDocs('products');

  if (loading) return <Loading />;

  if (error) return <>Error</>;

  return <ItemListContainer products={products} />;
};

export default Home;
