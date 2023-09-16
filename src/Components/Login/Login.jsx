import { Box,Flex, Center, VStack, Heading, Input, Button, Text } from '@chakra-ui/react';
import './Login.css';
const Login = () => {
  return (
    <Box flex="1" bg="rgb(244, 244, 244)">
      <Center h="100%">
        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="xl" mb={4}>
            Sign Up
          </Heading>
          <Input type="text" placeholder="Email or Phone" mb={2} />
          <Input type="text" placeholder="Full Name" mb={2} />
          <Input type="text" placeholder="Password" mb={2} />
          <Button colorScheme="blue" width="100%" mb={4} bg="#171717"> {/* Cambiado el color aquí */}
            Sign Up
          </Button>
          <Text fontSize="sm" mt={4} color={'gray'}>
      <s className='hidden-line'>
        <span className='hidden-text'>__________</span>
      </s> if feeling lazy?
      <s className='hidden-line'>
        <span className='hidden-text'>__________</span>
      </s>
    </Text>
          <Flex justify="space-between" gap={2}>
            <Button colorScheme="facebook" flex="1">
              Facebook
            </Button>
            <Button bg="rgb(104, 170, 251)" textColor={'white'}  flex="1">
              Google
            </Button>
          </Flex>
          <Text fontSize="sm" mt={4} color={'gray'}>
            Already have an account? <Text fontWeight="bold" as="strong">Sign In</Text>
          </Text> 

        </VStack>
      </Center>
    </Box>
  );
};

export { Login };
