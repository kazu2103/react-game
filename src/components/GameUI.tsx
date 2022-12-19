import { AspectRatio, Box, Center, Heading, HStack, Image, NativeBaseProvider, Stack, Text } from "native-base";
import { Component, useState } from "react"
import { StyleSheet, Touchable, TouchableHighlight, View } from "react-native";
import GameImage from "./GameImage";
import StoryUI from "./ui/StoryUI";

interface GameUIProps {

}

const GameUI = ({

}: GameUIProps): JSX.Element => {
  const [isBattle, setIsBattle] = useState<boolean>(false);

  return (
    <Stack
      direction="column"
      mb="2.5"
      mt="5"
      bg="white"
    >
      {/* Image */}
        <GameImage />
      { /* UI */
        isBattle && (
          <StoryUI />
        )
      }
      { /* Text */
        !isBattle && (
          <StoryUI />
        )
      }
      
    </Stack>
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