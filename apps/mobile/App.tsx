import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { HomeScreen } from './src/Screens/HomeScreen';

export default function App() {
  return (
    <View className='bg-zinc-900'>
      <StatusBar style="light" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </View>
  );
}

