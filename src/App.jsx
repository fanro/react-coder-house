import './App.css';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <h1 style={{ backgroundColor: 'red' }}>Hello World!</h1>
    </ChakraProvider>
  );
}

export default App;
