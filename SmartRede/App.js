import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import {NativeModules} from 'react-native';

function App() {
  function callAlert() {
    NativeModules.Device.getDeviceName((err, name) => console.log(err, name));
  }

  function teste() {
    NativeModules.Device.show('tesre');
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => callAlert()}>
          <Text>Teste</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => teste()}>
          <Text>Aperte aqui</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default App;
