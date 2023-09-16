import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { Navbar } from './Components/Navbar/Navbar';
import { Login } from './Components/Login/Login';
import { _Card } from './Components/Login/_Card';

function App() {
  return (
    <ChakraProvider> 
      <Flex h="100vh"   >
        <_Card  />
        <Flex direction="column" flex="1">
          <Box bg="rgb(244, 244, 244)" color="white"  p={4}>
            <Navbar  />
          </Box>
          <Box flex="1" bg="rgb(244, 244, 244)">
            <Login />
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
