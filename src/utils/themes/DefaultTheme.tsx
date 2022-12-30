import { Theme } from "@react-navigation/native";
import { primaryColor } from "../Colors";

const DefaultTheme: Theme = {
  dark: false,
  colors: {
    primary: primaryColor,
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
  },
};

export default DefaultTheme;
