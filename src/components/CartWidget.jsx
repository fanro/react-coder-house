import { Flex } from '@chakra-ui/react';
import { CiShoppingCart } from 'react-icons/ci';

const CartWidget = () => {
  return (
    <Flex alignItems='center'>
      <CiShoppingCart size={30} /> 30
    </Flex>
  );
};

export default CartWidget;
