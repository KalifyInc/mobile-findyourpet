import { useState } from 'react';
import { Alert } from 'react-native';

export function userSignInViewModel() {
  const [petPhoto, setPetPhoto] = useState<any>(null);
  const [name, setName] = useState<string>('');
  const [condition, setCondition] = useState<string>('');
  const [localization, setLocalization] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [telephoneNumber, setTelephoneNumber] = useState<string>('');


  const cleanRegister = () => {

  }
  
  const handleSignIn = async () => {
      // await auth()
      // .createUserWithEmailAndPassword(email, password)
      // .then(userCredentials => {
      //   const user = userCredentials.user;
      //   console.log('Register with: ', user.email);
      //   Alert.alert('User account created & signed in!');
      //   setEmail('');
      //   setPassword('');
      // })
      // .catch(error => {
      //   if (error.code === 'auth/email-already-in-use') {
      //     Alert.alert('That email address is already in use!');
      //   }
      
      //   if (error.code === 'auth/invalid-email') {
      //     Alert.alert('That email address is invalid!');
      //   }
      //   // console.error(error);
      // });  
  }

  return {
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
    cleanRegister,
  };
}


export default userSignInViewModel;



