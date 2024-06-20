import { useState, useEffect } from "react";
import { Container, VStack, Heading, Text, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const mockCourses = [
  { id: 1, title: "Introduction to JavaScript", description: "Learn the basics of JavaScript, the most popular programming language in web development.", image: "/images/js-course.png" },
  { id: 2, title: "Advanced React", description: "Dive deep into React and learn advanced concepts and patterns.", image: "/images/react-course.png" },
  { id: 3, title: "Python for Data Science", description: "Master Python and its libraries to become a data science expert.", image: "/images/python-course.png" },
];

const Courses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const storedEnrollments = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(storedEnrollments);
  }, []);

  const handleEnroll = (courseId) => {
    const updatedEnrollments = [...enrolledCourses, courseId];
    setEnrolledCourses(updatedEnrollments);
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedEnrollments));
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Available Courses
        </Heading>
        {mockCourses.map((course) => (
          <Box key={course.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Flex align="center">
              <Image src={course.image} alt={course.title} boxSize="100px" objectFit="cover" mr={5} />
              <Box>
                <Heading fontSize="xl">{course.title}</Heading>
                <Text mt={4}>{course.description}</Text>
                {enrolledCourses.includes(course.id) ? (
                  <Button leftIcon={<FaCheckCircle />} colorScheme="green" mt={4} isDisabled>
                    Enrolled
                  </Button>
                ) : (
                  <Button colorScheme="teal" mt={4} onClick={() => handleEnroll(course.id)}>
                    Enroll
                  </Button>
                )}
              </Box>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Courses;