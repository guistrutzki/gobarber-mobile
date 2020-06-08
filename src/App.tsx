import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <AppProvider>
      <View style={{ backgroundColor: '#312e38', flex: 1 }}>
        <Routes />
      </View>
    </AppProvider>
  </>
);

export default App;
