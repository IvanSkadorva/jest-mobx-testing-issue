import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { observer } from "mobx-react";

const App =  observer(() => {

  return (
    <SafeAreaView>
      <Text>Jest Testing Issue</Text>
    </SafeAreaView>
  );
});

export default App;
