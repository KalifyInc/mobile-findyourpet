import React from 'react';
import { Image } from "react-native";
import { Container, Title, TextVersion, Text } from './styles';
import { RootTabScreenProps } from '../../../../types';

export default function InformationScreen ({ navigation }: RootTabScreenProps<'Information'>) {
  var currentYear = new Date().getFullYear();

  return(
    <Container>
      <Title>FindYourPet</Title>
      <TextVersion>Versão 1.0.0</TextVersion>
      {/* <Image source={require('../../../assets/images/pet_icon_green.png')}></Image> */}
      <Text>2022 - {currentYear} Kalify Inc.</Text>
    </Container>
  )
  
}