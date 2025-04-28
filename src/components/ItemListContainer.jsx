import { Flex } from '@chakra-ui/react';
import logo from '../assets/img/logo.jpg';
import apu from '../assets/img/apu_2.jpg';

const ItemListContainer = ({ greeting }) => {
  return (
    <Flex direction='column' alignItems='center' justifyContent='center'>
      <h1>{greeting}</h1>
      <img src={logo} style={{ width: '300px', height: '100px' }} alt='logo' />
      <img src={apu} className='apu' alt='apu' />
    </Flex>
  );
};

export default ItemListContainer;
