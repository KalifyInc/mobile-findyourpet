import { StyleSheet } from 'react-native';
import { primaryColor } from '../../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 40
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  text: {
    paddingTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInputPhoto: {
    margin: 15,
    marginLeft: 100,
    marginRight: 100,
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
  },
  textInput: {
    marginTop: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    padding: 8
  },
  descricaoInput: {
    paddingBottom: 40,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  clearButton: {
    backgroundColor: '#bbbd4d',
  },
  sendButton: {
    backgroundColor: primaryColor,
  }
});


export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: '#D9D9D9',
    marginTop: 10,
    borderRadius: 10,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: 'black',
    paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    backgroundColor: '#D9D9D9',
    marginTop: 10,
    fontSize: 16,
    borderRadius: 50, 
    borderWidth: 1, 
    borderColor: '#bdc3c7', 
    color: 'black',
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});