import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import DarkTheme from '../utils/themes/DarkTheme';
import DefaultTheme from '../utils/themes/DefaultTheme';

import LinkingConfiguration from './LinkingConfiguration';
import StackNavigator from './stack.routes';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}
