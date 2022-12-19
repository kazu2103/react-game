import { Command } from "../domains/Command";
import { AspectRatio, Box, Center, Heading, HStack, Image, NativeBaseProvider, Stack, Text } from "native-base";
import { Component, useState } from "react"
import { StyleSheet, Touchable, TouchableHighlight, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import PictureDisplay from "../screens/PictureDisplay";
import StoryUI from "../screens/StoryUI";

interface GameUIProps {

}

const GameUI = ({

}: GameUIProps): JSX.Element => {
  const [isBattle, setIsBattle] = useState<boolean>(false);
  const commands= [
    new Command("command1", () => {console.log("command1")}),
    new Command("command2", () => {console.log("command2")}),
  ]

  return (
    <View>
      <Stack
        direction="column"
        mb="2.5"
        mt="5"
        bg="white"
      >
        {/* Image */}
          <PictureDisplay />
        { /* UI */
          isBattle && (
            <StoryUI />
          )
        }
        { /* Text */
          !isBattle && (
            <HomeScreen
              commands={commands}
            />
          )
        }
        
      </Stack>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GameUI;