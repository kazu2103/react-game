import { Box } from "native-base";

export interface GameBackGroundProps {
  color: string;
  children: any;
}

const GameBackGround = ({
  color,
  children
}: GameBackGroundProps): JSX.Element => {

  return (
    <Box
      alignSelf="center"
      bg={color}
      width="100%"
      height="50%"
    >
      {children}
    </Box>

  );
};

export default GameBackGround;