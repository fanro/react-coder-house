import { Box, Button, Container, Input, useToast } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../services/config/firebase';
import { useNavigate } from 'react-router';
import Loading from '../components/Loading';

const Checkout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const toast = useToast();

  const handleSumbit = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      buyer: formState,
      order: cart,
      total: getTotalPrice(),
    };
    const cartCollection = collection(db, 'cart');
    addDoc(cartCollection, data)
      .then(({ id }) => {
        toast({
          title: 'Compra finalizada',
          description: `Gracias por tu compra ${formState.fullName}. Por cualquier reclamo indicar el numero de orden: ${id}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        clearCart();
        // reset form state
        setFormState({
          fullName: '',
          email: '',
          phoneNumber: '',
        });
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      {loading && <Loading />}

      {!loading && (
        <form onSubmit={(e) => handleSumbit(e)}>
          <Input
            type='text'
            placeholder='Nombre completo'
            isRequired
            value={formState.fullName}
            onChange={(e) =>
              setFormState({
                ...formState,
                fullName: e.target.value,
              })
            }
          />
          <Input
            type='text'
            placeholder='Correo electronico'
            isRequired
            value={formState.email}
            onChange={(e) =>
              setFormState({
                ...formState,
                email: e.target.value,
              })
            }
          />
          <Input
            type='text'
            placeholder='Numero de contacto'
            isRequired
            value={formState.phoneNumber}
            onChange={(e) =>
              setFormState({
                ...formState,
                phoneNumber: e.target.value,
              })
            }
          />

          <Box gap={2} display='flex' flexDirection='row'>
            <Button onClick={() => navigate(-1)}>Volver</Button>
            <Button type='submit'>Comprar</Button>
          </Box>
        </form>
      )}
    </Container>
  );
};

export default Checkout;
