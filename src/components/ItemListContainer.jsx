import { Flex } from '@chakra-ui/react';

const ItemListContainer = ({ greeting }) => {
  return (
    <Flex
      fontSize='2rem'
      height='95%'
      width='100vw'
      alignItems='center'
      justifyContent='center'
    >
      {greeting}
    </Flex>
  );
};

export default ItemListContainer;
