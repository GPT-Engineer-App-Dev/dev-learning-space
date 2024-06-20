import { Container, VStack, Heading, Text, Button, Box, Image } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to CodeMaster
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your ultimate platform to learn coding online. Start your journey with us today!
        </Text>
        <Box boxSize="sm">
          <Image src="/images/learning-platform.png" alt="Learning Platform" />
        </Box>
        <VStack spacing={4}>
          <Button leftIcon={<FaCode />} colorScheme="teal" size="lg">
            Start Learning
          </Button>
          <Button leftIcon={<FaLaptopCode />} colorScheme="blue" size="lg">
            Browse Courses
          </Button>
          <Button leftIcon={<FaChalkboardTeacher />} colorScheme="purple" size="lg">
            Meet Our Instructors
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;