import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';
import AppContext from './contexts/AppContext';

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState({});
  return (
    <AppContext.Provider value={{pokemon, setPokemon}}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" hidden />
        <Routes />
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
