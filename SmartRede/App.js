import React from 'react';
import {Button} from 'react-native';

import {NativeModules} from 'react-native';

function App() {
  function callAlert() {
    NativeModules.Device.getDeviceName((err, name) => console.log(err, name));
  }

  return (
    <Button
      onPress={() => callAlert()}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  );
}

export default App;
