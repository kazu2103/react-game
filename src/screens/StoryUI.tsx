import { Box, Button, Text } from "native-base";
import { useState } from "react";
import { TouchableHighlight } from "react-native";
import { messages, messageTextBuilder, MessageType } from "../domains/Message";



const StoryUI = (): JSX.Element => {
  let uiMessages = [...messages];
  const defaultMessage: MessageType = {
    text: 'completed',
    textSpeedRate: 1,
    color: 'default',
    speaker: 'system'
  };

  const [message, setMessage] = useState(uiMessages.shift() || defaultMessage);

  const handlePress = () => {
    console.log('touched');
    console.log('%cStoryUI.tsx line:22 uiMessages', 'color: #007acc;', uiMessages);
    const message = uiMessages.shift() || defaultMessage;
    setMessage(message);
  }

  const handleReset = () => {
    console.log('reset');
    uiMessages = [...messages];
  }

  return (
    <TouchableHighlight
      onPress={handlePress}
    >
      <Box
        alignSelf="center"
        bg="black"
        width="100%"
        height="50%"
      >

        <Text
          fontSize="md"
          fontWeight="medium"
          color="white"
          letterSpacing="lg"
        >
          {messageTextBuilder(message)}
        </Text>
        <Text
          fontSize="md"
          fontWeight="medium"
          color="white"
          letterSpacing="lg"
        >
          {uiMessages.join(',')}
        </Text>
        <Button onPress={handleReset}>
          reset
        </Button>
      </Box>
    </TouchableHighlight>
  );
}

export default StoryUI;