import GameBackGround from "../components/BackGround";
import { Image, View } from "react-native";

interface PictureDisplayProps {
  
}

const PictureDisplay = ({}: PictureDisplayProps): JSX.Element => {


  return (
    <GameBackGround
      color="white"
    >
      {/* <Image source={require('../../assets/images/character_game_mimic.png')} /> */}
    </GameBackGround>
  )
};

export default PictureDisplay;