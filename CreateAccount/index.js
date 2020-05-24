import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { } from './styles';

import { AuthContext } from '../context';

import firebase from 'firebase';

export default CreateAccount = () => {

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(textEmail, textPassword)
      .then(() => signUp())
      .catch(error => alert(error))
  }

  const { signUp } = React.useContext(AuthContext)
  const [textEmail, setTextEmail] = React.useState('')
  const [textPassword, setTextPassword] = React.useState('')

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <TextInput
          style={styles.input_mensagem}
          onChangeText={text => setTextEmail(text)}
          value={textEmail} />

        <TextInput
          style={styles.input_mensagem}
          onChangeText={text => setTextPassword(text.toLowerCase())}
          value={textPassword} secureTextEntry={true} />
      </View>
      <Button title="Criar Conta" onPress={() => handleSignUp()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  input_mensagem: {
    borderColor: '#ccc',
    borderWidth: 1,
    flex: 1,
    borderRadius: 3,
    margin: 10,
    marginTop: 0,
    padding: 4
  },
  footer: {
    flexDirection: 'column',
    width: '100%',
    height: 100
  }
});

