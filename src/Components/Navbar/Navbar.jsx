import { Flex, Icon, Text,Image} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <Flex align="center">
      <Image src="/src/assets/images/shoesicon.png"     color="Black"/>
      <Text fontSize="2xl" fontWeight="bold" color="Black" ml={2} fontFamily="">
        El-Shoes
      </Text>
      <Icon as={FaBars} fontSize="24px" ml="auto" color="Black" />
    </Flex>
  );
};

export { Navbar };
