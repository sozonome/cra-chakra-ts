import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      alignItems="center"
      textAlign="center"
      minHeight="80vh"
      gridGap={8}
    >
      <Box>
        <Heading>Create React App</Heading>
        <Text>Chakra-UI TypeScript template</Text>
      </Box>
    </Flex>
  );
};

export default HomePage;
