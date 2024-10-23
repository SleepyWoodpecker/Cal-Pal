import { Button } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";

const App = () => {
  return (
    <div>
      <h1>HEllo world</h1>
      <HStack>
        <Button>Click me</Button>
        <Button>Dont click me :(</Button>
      </HStack>
    </div>
  );
};

export default App;
