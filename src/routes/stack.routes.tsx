import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotFoundScreen from '../view/screens/NotFoundScreen';
import { RootStackParamList } from '../../types';
import BottomTabNavigator from './bottomtab.routes';

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
