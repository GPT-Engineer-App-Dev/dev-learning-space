import React, { useState } from 'react';
import { Box, Button, VStack, Heading } from '@chakra-ui/react';
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here');

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      eval(code);
    } catch (error) {
      console.error('Error executing code:', error);
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading as="h2" size="lg">Code Editor</Heading>
        <Editor
          height="60vh"
          defaultLanguage="javascript"
          defaultValue="// Write your code here"
          onChange={handleEditorChange}
          value={code}
        />
        <Button colorScheme="teal" onClick={runCode}>Run Code</Button>
      </VStack>
    </Box>
  );
};

export default CodeEditor;