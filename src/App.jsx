import { Box, ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <ChakraProvider>
      <Box height='100vh'>
        <NavBar />
        <ItemListContainer greeting='Bienvenidos a la tienda oficial' />
      </Box>
    </ChakraProvider>
  );
};

export default App;
