// import { Box, ChakraProvider } from '@chakra-ui/react';
// import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';

// const App = () => {
//   return (
//     <ChakraProvider>
//       <Box height='100vh'>
//         <NavBar />
//         <ItemListContainer greeting='Bienvenidos a la tienda oficial' />
//       </Box>
//     </ChakraProvider>
//   );
// };

// export default App;

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import MainLayout from './layouts/MainLayout';
import ItemListContainer from './components/ItemListContainer';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const App = () => {
  return (
    <ChakraProvider>
      {/* <ItemListContainer /> */}
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
