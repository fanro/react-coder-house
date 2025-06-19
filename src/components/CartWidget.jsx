import { Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router';

const CartWidget = () => {
  const { getTotalCount } = useContext(CartContext);
  const totalCount = getTotalCount();

  const navigate = useNavigate();

  return (
    <Flex
      alignItems='center'
      onClick={() => navigate('/cart')}
      cursor={'pointer'}
    >
      <CiShoppingCart size={30} /> {totalCount}
    </Flex>
  );
};

export default CartWidget;
