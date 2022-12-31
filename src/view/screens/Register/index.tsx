import * as React from 'react';

import { 
  KeyboardAvoidingView, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  Button
} from 'react-native';

import RNPickerSelect from "react-native-picker-select";

import { pickerSelectStyles, styles } from './styles';
import { Text, View } from '../../components/Themed';

import userSignInViewModel from '../../../viewModel/userRegisterViewModel';

export default function RegisterScreen() {
  const { 
    petPhoto,
    setPetPhoto,
    name,
    setName,
    condition,
    setCondition,
    localization,
    setLocalization,
    description,
    setDescription,
    telephoneNumber,
    setTelephoneNumber,
    handleSignIn,
    cleanRegister
  } = userSignInViewModel();

  return (
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>CADASTRAR PETS</Text>
          </View>      

          <View style={styles.container}>
            <Text style={styles.text}>FOTO DO ANIMAL</Text>
            <TouchableOpacity onPress={image => setPetPhoto(image)} style={styles.textInputPhoto}>
                <Image source={require('../../../../assets/images/camera.png')}/>
            </TouchableOpacity>

            <Text style={styles.text}>NOME DO ANIMAL</Text>
            <TextInput 
            placeholder='amora'
              value={name}
              onChangeText={text=> setName(text)}
              maxLength={10}
              style={styles.textInput}
            ></TextInput>

            <Text style={styles.text}>QUAL É A SITUAÇÃO?</Text>
              <RNPickerSelect
                placeholder={{ label: 'Selecione uma opção', value: null }}
                onValueChange={(condition) => setCondition(condition)}
                items={[
                  { label: "Perdido", value: "Perdido" },
                  { label: "Encontrado", value: "Encontrado" },
                  { label: "Adoção", value: "Adoção" },
                ]}
                  style={pickerSelectStyles}
              />
            
            <Text style={styles.text}>BAIRRO/CIDADE DO ANIMAL</Text>
            <TextInput 
              value={localization}
              onChangeText={text=> setLocalization(text)}
              style={styles.textInput}
              ></TextInput>

            <Text style={styles.text}>DESCRIÇÃO</Text> 
              <TextInput 
              value={description}
              onChangeText={text=> setDescription(text)}
              maxLength={40}
              multiline={true}
              style={[styles.textInput, styles.descricaoInput]}
              ></TextInput>
            
            <Text style={styles.text}>NÚMERO DE TELEFONE</Text>
              <TextInput 
              value={telephoneNumber}
              onChangeText={text=> setTelephoneNumber(text)}
              style={styles.textInput}
              ></TextInput>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={cleanRegister}>
              <Text>LIMPAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.sendButton]} onPress={handleSignIn}>
              <Text>ENVIAR</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      
  )
}
