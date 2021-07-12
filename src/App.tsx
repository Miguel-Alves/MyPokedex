import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';
import AppContext from './contexts/AppContext';

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState({});
  const [pokemonList, setPokemonList] = useState([]);
  return (
    <AppContext.Provider
      value={{pokemon, setPokemon, pokemonList, setPokemonList}}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" hidden />
        <Routes />
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
