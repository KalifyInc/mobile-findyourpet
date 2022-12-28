import React from 'react';
import { Image } from "react-native";
// import { Container, Title, TextVersion, styles } from './styles';
import { Text, View } from '../../components/Themed';

import { RootTabScreenProps } from '../../../../types';
import { styles } from './styles';

export default function InformationScreen ({ navigation }: RootTabScreenProps<'Information'>) {
  var currentYear = new Date().getFullYear();

  return(
    <View style={styles.container}>
      <Text style={styles.title}>FindYourPet</Text>
      <Text style={styles.text}>Versão 1.0.0</Text>
      <View style={styles.separator}>
        <Image source={require('../../../../assets/images/pet_icon_green.png')}></Image>
      </View>
      <Text style={styles.text}>2022 - {currentYear} Kalify Inc.</Text>
    </View>
  )
  
}
