import { ChakraProvider } from '@chakra-ui/react'
import ProductsScreen from './screens/ProductsScreen';

function App() {
  return (
    <ChakraProvider>
      <h1>frontend</h1>

      <ProductsScreen />
    </ChakraProvider>
  );
}

export default App;
