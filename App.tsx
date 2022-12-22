import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import { useColorScheme } from 'react-native';
import Routes from './src/routes/routes';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  
  if (!isLoadingComplete) {
    return console.log('....')
    // <LoadingPage navigation='Home' route={undefined} />
  } else {
    return (
      <SafeAreaProvider>
        <Routes colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
