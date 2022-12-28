import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import useColorScheme from '../hooks/useColorScheme';

import HomeScreen from '../view/screens/Home';
import RegisterScreen from '../view/screens/Register';
import MapsScreen from '../view/screens/Maps';
import InformationScreen from '../view/screens/Information';
import { RootTabParamList, RootTabScreenProps } from '../../types';


const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerTitle: 'FindYourPet',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 24,
        },
        tabBarActiveTintColor: '#30AD80',
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <View>
            <Image source={require('../../assets/images/pet_icon.png')} 
            resizeMode="contain"
            style={{ 
            width: 27,
            height: 27,
              tintColor: color
            }}></Image></View>
        })}
      />
      <BottomTab.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Register',
          tabBarIcon: ({ color }) => <AntDesign name="addfile" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapsScreen}
        options={{
          title: 'Maps',
          tabBarIcon: ({ color }) => <Ionicons name="md-location-sharp" size={26} color={color} />,
        }}
        
      />
      <BottomTab.Screen
        name="Information"
        component={InformationScreen}
        options={{
          title: 'Information',
          tabBarIcon: ({ color }) => <Ionicons name="information-circle-outline" size={32} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
