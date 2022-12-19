import { Box, Button, Text } from "native-base";

export interface GameButtonGroupProps {
  children: JSX.Element;
}

const GameButtonGroup = ({
  children
}: GameButtonGroupProps): JSX.Element => {

  return (
      <Button.Group
        color="black"
        borderColor="gray.100"
        borderWidth="1"
      >
        {
          children
        }
      </Button.Group>

  );
};

export default GameButtonGroup;