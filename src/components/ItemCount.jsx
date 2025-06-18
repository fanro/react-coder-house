import { Box, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemCount = ({ product }) => {
  const { addProductToCart, removeProductFromCart, checkIfProductExists } =
    useContext(CartContext);

  return (
    <Box gap={2} display='flex' flexDirection='row'>
      {checkIfProductExists(product) && (
        <Button
          disabled={!checkIfProductExists(product)}
          onClick={() => {
            removeProductFromCart(product);
          }}
        >
          Quitar Item
        </Button>
      )}

      <Button onClick={() => addProductToCart(product)}>Agregar Item</Button>
    </Box>
  );
};

export default ItemCount;
