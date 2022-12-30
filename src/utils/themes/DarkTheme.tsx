import { Theme } from "@react-navigation/native";
import { primaryColor } from "../Colors";

const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: primaryColor,
    background: 'rgb(19, 19, 19)',
    card: 'rgb(18, 18, 18)',
    text: 'rgb(229, 229, 231)',
    border: 'rgb(39, 39, 41)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default DarkTheme;