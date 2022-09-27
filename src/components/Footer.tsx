import { Flex, Link as ChakraLink, Text } from '@chakra-ui/react';

export const Footer = () => (
  <Flex as="footer" py="8rem">
    <Text>
      Feito com ❤️ por{' '}
      <ChakraLink href="https://github.com/Azzyew" isExternal>
        Laisa Costa
      </ChakraLink>
    </Text>
  </Flex>
);
