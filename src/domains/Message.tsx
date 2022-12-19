export interface MessageType {
  text: string;
  textSpeedRate: number;
  color: typeof MessageColor[number];
  speaker: string | 'system';
};

export const MessageColor = ['default', 'black', 'red'] as const;

export const messages: Array<MessageType> = [
  {
    text: 'Test Message',
    textSpeedRate: 1,
    color: 'default',
    speaker: 'system',
  },
  {
    text: 'Speak test test',
    textSpeedRate: 1,
    color: 'default',
    speaker: 'tester',
  },

];

export const messageTextBuilder = (message: MessageType) => {
  const text = message.speaker === 'system' 
    ? message.text
    : `${message.speaker}「${message.text}」`;

  return text;
}