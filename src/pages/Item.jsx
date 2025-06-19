import { useParams } from 'react-router';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Loading from '../components/Loading';
import { useGetItemFirestore } from '../hooks/useGetItemFirestore';

const Item = () => {
  const { id } = useParams();
  const { loading, item: product } = useGetItemFirestore('products', id);
  return loading ? <Loading /> : <ItemDetailContainer product={product} />;
};

export default Item;
