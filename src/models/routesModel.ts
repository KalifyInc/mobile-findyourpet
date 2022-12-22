import { NativeStackNavigationProp } from "@react-navigation/native-stack"

// faz a tipagem das rotas 
export type propsNavigationStack = {
  Home: undefined;
  Register: undefined;
  Maps: undefined;
  Information: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>