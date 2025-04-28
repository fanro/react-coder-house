import { Flex } from '@chakra-ui/react';
import logo from '../assets/img/logo.jpg';

const ItemListContainer = ({ greeting }) => {
  return (
    <Flex direction='column' alignItems='center' justifyContent='center'>
      <h1>{greeting}</h1>
      <img src={logo} className='logo react' alt='React logo' />
    </Flex>
  );
};

export default ItemListContainer;
