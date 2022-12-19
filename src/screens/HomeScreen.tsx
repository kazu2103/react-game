import GameBackGround from "../components/BackGround";
import GameButtonGroup from "../components/GameButton";
import { Command } from "../domains/Command";
import { Box, Button, View } from "native-base";
import PictureDisplay from "./PictureDisplay";

interface HomeScreenProps {
  commands: Command[];
};

const HomeScreen = ({ commands }: HomeScreenProps): JSX.Element => {
  return (
    <View>
      <PictureDisplay />

      <GameBackGround
        color="black"
      >
        {
          commands.map(command => {(
            <GameButtonGroup>
              <Button onPressOut={command.action}>{command.name}</Button>
            </GameButtonGroup>  
            )})
        }
      </GameBackGround>
    </View>
  )
};

export default HomeScreen;
