import { registerRootComponent } from 'expo';
import { NativeBaseProvider } from 'native-base';
import GameUI from './components/GameUI';

export default function App() {
  return (
    <NativeBaseProvider>
      <GameUI />
    </NativeBaseProvider>
  );
};

registerRootComponent(App);