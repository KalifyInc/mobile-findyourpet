import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';
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
    handleSignIn
  } = userSignInViewModel();

  return (
      <KeyboardAvoidingView>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>CADASTRAR PETS</Text>
        </View>      

        <View style={styles.container}>
          <Text style={styles.text}>FOTO DO ANIMAL</Text>
          <TextInput 
            value={petPhoto}
            onChangeText={text=> setPetPhoto(text)}
            style={styles.textInput}
          ></TextInput>

          <Text style={styles.text}>NOME DO ANIMAL</Text>
          <TextInput 
            value={name}
            onChangeText={text=> setName(text)}
            maxLength={10}
            style={styles.textInput}
          ></TextInput>

          <Text style={styles.text}>QUAL É A SITUAÇÃO?</Text>
          <TextInput 
            value={condition}
            onChangeText={text=> setCondition(text)}
            style={styles.textInput}
          ></TextInput>
          
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
            style={styles.textInput}
            ></TextInput>
          
          <Text style={styles.text}>NÚMERO DE TELEFONE</Text>
            <TextInput 
            value={telephoneNumber}
            onChangeText={text=> setTelephoneNumber(text)}
            style={styles.textInput}
            ></TextInput>
        </View>
        <View style={styles.containerTitle}>
          <TouchableOpacity onPress={handleSignIn}>
            <Text>ENVIAR</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
  )
}

