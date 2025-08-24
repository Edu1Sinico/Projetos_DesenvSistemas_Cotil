import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import { ModalPassowrd } from "../../components/modal/modalPassword";

// Variável que contém todas os principais caracteres do teclado, para depois criarmos a senha aleatória.
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // Criar uma função para gerar uma senha
  function generatedPassword() {

    // Variável para a senha
    let password = "";
    let n = charset.length;
    // For para roda o charSet, o size definirá a quantidade de caracteres
    for (let index = 0; index < size; index++) {
      // realizando a concatenação com caracteres aleatórios do charset
      // Math.floor gera números inteiros
      // A multiplicação entre o método random e o valor n gerará o valor aleatório
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password);
    setModalVisible(true);

  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../src/assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatedPassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassowrd password={passwordValue} handleClose={() => setModalVisible(false)} />
      </Modal>

    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    marginBottom: 60
  },

  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  },

  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold"
  }

})