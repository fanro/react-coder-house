import { useParams } from 'react-router';
import ItemListContainer from '../components/ItemListContainer';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/config/firebase';
import Loading from '../components/Loading';
import { Alert, AlertIcon, Box } from '@chakra-ui/react';

const Category = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState({});

  useEffect(() => {
    const categoryQuery = query(
      collection(db, 'categories'),
      where('slug', '==', id)
    );

    getDocs(categoryQuery)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategory(data[0]);
      })
      .catch((e) => console.error(e));
  }, [id]);

  useEffect(() => {
    const productsQuery = query(
      collection(db, 'products'),
      where('category', '==', id)
    );

    getDocs(productsQuery)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;

  if (products.length === 0) {
    return (
      <Box p={6} mx='auto' h={'90vh'}>
        <Alert status='info' borderRadius='md' background={'gray.100'}>
          <AlertIcon />
          {`Por el momento no hay productos disponibles en la categoría ${category.name}`}
        </Alert>
      </Box>
    );
  }

  return <ItemListContainer products={products} />;
};

export default Category;
