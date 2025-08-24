import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { } from '@react-native-community/slider'

export default function App() {
  return (
    <View Style={{ styles.container }}>
      <Image
        source={require("../src/assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>20 Caracteres</Text>

      <View style={styles.area}>
        <Slider style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimunTrackTintColor="#000"
          thumbTintColor="#392de9"
        />
      </View>

      <TouchableOpacity>
        <Text></Text>
      </TouchableOpacity>

    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3"
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    marginBottom: 60
  },

  area: {
    marginTop: 14,
    marginBotto: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  }


})