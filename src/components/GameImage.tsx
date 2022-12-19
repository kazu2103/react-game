import { Box } from "native-base";
import { Image, View } from "react-native";

interface GameImageProps {
  
}

const GameImage = ({}: GameImageProps): JSX.Element => {


  return (
    <Box
      alignSelf="center"
      bg="white"
      width="100%"
      height="50%"
    >
      <Image source={require('../../assets/images/character_game_mimic.png')} />
    </Box>
  )
};

export default GameImage;