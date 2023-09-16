import { Box, Center, Heading, Text, Image } from '@chakra-ui/react';

const _Card = () => {
  return (
    <Box flex="1" bg="rgb(222, 222, 222)" position="relative">
      <Center h="100%">
        <Box textAlign="center">

          <Heading as="h3" size="lg" color="Black" mb={2}>
            Welcome to El-Shoes
          </Heading>
          <Text color="gray" fontSize="lg">
            For a better experience with your shoes!
          </Text>
          <Image
            src="/src/assets/images/shoes.png"
            alt="Imagen de El-Shoes"
             
            objectFit="cover"
           
          />
        </Box>
      </Center>
    </Box>
  );
};

export { _Card };
